import { SectionHeading } from '@components';
import { TECHNOLOGIES } from '@config';
import {
  Git,
  JavaScript,
  Jest,
  Next,
  PostgreSQL,
  Prisma,
  Python,
  React,
  Redux,
  StyledComponents,
  Tailwind,
  TypeScript,
} from '@icons';

const icons = {
  javascript: JavaScript,
  typescript: TypeScript,
  python: Python,
  react: React,
  'next.js': Next,
  redux: Redux,
  tailwind: Tailwind,
  git: Git,
  postgresql: PostgreSQL,
  prisma: Prisma,
  jest: Jest,
  'styled components': StyledComponents,
};

export default function Technologies() {
  return (
    <section id="technologies" className="max-w-3xl">
      <SectionHeading>Technologies</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-7">
        {TECHNOLOGIES.map((technology) => {
          const Icon = icons[technology.toLowerCase() as keyof typeof icons];

          return (
            <li key={technology} className="flex flex-col items-center gap-3">
              <Icon className="h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14" />
              <span className="font-mono text-sm text-white">{technology}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
