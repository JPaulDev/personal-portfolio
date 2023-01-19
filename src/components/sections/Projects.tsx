import { FeaturedProject, SectionHeading } from '@components';
import { PROJECTS } from '@config';

const { featured } = PROJECTS;

export default function Technologies() {
  return (
    <section id="projects">
      <SectionHeading>Some Things I&apos;ve Built</SectionHeading>
      <ul className="flex flex-col gap-10 xs:gap-16 md:gap-28">
        {featured.map((project, index) => (
          <li key={project.name}>
            <FeaturedProject
              project={project}
              variant={index % 2 === 0 ? 'normal' : 'mirrored'}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
