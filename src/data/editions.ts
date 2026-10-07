export type Chapter = {
  n: number;
  title: string;
  authors: string[];
  part: string;
  isNew?: boolean;
};

export type Edition = {
  slug: string;
  label: string;
  year: number;
  pages: number;
  chapters: number;
  printIsbn: string;
  ebookIsbn: string;
  doi: string;
  cover: string;
  cover640: string;
  description: string;
  note: string;
};

export const editions: Edition[] = [
  {
    slug: 'first-edition',
    label: 'First edition',
    year: 2020,
    pages: 438,
    chapters: 20,
    printIsbn: '9780815372363',
    ebookIsbn: '9781351245562',
    doi: '10.1201/9781351245586',
    cover: 'https://covers.vitalsource.com/vbid/9781351245562/width/1200?style=preview',
    cover640: 'https://covers.vitalsource.com/vbid/9781351245562/width/640?style=preview',
    description: 'The original collection: practical work from instructors already teaching mathematics and statistics at a distance, organized around course design, interaction, technology, teacher education, and commentary.',
    note: 'Published just as online education was about to become everybody’s problem.'
  },
  {
    slug: 'second-edition',
    label: 'Second edition',
    year: 2025,
    pages: 696,
    chapters: 29,
    printIsbn: '9781032504537',
    ebookIsbn: '9781003398547',
    doi: '10.1201/9781003398547',
    cover: 'https://covers.vitalsource.com/vbid/9781040337578/width/1200?style=preview',
    cover640: 'https://covers.vitalsource.com/vbid/9781040337578/width/640?style=preview',
    description: 'A substantially expanded edition that preserves the practical core of the first while adding nine chapters, lessons from COVID-19, and a much broader account of the technological landscape.',
    note: 'Five years later, online mathematics education had acquired rather more field data.'
  }
];

export const firstEditionChapters: Chapter[] = [
  { n: 1, title: 'Teaching Cross-Listed Mathematics Courses Online', authors: ['Laurie Battle', 'Atish J. Mitra', 'H. Smith Risser'], part: 'Course Design' },
  { n: 2, title: 'What Do We Know about Student Learning from Online Mathematics Homework?', authors: ['Allison Dorko'], part: 'Course Design' },
  { n: 3, title: 'Designing Mathematics Hybrid Classrooms in High School: The Case of Valeria', authors: ['Chiara Andrà', 'Domenico Brunetto', "Igor' Kontorovich"], part: 'Course Design' },
  { n: 4, title: 'Designing Mathematics Hybrid Classrooms in High School: The Cases of Nicoletta and Lorenza', authors: ['Chiara Andrà', 'Domenico Brunetto', "Igor' Kontorovich"], part: 'Course Design' },
  { n: 5, title: 'Upper-Level Mathematics and Statistics Courses Shared across Campuses', authors: ['Stephan Ramon Garcia', 'Jingchen Hu', 'Steven J. Miller'], part: 'Course Design' },
  { n: 6, title: 'Online Statistics Teaching and Learning', authors: ['Jim Albert', 'Mine Çetinkaya-Rundel', 'Jingchen Hu'], part: 'Course Design' },
  { n: 7, title: 'Statistics for Engineers', authors: ['Charles E. Smith', 'Kimberly S. Weems', 'Reneé H. Moore'], part: 'Course Design' },
  { n: 8, title: 'Encouraging Higher-Order Thinking in Online and Hybrid Mathematics and Statistics Courses', authors: ['Larry Copes'], part: 'Student Interaction' },
  { n: 9, title: 'Tools for Communication and Interaction in Online Mathematics Teaching and Learning', authors: ['Shay Kidd'], part: 'Student Interaction' },
  { n: 10, title: 'Managing Students’ Mathematics Anxiety in the Context of Online Learning Environments', authors: ['Michael A. Tallman', 'Rosaura Uscanga'], part: 'Student Interaction' },
  { n: 11, title: 'A Face-to-Face Program of Support for Students in a Hybrid Online Developmental Mathematics Course', authors: ['Edgar J. Fuller', 'Jessica Deshler'], part: 'Student Interaction' },
  { n: 12, title: 'A Practical Guide to Discussions in Online Mathematics Courses', authors: ['Glenn F. Miller', 'Kathleen H. Offenholley'], part: 'Student Interaction' },
  { n: 13, title: 'Cognitive Load Theory and Mathematics Instruction through MOOCs', authors: ['E. Zimudzi', 'S. Kesianye', 'K.G. Garegae', 'S. Mogotsi', 'A.A. Nkhwalume', 'M.J. Motswiri'], part: 'Using Technology' },
  { n: 14, title: 'Technological Pedagogical Content Knowledge for Meaningful Learning and Instrumental Orchestrations: A Case Study of a Cross Product Exploration using CalcPlot3D', authors: ['Monica VanDieren', 'Deborah Moore-Russo', 'Paul Seeburger'], part: 'Using Technology' },
  { n: 15, title: 'Enhancement of Mathematics Learning through Novel Online Tools', authors: ['Zohreh Shahbazi'], part: 'Using Technology' },
  { n: 16, title: 'Making Online Mathematics Method Courses Interactive and Effective with OER', authors: ['Bhesh Raj Mainali'], part: 'Using Technology' },
  { n: 17, title: 'Developing Interactive Demonstrations for the Online Mathematics Classroom: Interactive Diagrams', authors: ['Mina Sedaghatjou', 'Harpreet Kaur', 'Kelly A. Williams'], part: 'Using Technology' },
  { n: 18, title: 'MOOCs for Mathematics Teacher Education: New Environments for Professional Development', authors: ['Eugenia Taranto'], part: 'Teacher Education' },
  { n: 19, title: 'Online Mathematics “Self-Help Kiosks” to Support Pre-Service Teachers', authors: ['Helen Forgasz', 'Jennifer Hall', 'Simone Zmood'], part: 'Teacher Education' },
  { n: 20, title: 'Online Mathematics Education: The Good, the Bad, and the General Overview', authors: ['Sarah Ferguson'], part: 'Commentary' }
];

