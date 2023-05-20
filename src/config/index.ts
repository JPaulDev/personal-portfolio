import commerce from '../../public/images/commerce.webp';
import portfolio from '../../public/images/portfolio.webp';

export const NAV_LINKS = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Technologies',
    href: '#technologies',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const RESUME_LINK = '/resume.pdf';

export const GITHUB_LINK = 'https://www.github.com/jpauldev';

export const EMAIL = 'jwatson88@live.co.uk';

export const SOCIAL_MEDIA = [
  { name: 'github', href: 'https://www.github.com/jpauldev' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/jpaulwatson/' },
  { name: 'codepen', href: 'https://www.codepen.io/jpauldev' },
  { name: 'twitter', href: '' },
  { name: 'instagram', href: '' },
];

export const RECENT_SKILLS = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Prisma',
  'Redux',
];

export const TECHNOLOGIES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Redux',
  'Tailwind',
  'Git',
  'PostgreSQL',
  'Prisma',
  'Jest',
  'Styled Components',
];

const RTL_LINK =
  '<a target="_blank" href="https://testing-library.com/docs/guiding-principles" class="relative whitespace-nowrap text-teal-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-teal-300 after:transition-all after:duration-300 after:hover:w-full">guidelines</a>';

export const PROJECTS = {
  featured: [
    {
      name: 'E-commerce Store',
      description: `An e-commerce website where users can view different products
        by category and add/remove products from their shopping cart. The site
        also features authentication provided by Passport.js. Users can create an
        account, update their personal details, or change their password. The
        project is built with Next.js and uses a PostgreSQL database hosted on
        Amazon Web Services. Tests are written using React Testing Library and
        follow the ${RTL_LINK} set out in their documentation.`,
      image: commerce,
      linkGithub: 'https://github.com/JPaulDev/ecommerce-store',
      linkExternal: 'https://ecommerce-store-jpauldev.vercel.app',
      technologies: [
        'React',
        'Next.js',
        'Styled Components',
        'Redux',
        'PostgreSQL',
        'Prisma',
        'Jest',
        'Testing Library',
      ],
    },
    {
      name: 'Personal Portfolio',
      description: `My personal portfolio website, built to showcase my projects
        and skills, is constructed using Next.js and TypeScript. Tailwind CSS is
        utilized for styling, and the project is deployed and hosted on Vercel.`,
      image: portfolio,
      linkGithub: 'https://github.com/JPaulDev/personal-portfolio',
      linkExternal: '/',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
  ],
  other: [
    {
      name: 'Memory Game',
      description: `A Pokémon-themed memory game built with React and Styled Components.
        The user is presented with a grid of cards, and must click on each card 
        only once. The user can select from four different difficulties.`,
      linkGithub: 'https://github.com/JPaulDev/memory-game',
      linkExternal: 'https://jpauldev.github.io/memory-game',
      technologies: ['React', 'Styled Components'],
    },
    {
      name: 'CV Creator',
      description: `A CV creator built with React and Styled Components. The user
        can create a CV by filling out a form with their personal details and work
        history.`,
      linkGithub: 'https://github.com/JPaulDev/cv-creator',
      linkExternal: 'https://jpauldev.github.io/cv-creator',
      technologies: ['React', 'Styled Components'],
    },
    {
      name: 'Northcoders News',
      description: `A news website that displays a range of fictional news articles.
        Each news article has its own page, which includes a featured image, the article
        title, author name, date of publication, and the article content. The article
        page also allows users to like an article and/or leave a comment and share their thoughts.`,
      linkGithub: 'https://github.com/JPaulDev/nc-news',
      linkExternal: 'https://nc-news-three.vercel.app',
      technologies: [
        'React',
        'Tailwind CSS',
        'Create React App',
        'React Router',
      ],
    },
    {
      name: 'News API',
      description: `A news API built with Express.js and PostgreSQL. The API
        allows users to view a list of articles, view a single article, and
        view a list of comments for a single article. Users can also like an article
        and/or add a comment. Tests are written using Jest and Supertest.`,
      linkGithub: 'https://github.com/JPaulDev/news-api',
      linkExternal: 'https://news-api-sjab.onrender.com/api',
      technologies: ['Express.js', 'Jest', 'PostgreSQL'],
    },
  ],
};
