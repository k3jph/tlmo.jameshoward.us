export type Chapter = {
  n: number;
  title: string;
  authors?: string;
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
  { n: 1, title: 'Teaching Cross-Listed Mathematics Courses Online' },
  { n: 2, title: 'What Do We Know about Student Learning from Online Mathematics Homework?' },
  { n: 3, title: 'Designing Mathematics Hybrid Classrooms in High School: The Case of Valeria' },
  { n: 4, title: 'Designing Mathematics Hybrid Classrooms in High School: The Cases of Nicoletta and Lorenza' },
  { n: 5, title: 'Upper-Level Mathematics and Statistics Courses Shared across Campuses' },
  { n: 6, title: 'Online Statistics Teaching and Learning' },
  { n: 7, title: 'Statistics for Engineers' },
  { n: 8, title: 'Encouraging Higher-Order Thinking in Online and Hybrid Mathematics and Statistics Courses' },
  { n: 9, title: 'Tools for Communication and Interaction in Online Mathematics Teaching and Learning' },
  { n: 10, title: 'Managing Students’ Mathematics Anxiety in the Context of Online Learning Environments' },
  { n: 11, title: 'A Face-to-Face Program of Support for Students in a Hybrid Online Developmental Mathematics Course' },
  { n: 12, title: 'A Practical Guide to Discussions in Online Mathematics Courses' },
  { n: 13, title: 'Cognitive Load Theory and Mathematics Instruction through MOOCs' },
  { n: 14, title: 'Technological Pedagogical Content Knowledge for Meaningful Learning and Instrumental Orchestrations: A Case Study of a Cross Product Exploration using CalcPlot3D' },
  { n: 15, title: 'Enhancement of Mathematics Learning through Novel Online Tools' },
  { n: 16, title: 'Making Online Mathematics Method Courses Interactive and Effective with OER' },
  { n: 17, title: 'Developing Interactive Demonstrations for the Online Mathematics Classroom: Interactive Diagrams' },
  { n: 18, title: 'MOOCs for Mathematics Teacher Education: New Environments for Professional Development' },
  { n: 19, title: 'Online Mathematics “Self-Help Kiosks” to Support Pre-Service Teachers' },
  { n: 20, title: 'Online Mathematics Education: The Good, the Bad, and the General Overview' }
];

export const secondEditionChapters: Chapter[] = [
  { n: 1, title: 'Teaching Cross-Listed Mathematics Courses Online' },
  { n: 2, title: 'What Do We Know about Student Learning from Online Mathematics Homework?' },
  { n: 3, title: 'Designing Mathematics Hybrid Classrooms in High School: The Case of Valeria' },
  { n: 4, title: 'Designing Mathematics Hybrid Classrooms in High School: The Cases of Nicoletta and Lorenza' },
  { n: 5, title: 'Upper-Level Mathematics and Statistics Courses Shared Across Campuses' },
  { n: 6, title: 'Online Statistics Teaching and Learning' },
  { n: 7, title: 'Statistics for Engineers' },
  { n: 8, title: 'Emphasizing Active Learning and Conceptual Understanding in Asynchronous and Synchronous Online Settings: Practical Strategies and Challenges', isNew: true },
  { n: 9, title: 'The Evolution of Assessing Content Knowledge in Online Mathematics Courses', isNew: true },
  { n: 10, title: 'Encouraging Higher-Order Thinking in Online and Hybrid Mathematics and Statistics Courses' },
  { n: 11, title: 'Tools for Communication and Interaction in Online Mathematics Teaching and Learning' },
  { n: 12, title: 'Managing Students’ Mathematics Anxiety in the Context of Online Learning Environments' },
  { n: 13, title: 'A Face-to-Face Program of Support for Students in a Hybrid Online Developmental Mathematics Course' },
  { n: 14, title: 'A Practical Guide to Discussions in Online Mathematics Courses' },
  { n: 15, title: 'Three Cases Representing a Variety of Online, Post-Secondary Mathematics Tutoring Interactions', isNew: true },
  { n: 16, title: 'Online Discussion Forums in Discrete Mathematics Courses: Promising Affordances', isNew: true },
  { n: 17, title: 'A Framework for Analyzing Asynchronous Discussion Activities', isNew: true },
  { n: 18, title: 'Cognitive Load Theory and Mathematics Instruction through MOOCs' },
  { n: 19, title: 'Technological Pedagogical Content Knowledge for Meaningful Learning and Instrumental Orchestrations: A Case Study of a Cross Product Exploration using CalcPlot3D' },
  { n: 20, title: 'Enhancement of Mathematics Learning through Novel Online Tools' },
  { n: 21, title: 'Making Online Mathematics Method Courses Interactive and Effective with OER' },
  { n: 22, title: 'Developing Interactive Demonstrations for the Online Mathematics Classroom: Interactive Diagrams' },
  { n: 23, title: 'Effective Design and Use of Video for Learning Mathematics', isNew: true },
  { n: 24, title: 'COVID-19 Impact on Digital Resource Use in Secondary Mathematics Instruction', isNew: true },
  { n: 25, title: 'Using Technology to Support Students’ Meanings in Single-Variable Calculus: Insights from Iterative Design-Research Studies', isNew: true },
  { n: 26, title: 'Theoretical Principles for the Design of Multimedia Learning Resources that Stimulate Students’ Experience of Intellectual Need', isNew: true },
  { n: 27, title: 'MOOCs for Mathematics Teacher Education: New Environments for Professional Development' },
  { n: 28, title: 'Online Mathematics “Self-Help Kiosks” to Support Pre-Service Teachers' },
  { n: 29, title: 'Online Mathematics Education: The Good, the Bad, and the General Overview' }
];
