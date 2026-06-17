import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

export function isDataHrefExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href) || href.startsWith("//");
}

export type DataLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  id?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  scroll?: boolean;
  prefetch?: boolean | null;
};

/**
 * Renders `next/link` for in-app paths (including `#` placeholders) and a plain
 * `<a>` for `http(s)`, `mailto`, and `tel` URLs from CMS-style data.
 */
export default function DataLink({
  href,
  children,
  className,
  title,
  id,
  style,
  onClick,
  scroll,
  prefetch,
}: DataLinkProps) {
  const shared = { className, title, id, style, onClick };

  if (isDataHrefExternal(href)) {
    return (
      <a href={href} {...shared}>
        {children}
      </a>
    );
  }

  if (href === "#") {
    return (
      <Link
        href="#"
        scroll={scroll ?? false}
        prefetch={prefetch ?? false}
        {...shared}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      scroll={scroll}
      prefetch={prefetch === null ? undefined : prefetch}
      {...shared}
    >
      {children}
    </Link>
  );
}
