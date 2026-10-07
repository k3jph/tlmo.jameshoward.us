const root = document.querySelector('#privacy-controls');

if (root) {
  const id = root.dataset.gaId || '';
  const version = root.dataset.policyVersion || '1';
  const name = 'tlmo-consent';
  const banner = root.querySelector('#cookie-banner');
  const dialog = root.querySelector('#cookie-settings');
  const state = root.querySelector('[data-cookie-state]');
  let loaded = false;
  let opener = null;

  const gpc = () => navigator.globalPrivacyControl === true;

  const read = () => {
    try {
      const raw = document.cookie.split(';').map(value => value.trim()).find(value => value.startsWith(name + '='));
      if (!raw) return null;
      const value = JSON.parse(decodeURIComponent(raw.slice(name.length + 1)));
      return value.version === version &&
        ['accepted', 'rejected'].includes(value.decision) &&
        Number.isFinite(value.expires) &&
        value.expires > Date.now()
        ? value.decision
        : null;
    } catch {
      return null;
    }
  };

  const write = decision => {
    const value = { decision, version, expires: Date.now() + 365 * 86400000 };
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
  };

  const clearAnalytics = () => {
    const host = location.hostname.split('.');
    const domains = ['', ...host.map((_, index) => '.' + host.slice(index).join('.'))];

    for (const cookie of document.cookie.split(';')) {
      const key = cookie.split('=')[0].trim();
      if (key === '_ga' || key.startsWith('_ga_')) {
        for (const domain of domains) {
          document.cookie = `${key}=; Max-Age=0; Path=/; SameSite=Lax${domain ? '; Domain=' + domain : ''}${location.protocol === 'https:' ? '; Secure' : ''}`;
        }
      }
    }
  };

  const render = () => {
    if (!state) return;
    state.textContent = gpc()
      ? 'Global Privacy Control is enabled in this browser. Analytics remains off.'
      : `Current choice: ${read() || 'not yet chosen'}.`;
    root.querySelectorAll('[data-cookie-accept]').forEach(button => {
      button.disabled = gpc();
    });
  };

  const close = () => {
    if (banner) banner.hidden = true;
    if (dialog?.open) dialog.close();
    if (opener?.isConnected) opener.focus();
    else if (root.contains(document.activeElement)) document.querySelector('#main')?.focus();
  };

  const enable = () => {
    if (!id || gpc() || read() !== 'accepted' || loaded) return;

    window[`ga-disable-${id}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', id, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname,
      page_referrer: document.referrer ? new URL(document.referrer).origin : ''
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    script.dataset.consentAnalytics = 'true';
    document.head.append(script);
    loaded = true;
  };

  const reject = () => {
    if (id) window[`ga-disable-${id}`] = true;
    write('rejected');
    clearAnalytics();
    close();
    render();
    if (loaded) location.reload();
  };

  root.querySelectorAll('[data-cookie-reject]').forEach(button => {
    button.addEventListener('click', reject);
  });

  root.querySelectorAll('[data-cookie-accept]').forEach(button => {
    button.addEventListener('click', () => {
      if (!id || gpc()) return;
      write('accepted');
      close();
      render();
      enable();
    });
  });

  root.querySelector('[data-cookie-close]')?.addEventListener('click', close);

  dialog?.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex="0"]')]
      .filter(element => element.getClientRects().length);
    if (!controls.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !controls.includes(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  });

  dialog?.addEventListener('close', () => {
    if (opener?.isConnected) opener.focus();
  });

  document.querySelectorAll('[data-cookie-preferences]').forEach(control => {
    control.addEventListener('click', event => {
      event.preventDefault();
      opener = control;
      render();
      dialog?.showModal();
    });
  });

  if (id) window[`ga-disable-${id}`] = true;

  if (!id || gpc()) {
    clearAnalytics();
    if (id && gpc()) write('rejected');
  } else if (read() === 'accepted') {
    enable();
  } else if (read() === null && banner) {
    banner.hidden = false;
  }

  render();
}
