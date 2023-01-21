import { External, Folder, Github } from '@icons';
import Link from './Link';

interface Props {
  project: {
    name: string;
    description: string;
    technologies: string[];
    linkGithub: string;
    linkExternal: string;
  };
}

export default function Project({ project }: Props) {
  const { name, description, technologies, linkGithub, linkExternal } = project;

  return (
    <div className="relative flex h-full flex-col justify-between rounded-md bg-skin-tertiary px-7 py-8 shadow-lg transition-transform duration-300 focus-within:-translate-y-2 hover:-translate-y-2">
      <div>
        <div className="mb-9 flex justify-between">
          <Folder className="h-10 w-10 text-teal-300" />
          <ul className="flex text-skin-tertiary">
            <li>
              <Link
                className="relative z-10 block py-1 px-2 transition-colors hover:text-teal-300 focus:text-teal-300"
                href={linkGithub}
              >
                <Github className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link
                className="relative z-10 block py-1 px-2 transition-colors hover:text-teal-300 focus:text-teal-300"
                href={linkExternal}
              >
                <External className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href={linkExternal}
          className="group mb-2 block after:absolute after:inset-0"
        >
          <h3 className="text-[1.375rem] font-semibold leading-none text-skin-secondary group-hover:text-teal-300 group-focus:text-teal-300">
            {name}
          </h3>
        </Link>
        <p className="mb-5 text-[1.0625rem] text-skin-tertiary">
          {description}
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-skin-primary">
        {technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
