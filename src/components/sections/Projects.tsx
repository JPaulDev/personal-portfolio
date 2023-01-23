import {
  FeaturedProject,
  Project,
  ScrollReveal,
  SectionHeading,
} from '@components';
import { PROJECTS } from '@config';

const { featured, other } = PROJECTS;

export default function Technologies() {
  return (
    <>
      <section id="projects">
        <ScrollReveal as={SectionHeading} threshold={0.8}>
          Some Things I&apos;ve Built
        </ScrollReveal>
        <ul className="flex flex-col gap-10 xs:gap-16 md:gap-28">
          {featured.map((project, index) => (
            <ScrollReveal key={project.name} as="li" threshold={0.35}>
              <FeaturedProject
                project={project}
                variant={index % 2 === 0 ? 'normal' : 'mirrored'}
              />
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl">
        <ScrollReveal
          as="h2"
          threshold={0.8}
          className="relative my-10 flex justify-center before:absolute before:mt-3 before:h-px before:w-full before:max-w-2xl before:bg-slate-700"
        >
          <span className="z-10 bg-skin-primary px-4 text-center text-2xl font-semibold text-skin-secondary xs:text-3xl">
            Other Noteworthy Projects
          </span>
        </ScrollReveal>
        <ul className="grid gap-5 sm:grid-cols-2">
          {other.map((project, i) => (
            <ScrollReveal
              key={project.name}
              as="li"
              delay={i * 200}
              threshold={0.6}
            >
              <Project project={project} />
            </ScrollReveal>
          ))}
        </ul>
      </section>
    </>
  );
}
