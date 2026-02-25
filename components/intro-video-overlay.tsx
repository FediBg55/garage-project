"use client";

import { useEffect, useState } from "react";

const FALLBACK_HIDE_MS = 9000;

export default function IntroVideoOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, FALLBACK_HIDE_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="intro-video-overlay" aria-label="Garage intro video">
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setIsVisible(false)}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
      <div className="intro-video-mask" />
      <button
        type="button"
        className="intro-video-skip"
        onClick={() => setIsVisible(false)}
        aria-label="Skip intro video"
      >
        Skip
      </button>
    </section>
  );
}
