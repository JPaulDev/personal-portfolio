import NextLink, { LinkProps } from 'next/link';
import { ComponentPropsWithRef, forwardRef } from 'react';

type Props = LinkProps & ComponentPropsWithRef<'a'>;

// eslint-disable-next-line react/display-name
const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ href, target, rel, className, children, ...rest }, ref) => {
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
        ref={ref}
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
        ref={ref}
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
);

export default Link;
