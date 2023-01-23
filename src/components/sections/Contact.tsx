import { Link, ScrollReveal, SectionHeading } from '@components';
import { EMAIL } from '@config';

export default function Contact() {
  return (
    <section id="contact" className="max-w-xl text-center">
      <ScrollReveal threshold={0.5}>
        <SectionHeading variant="alternative">
          What&rsquo;s next?
        </SectionHeading>
        <div className="mb-3 text-4xl font-semibold text-skin-secondary sm:text-5xl">
          Get In Touch
        </div>
        <p className="mb-12 text-lg text-skin-primary sm:text-xl">
          I&apos;m currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or a potential position
          available, I&apos;ll get back to you as soon as possible.
        </p>
        <Link
          href={`mailto:${EMAIL}`}
          className="inline-block rounded border border-teal-300 px-7 py-5 font-mono text-sm leading-none text-teal-300 transition-colors hover:bg-teal-300/10 focus:bg-teal-300/10"
        >
          Send Email
        </Link>
      </ScrollReveal>
    </section>
  );
}
