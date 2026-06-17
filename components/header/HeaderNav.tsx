"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState, type ReactNode } from "react";
import type {
  HeaderImageSpec,
  HeaderNavDropdownChild,
  HeaderNavTopItem,
} from "@/data/header";
import { isDropdown, isSubmenu } from "@/data/header";
import {
  collectRouteOpenKeys,
  menuHrefToPathname,
  pathnameMatchesHref,
} from "@/lib/header-nav-route";

const imgStyle = { width: "auto", height: "auto", maxWidth: "100%" } as const;

function HeaderNavLink({
  href,
  className,
  children,
  onClick,
  "aria-expanded": ariaExpanded,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  "aria-expanded"?: boolean;
}) {
  const path = menuHrefToPathname(href);
  if (path != null) {
    return (
      <Link
        href={path}
        className={className}
        onClick={onClick}
        aria-expanded={ariaExpanded}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      {children}
    </a>
  );
}

function DropdownChevron({ spec }: { spec: HeaderImageSpec }) {
  return (
    <Image
      src={spec.src}
      alt={spec.alt}
      width={spec.width}
      height={spec.height}
      style={imgStyle}
    />
  );
}

function DropdownChild({
  item,
  index,
  dropdownIcon,
  parentKey,
  accordion,
  isUserExpanded,
  routeOpenKeys,
  onToggle,
  pathname,
}: {
  item: HeaderNavDropdownChild;
  index: number;
  dropdownIcon: HeaderImageSpec;
  parentKey: string;
  accordion: boolean;
  isUserExpanded: (key: string) => boolean;
  routeOpenKeys: Set<string>;
  onToggle: (key: string) => void;
  pathname: string;
}) {
  const key = `${item.label}-${item.href}-${index}`;
  const itemKey = `${parentKey}-c-${index}`;

  const userExp = accordion && isUserExpanded(itemKey);
  const routeExp = routeOpenKeys.has(itemKey);
  const expanded = userExp || routeExp;

  if (isSubmenu(item)) {
    const liClass = ["has-submenu", expanded && "active", userExp && "open"]
      .filter(Boolean)
      .join(" ");

    return (
      <li className={liClass} key={key}>
        <HeaderNavLink
          href={item.href}
          aria-expanded={accordion ? expanded : undefined}
          onClick={
            accordion
              ? (e) => {
                  e.preventDefault();
                  onToggle(itemKey);
                }
              : undefined
          }
        >
          {item.label}
          <DropdownChevron spec={dropdownIcon} />
        </HeaderNavLink>
        <ul className="sub-menu">
          {item.children.map((leaf, j) => {
            const leafActive = pathnameMatchesHref(pathname, leaf.href);
            return (
              <li key={`${leaf.href}-${j}`} className={leafActive ? "active" : undefined}>
                <HeaderNavLink href={leaf.href}>{leaf.label}</HeaderNavLink>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  const leafActive = pathnameMatchesHref(pathname, item.href);

  return (
    <li key={key} className={leafActive ? "active" : undefined}>
      <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
    </li>
  );
}

function TopNavItem({
  item,
  index,
  dropdownIcon,
  accordion,
  isUserExpanded,
  routeOpenKeys,
  onToggle,
  pathname,
}: {
  item: HeaderNavTopItem;
  index: number;
  dropdownIcon: HeaderImageSpec;
  accordion: boolean;
  isUserExpanded: (key: string) => boolean;
  routeOpenKeys: Set<string>;
  onToggle: (key: string) => void;
  pathname: string;
}) {
  const key = `${item.label}-${item.href}-${index}`;
  const itemKey = `top-${index}`;

  if (isDropdown(item)) {
    const userExp = accordion && isUserExpanded(itemKey);
    const routeExp = routeOpenKeys.has(itemKey);
    const expanded = userExp || routeExp;

    const liClass = [
      "has-dropdown",
      item.dropdownVariant,
      expanded && "active",
      userExp && "open",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <li className={liClass} key={key}>
        <HeaderNavLink
          href={item.href}
          aria-expanded={accordion ? expanded : undefined}
          onClick={
            accordion
              ? (e) => {
                  e.preventDefault();
                  onToggle(itemKey);
                }
              : undefined
          }
        >
          {item.label}
          <DropdownChevron spec={dropdownIcon} />
        </HeaderNavLink>
        <ul className="dropdown-menu">
          {item.children.map((child, j) => (
            <DropdownChild
              key={`${child.label}-${child.href}-${j}`}
              item={child}
              index={j}
              dropdownIcon={dropdownIcon}
              parentKey={itemKey}
              accordion={accordion}
              isUserExpanded={isUserExpanded}
              routeOpenKeys={routeOpenKeys}
              onToggle={onToggle}
              pathname={pathname}
            />
          ))}
        </ul>
      </li>
    );
  }

  const leafActive = pathnameMatchesHref(pathname, item.href);

  return (
    <li key={key} className={leafActive ? "active" : undefined}>
      <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
    </li>
  );
}

export default function HeaderNav({
  menu,
  dropdownIcon,
  accordion = false,
}: {
  menu: HeaderNavTopItem[];
  dropdownIcon: HeaderImageSpec;
  /** Mobile drawer: tap toggles `has-dropdown` / `has-submenu` with `active` + `open`. */
  accordion?: boolean;
}) {
  const pathname = usePathname();
  const [userOpenKeys, setUserOpenKeys] = useState<Set<string>>(
    () => new Set(),
  );

  const routeOpenKeys = useMemo(
    () => collectRouteOpenKeys(menu, pathname),
    [menu, pathname],
  );

  const onToggle = useCallback((navKey: string) => {
    setUserOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(navKey)) next.delete(navKey);
      else next.add(navKey);
      return next;
    });
  }, []);

  const isUserExpanded = useCallback(
    (navKey: string) => userOpenKeys.has(navKey),
    [userOpenKeys],
  );

  return (
    <ul>
      {menu.map((item, i) => (
        <TopNavItem
          key={`nav-${i}`}
          item={item}
          index={i}
          dropdownIcon={dropdownIcon}
          accordion={accordion}
          isUserExpanded={isUserExpanded}
          routeOpenKeys={routeOpenKeys}
          onToggle={onToggle}
          pathname={pathname}
        />
      ))}
    </ul>
  );
}
