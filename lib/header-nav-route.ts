import type {
  HeaderNavDropdownChild,
  HeaderNavTopItem,
} from "@/data/header";
import { isDropdown, isSubmenu } from "@/data/header";

/**
 * Resolves menu `href` to a pathname for `Link` and active-state checks.
 * Supports App Router paths (`/blog`, `/about`) and legacy `.html` filenames.
 */
export function menuHrefToPathname(href: string): string | null {
  const h = href.trim();
  if (!h || h === "#") return null;
  if (h.startsWith("/") && !h.startsWith("//")) {
    const q = h.split("?")[0];
    return q || "/";
  }
  const clean = h.replace(/^\.\//, "");
  if (clean === "index.html") return "/";
  if (clean.endsWith(".html")) {
    const base = clean.slice(0, -5);
    if (base === "index") return "/";
    return `/${base}`;
  }
  return `/${clean.replace(/^\/+/, "")}`;
}

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function pathnameMatchesHref(pathname: string, href: string): boolean {
  const p = menuHrefToPathname(href);
  if (p == null) return false;
  const current = normalizePathname(pathname);
  const target = normalizePathname(p);
  if (current === target) return true;
  // Treat nested dynamic routes as active for their parent menu path.
  // Example: `/product-details/business-school-bag` matches `/product-details`.
  if (target !== "/" && current.startsWith(`${target}/`)) return true;
  return false;
}

/**
 * Accordion keys for parents of the current route (e.g. `top-2` for Blog, `top-2-c-1` if needed).
 * When a leaf matches `pathname`, all ancestor keys in the menu tree are included.
 */
export function collectRouteOpenKeys(
  menu: HeaderNavTopItem[],
  pathname: string,
): Set<string> {
  const keys = new Set<string>();
  for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    if (!isDropdown(item)) continue;
    const topKey = `top-${i}`;
    if (
      dropdownChildrenContainPathname(item.children, topKey, pathname, keys)
    ) {
      keys.add(topKey);
    }
  }
  return keys;
}

function dropdownChildrenContainPathname(
  children: HeaderNavDropdownChild[],
  parentKey: string,
  pathname: string,
  keys: Set<string>,
): boolean {
  let hit = false;
  for (let j = 0; j < children.length; j++) {
    const child = children[j];
    const childKey = `${parentKey}-c-${j}`;
    if (isSubmenu(child)) {
      const leafHit = child.children.some((leaf) =>
        pathnameMatchesHref(pathname, leaf.href),
      );
      if (leafHit) {
        keys.add(childKey);
        hit = true;
      }
    } else if (pathnameMatchesHref(pathname, child.href)) {
      hit = true;
    }
  }
  return hit;
}
