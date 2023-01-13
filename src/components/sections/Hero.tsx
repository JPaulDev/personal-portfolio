export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <h1 className="mb-4 ml-1 font-mono text-teal-300 xs:mb-6">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] font-bold leading-none text-skin-secondary">
        Jonathan Watson.
      </h2>
      <h3 className="mb-3 mt-1 text-[clamp(40px,8vw,80px)] font-bold leading-none text-skin-primary">
        I build things for the web.
      </h3>
      <p className="mb-12 max-w-xl text-lg text-skin-primary sm:text-xl">
        I&apos;m a web developer who is passionate about creating visually
        stunning, responsive and user-friendly websites and web applications. I
        am always eager to take on new challenges and enjoy staying up to date
        with the latest web development trends and technologies.
      </p>
    </section>
  );
}
