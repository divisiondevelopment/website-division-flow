"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type WordRotateProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export default function WordRotate({
  words,
  interval = 2200,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState<number>();
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !isVisible || words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [reducedMotion, isVisible, words.length, interval]);

  const currentWord = reducedMotion ? words[0] : words[index];

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    setWidth(el.offsetWidth);
  }, [currentWord]);

  return (
    <span
      ref={containerRef}
      className={`word-rotate${className ? ` ${className}` : ""}`}
      style={width !== undefined ? { width } : undefined}
    >
      <span ref={measureRef} className="word-rotate__measure" aria-hidden="true">
        {currentWord}
      </span>
      <span className="word-rotate__viewport">
        {reducedMotion ? (
          <span className="word-rotate__word">{words[0]}</span>
        ) : (
          <span key={index} className="word-rotate__word word-rotate__word--animated">
            {words[index]}
          </span>
        )}
      </span>
    </span>
  );
}
