import { EMAIL, SOCIAL_MEDIA } from '@config';
import { Codepen, Github, Instagram, LinkedIn, Twitter } from '@icons';
import Link from './Link';

const icons = {
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
  codepen: Codepen,
};

export default function SocialAndEmail() {
  return (
    <>
      <ul className="fixed bottom-0 left-5 hidden flex-col items-center text-skin-tertiary after:mt-6 after:h-24 after:w-px after:bg-slate-400 md:flex lg:left-10">
        {SOCIAL_MEDIA.map((link) => {
          const Icon = icons[link.name as keyof typeof icons];

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block p-3 transition-all duration-300 hover:-translate-y-[3px] hover:text-teal-300"
              >
                <Icon className="h-5 w-5" />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="fixed bottom-0 right-5 hidden flex-col items-center text-skin-tertiary after:mt-6 after:h-24 after:w-px after:bg-slate-400 md:flex lg:right-10">
        <Link
          href="mailto:jwatson88@live.co.uk"
          className="block p-3 font-mono text-sm transition-all duration-300 [writing-mode:vertical-lr] hover:-translate-y-[3px] hover:text-teal-300"
        >
          {EMAIL}
        </Link>
      </div>
    </>
  );
}