export const secondEditionChapters: Chapter[] = [
  { n: 1, title: 'Teaching Cross-Listed Mathematics Courses Online', authors: ['Laurie Battle', 'Atish J. Mitra', 'H. Smith Risser'], part: 'Course Design' },
  { n: 2, title: 'What Do We Know about Student Learning from Online Mathematics Homework?', authors: ['Allison Dorko'], part: 'Course Design' },
  { n: 3, title: 'Designing Mathematics Hybrid Classrooms in High School: The Case of Valeria', authors: ['Chiara Andrà', 'Domenico Brunetto', "Igor' Kontorovich"], part: 'Course Design' },
  { n: 4, title: 'Designing Mathematics Hybrid Classrooms in High School: The Cases of Nicoletta and Lorenza', authors: ['Chiara Andrà', 'Domenico Brunetto', "Igor' Kontorovich"], part: 'Course Design' },
  { n: 5, title: 'Upper-Level Mathematics and Statistics Courses Shared Across Campuses', authors: ['Stephan Ramon Garcia', 'Jingchen Hu', 'Steven J. Miller'], part: 'Course Design' },
  { n: 6, title: 'Online Statistics Teaching and Learning', authors: ['Jim Albert', 'Mine Çetinkaya-Rundel', 'Jingchen Hu'], part: 'Course Design' },
  { n: 7, title: 'Statistics for Engineers', authors: ['Charles E. Smith', 'Kimberly S. Weems', 'Reneé H. Moore'], part: 'Course Design' },
  { n: 8, title: 'Emphasizing Active Learning and Conceptual Understanding in Asynchronous and Synchronous Online Settings: Practical Strategies and Challenges', authors: ['Cynthia Francisco'], part: 'Course Design', isNew: true },
  { n: 9, title: 'The Evolution of Assessing Content Knowledge in Online Mathematics Courses', authors: ['Angie Hodge-Zickerman', 'Cindy York'], part: 'Course Design', isNew: true },
  { n: 10, title: 'Encouraging Higher-Order Thinking in Online and Hybrid Mathematics and Statistics Courses', authors: ['Larry Copes'], part: 'Student Interaction' },
  { n: 11, title: 'Tools for Communication and Interaction in Online Mathematics Teaching and Learning', authors: ['Shay Kidd'], part: 'Student Interaction' },
  { n: 12, title: 'Managing Students’ Mathematics Anxiety in the Context of Online Learning Environments', authors: ['Michael A. Tallman', 'Rosaura Uscanga'], part: 'Student Interaction' },
  { n: 13, title: 'A Face-to-Face Program of Support for Students in a Hybrid Online Developmental Mathematics Course', authors: ['Edgar J. Fuller', 'Jessica Deshler'], part: 'Student Interaction' },
  { n: 14, title: 'A Practical Guide to Discussions in Online Mathematics Courses', authors: ['Glenn F. Miller', 'Kathleen H. Offenholley'], part: 'Student Interaction' },
  { n: 15, title: 'Three Cases Representing a Variety of Online, Post-Secondary Mathematics Tutoring Interactions', authors: ['Keith Gallagher', 'Nicole Engelke Infante', 'Deborah Moore-Russo'], part: 'Student Interaction', isNew: true },
  { n: 16, title: 'Online Discussion Forums in Discrete Mathematics Courses: Promising Affordances', authors: ['Valentina Postelnicu'], part: 'Student Interaction', isNew: true },
  { n: 17, title: 'A Framework for Analyzing Asynchronous Discussion Activities', authors: ['Zackery Reed', 'Darryl Chamberlain Jr.', 'Lynette Ramirez'], part: 'Student Interaction', isNew: true },
  { n: 18, title: 'Cognitive Load Theory and Mathematics Instruction through MOOCs', authors: ['E. Zimudzi', 'S. Kesianye', 'K.G. Garegae', 'S. Mogotsi', 'A.A. Nkhwalume', 'M.J. Motswiri'], part: 'Using Technology' },
  { n: 19, title: 'Technological Pedagogical Content Knowledge for Meaningful Learning and Instrumental Orchestrations: A Case Study of a Cross Product Exploration using CalcPlot3D', authors: ['Monica VanDieren', 'Deborah Moore-Russo', 'Paul Seeburger'], part: 'Using Technology' },
  { n: 20, title: 'Enhancement of Mathematics Learning through Novel Online Tools', authors: ['Zohreh Shahbazi'], part: 'Using Technology' },
  { n: 21, title: 'Making Online Mathematics Method Courses Interactive and Effective with OER', authors: ['Bhesh Raj Mainali'], part: 'Using Technology' },
  { n: 22, title: 'Developing Interactive Demonstrations for the Online Mathematics Classroom: Interactive Diagrams', authors: ['Mina Sedaghatjou', 'Harpreet Kaur', 'Kelly A. Williams'], part: 'Using Technology' },
  { n: 23, title: 'Effective Design and Use of Video for Learning Mathematics', authors: ['Trefor Bazett'], part: 'Using Technology', isNew: true },
  { n: 24, title: 'COVID-19 Impact on Digital Resource Use in Secondary Mathematics Instruction', authors: ['Deborah Moore-Russo', 'Milton Sheehan'], part: 'Using Technology', isNew: true },
  { n: 25, title: 'Using Technology to Support Students’ Meanings in Single-Variable Calculus: Insights from Iterative Design-Research Studies', authors: ['Michael Tallman', 'Zackery Reed', 'Michael Oehrtman', 'Jason Martin'], part: 'Using Technology', isNew: true },
  { n: 26, title: 'Theoretical Principles for the Design of Multimedia Learning Resources that Stimulate Students’ Experience of Intellectual Need', authors: ['Michael Tallman', 'Aaron Weinberg', 'Steven Jones', 'Jason Martin'], part: 'Using Technology', isNew: true },
  { n: 27, title: 'MOOCs for Mathematics Teacher Education: New Environments for Professional Development', authors: ['Eugenia Taranto'], part: 'Teacher Education' },
  { n: 28, title: 'Online Mathematics “Self-Help Kiosks” to Support Pre-Service Teachers', authors: ['Helen Forgasz', 'Jennifer Hall', 'Simone Zmood'], part: 'Teacher Education' },
  { n: 29, title: 'Online Mathematics Education: The Good, the Bad, and the General Overview', authors: ['Sarah Ferguson'], part: 'Commentary' }
];

export const firstToSecond: Record<number, number> = {
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
  8: 10, 9: 11, 10: 12, 11: 13, 12: 14,
  13: 18, 14: 19, 15: 20, 16: 21, 17: 22,
  18: 27, 19: 28, 20: 29
};

export const secondToFirst: Record<number, number> = Object.fromEntries(
  Object.entries(firstToSecond).map(([first, second]) => [second, Number(first)])
);

export const contributorSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const chapterUrl = (editionSlug: string, n: number) =>
  '/chapters/' + editionSlug + '/' + String(n).padStart(2, '0') + '/';

export const allContributions = [
  ...firstEditionChapters.map(chapter => ({ ...chapter, edition: editions[0] })),
  ...secondEditionChapters.map(chapter => ({ ...chapter, edition: editions[1] }))
];

export const contributors = Array.from(
  allContributions.reduce((map, contribution) => {
    contribution.authors.forEach(name => {
      const existing = map.get(name) ?? [];
      existing.push(contribution);
      map.set(name, existing);
    });
    return map;
  }, new Map<string, typeof allContributions>())
).map(([name, contributions]) => ({
  name,
  slug: contributorSlug(name),
  contributions
})).sort((a, b) => a.name.localeCompare(b.name));
