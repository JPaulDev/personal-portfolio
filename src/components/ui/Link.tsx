import NextLink, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

export default function Link({
  href,
  target,
  rel,
  className,
  children,
  ...rest
}: LinkProps & ComponentPropsWithoutRef<'a'>) {
  // Links are external if they start with http or https.
  const isExternal = href.match(/(^http|^mailto)/i);
  let linkTarget = target;

  // By default, any external links should open in a new tab.
  if (typeof linkTarget === 'undefined') {
    linkTarget = isExternal ? '_blank' : '_self';
  }

  const safeRel = linkTarget === '_blank' ? 'noopener noreferrer' : rel;

  return isExternal ? (
    <a
      className={className}
      href={href}
      rel={safeRel}
      target={linkTarget}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <NextLink
      className={className}
      href={href}
      rel={safeRel}
      target={linkTarget}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
