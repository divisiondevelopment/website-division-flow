"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

/**
 * Global AOS defaults. Bottom-of-page blocks (e.g. footer) often need
 * `anchorPlacement` + post-init `refresh()` so they are not left at opacity 0.
 */
export type AOSInitProps = {
  offset?: number;
  duration?: number;
  once?: boolean;
  easing?: string;
  anchorPlacement?:
    | "top-bottom"
    | "top-center"
    | "top-top"
    | "center-bottom"
    | "center-center"
    | "center-top"
    | "bottom-bottom"
    | "bottom-center"
    | "bottom-top";
};

const defaults = {
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
  offset: 120,
  anchorPlacement: "center-bottom" as const,
};

export default function AOSInit(props: AOSInitProps = {}) {
  const pathname = usePathname();
  const { offset, duration, once, easing, anchorPlacement } = {
    ...defaults,
    ...props,
  };

  useEffect(() => {
    AOS.init({
      duration,
      once,
      easing: easing as AOS.AosOptions["easing"],
      offset,
      anchorPlacement,
    });
    const id = requestAnimationFrame(() => {
      AOS.refreshHard();
    });
    return () => cancelAnimationFrame(id);
  }, [duration, once, easing, offset, anchorPlacement]);

  useEffect(() => {
    queueMicrotask(() => AOS.refreshHard());

    const rafId = requestAnimationFrame(() => AOS.refreshHard());
    const timeoutIds = [120, 350, 700].map((ms) =>
      window.setTimeout(() => AOS.refreshHard(), ms),
    );

    return () => {
      cancelAnimationFrame(rafId);
      for (const id of timeoutIds) window.clearTimeout(id);
    };
  }, [pathname]);

  useEffect(() => {
    let resizeTimer: number | undefined;
    const onResize = () => {
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => AOS.refresh(), 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (resizeTimer !== undefined) window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    let timer: number | undefined;
    const scheduleRefreshHard = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        timer = undefined;
        AOS.refreshHard();
      }, 80);
    };

    const onLoad = () => scheduleRefreshHard();
    window.addEventListener("load", onLoad);

    const observer = new MutationObserver(scheduleRefreshHard);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
