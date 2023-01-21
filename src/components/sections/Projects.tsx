import { FeaturedProject, Project, SectionHeading } from '@components';
import { PROJECTS } from '@config';

const { featured, other } = PROJECTS;

export default function Technologies() {
  return (
    <>
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

      <section className="max-w-4xl">
        <h2 className="relative my-10 flex justify-center before:absolute before:mt-3 before:h-px before:w-full before:max-w-2xl before:bg-slate-700">
          <span className="z-10 bg-skin-primary px-4 text-center text-2xl font-semibold text-skin-secondary xs:text-3xl">
            Other Noteworthy Projects
          </span>
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {other.map((project) => (
            <li key={project.name}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
