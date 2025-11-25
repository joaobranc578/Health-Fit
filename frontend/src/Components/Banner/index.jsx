// ...existing code...
import React, { useState, useRef, useEffect } from "react";
import "./Banner.css";

const slides = [
  { src: "/img/Banner.png", alt: "Banner 1" },
  { src: "/img/carrosel1.png", alt: "Banner 2" },
  { src: "/img/carrosel2.png", alt: "Banner 3" },
  { src: "/img/carrosel3.png", alt: "Banner 4" },
];

export default function Banner({ interval = 0 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (interval > 0) startAuto();
    return () => stopAuto();
    // eslint-disable-next-line
  }, [index]);

  const startAuto = () => {
    stopAuto();
    if (interval > 0) {
      timerRef.current = setTimeout(() => goTo(index + 1), interval);
    }
  };
  const stopAuto = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i) => {
    const next = ((i % slides.length) + slides.length) % slides.length;
    setIndex(next);
  };
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAuto();
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 40) prev();
    else if (dx < -40) next();
    startAuto();
  };

  return (
    <div
      className="banner-carousel"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Carrossel de banners"
    >
      <div
        className="banner-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div className="banner-slide" key={i}>
            <img src={s.src} alt={s.alt || `slide-${i}`} draggable={false} />
          </div>
        ))}
      </div>

      <button className="banner-btn banner-prev" onClick={prev} aria-label="Anterior">
        ‹
      </button>
      <button className="banner-btn banner-next" onClick={next} aria-label="Próximo">
        ›
      </button>

      <div className="banner-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`banner-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
// ...existing code...