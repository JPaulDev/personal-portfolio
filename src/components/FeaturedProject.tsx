import { External, Github } from '@icons';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from './Link';

interface Props {
  variant?: 'normal' | 'mirrored';
  project: {
    name: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    linkGithub: string;
    linkExternal: string;
  };
}

export default function FeaturedProject({
  variant = 'normal',
  project,
}: Props) {
  const { name, description, image, technologies, linkGithub, linkExternal } =
    project;

  return (
    <div className="grid grid-cols-12 shadow-2xl md:items-center md:shadow-none">
      <Link
        href={linkExternal}
        className={clsx(
          'group relative row-start-1 bg-teal-500 opacity-25 before:transition-all after:absolute after:inset-0 after:bg-skin-primary after:mix-blend-screen after:duration-200 hover:after:bg-transparent focus:after:bg-transparent md:opacity-100',
          variant === 'normal' && 'col-start-1 col-end-13 md:col-end-8',
          variant === 'mirrored' && 'col-start-1 col-end-13 md:col-start-6'
        )}
      >
        <Image
          src={image}
          quality={90}
          alt=""
          className="h-full object-cover mix-blend-multiply grayscale transition-all duration-200 group-hover:mix-blend-normal group-hover:filter-none group-focus:mix-blend-normal group-focus:filter-none"
        />
      </Link>
      <div
        className={clsx(
          'z-10 row-start-1 flex flex-col items-start justify-center p-6 xs:p-10 md:z-auto md:p-0',
          variant === 'normal' &&
            'col-start-1 col-end-13 md:col-start-5 md:items-end lg:col-start-6',
          variant === 'mirrored' &&
            'col-start-1 col-end-13 md:col-end-9 lg:col-end-8'
        )}
      >
        <p className="my-3 font-mono text-sm text-teal-300">Featured Project</p>
        <Link
          href={linkExternal}
          className="z-10 text-2xl font-semibold text-skin-secondary transition-colors hover:text-teal-300 focus:text-teal-300 xs:text-3xl"
        >
          <h3>{name}</h3>
        </Link>
        <p
          className={clsx(
            'z-10 my-6 rounded text-lg text-skin-tertiary md:bg-skin-tertiary md:p-6 md:shadow-xl',
            variant === 'normal' && 'md:text-right'
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ul
          className={clsx(
            'z-10 mb-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.8125rem] text-skin-secondary md:text-skin-tertiary',
            variant === 'normal' && 'md:justify-end'
          )}
        >
          {technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex text-skin-secondary">
          <li>
            <Link
              className="block p-2 transition-colors hover:text-teal-300 focus:text-teal-300"
              href={linkGithub}
            >
              <Github className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link
              className="block p-2 transition-colors hover:text-teal-300 focus:text-teal-300"
              href={linkExternal}
            >
              <External className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
