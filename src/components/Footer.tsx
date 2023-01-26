import { SOCIAL_MEDIA, GITHUB_LINK } from '@config';
import { Codepen, Github, Instagram, LinkedIn, Twitter } from '@icons';
import Link from './Link';

const icons = {
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
  codepen: Codepen,
};

export default function Footer() {
  return (
    <footer className="mt-32 flex flex-col items-center p-6 md:mt-48">
      <ul className="mb-2 flex md:hidden">
        {SOCIAL_MEDIA.map((link) => {
          const Icon = icons[link.name as keyof typeof icons];

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block p-3 text-skin-tertiary transition-all duration-300 hover:text-teal-300"
              >
                <Icon className="h-5 w-5" />
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={GITHUB_LINK}
        className="font-mono text-sm text-skin-tertiary transition-colors duration-300 hover:text-teal-300"
      >
        Built by JPaulDev
      </Link>
    </footer>
  );
}
