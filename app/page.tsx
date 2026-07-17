"use client";

import { useEffect, useState } from "react";

const BOOKSY_URL = "https://booksy.com/pl-pl/166491_bronco-barbershop_barber-shop_13750_wroclaw#ba_s=seo";
const INSTAGRAM_URL = "https://www.instagram.com/ksenja_barber";
const BLIK_PHONE_DISPLAY = "+48 576 862 590";
const BLIK_PHONE_COPY = "576862590";
const PORTRAIT_DATA = "data:image/webp;base64,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";

type View = "home" | "tip" | "review-return";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ksenja-review-started") === "1") {
      sessionStorage.removeItem("ksenja-review-started");
      setView("review-return");
    }
  }, []);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(BLIK_PHONE_COPY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const openBooksyAfterTip = () => {
    window.location.href = BOOKSY_URL;
  };

  const openBooksy = () => {
    sessionStorage.setItem("ksenja-review-started", "1");
    window.location.href = BOOKSY_URL;
  };

  if (view === "tip") {
    return (
      <main className="page-shell gta-bg">
        <section className="panel panel-narrow tip-panel">
          <button className="back" onClick={() => setView("home")} aria-label="Wróć">←</button>
          <Brand />
          <div className="eyebrow">NAPIWEK BLIK</div>
          <h1>Dziękuję za wsparcie</h1>
          <p className="lead">Wyślij dowolną kwotę przelewem BLIK na telefon.</p>

          <div className="phone-box">
            <span>Numer telefonu</span>
            <strong>{BLIK_PHONE_DISPLAY}</strong>
          </div>

          <button className="primary" onClick={copyPhone}>
            {copied ? "Numer skopiowany ✓" : "Skopiuj numer"}
          </button>

          <div className="steps">
            <span>1. Otwórz aplikację banku</span>
            <span>2. Wybierz BLIK → przelew na telefon</span>
            <span>3. Wpisz kwotę i zatwierdź</span>
          </div>

          <button className="secondary" onClick={openBooksyAfterTip}>Wpłaciłem/am ☕</button>
          <p className="micro">Po kliknięciu przejdziesz do Booksy, aby zostawić opinię.</p>
        </section>
      </main>
    );
  }

  if (view === "review-return") {
    return (
      <main className="page-shell gta-bg">
        <section className="panel panel-narrow">
          <Brand />
          <div className="eyebrow">DZIĘKUJĘ</div>
          <h1>Dziękuję za opinię</h1>
          <p className="lead">Jeśli masz ochotę, możesz również zostawić napiwek.</p>
          <button className="primary" onClick={() => setView("tip")}>Zostaw napiwek ☕</button>
          <button className="ghost" onClick={() => setView("home")}>Wróć do strony głównej</button>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell gta-bg">
      <section className="gta-layout">
        <div className="hero-card">
          <div className="hero-copy">
            <Brand />
            <div className="hero-script">Dziękuję za wizytę!</div>
            <p className="hero-text">
              Twoje wsparcie pomaga mi rozwijać się i dbać o każdy kolejny detal.
            </p>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <img className="hero-photo" src={PORTRAIT_DATA} alt="Ksenia Barber" />
            </div>
          </div>
        </div>

        <div className="actions gta-actions">
          <button className="action action-pink" onClick={() => setView("tip")}>
            <span className="icon" aria-hidden="true"><CoffeeIcon /></span>
            <span><strong>Zostaw napiwek</strong><small>BLIK na telefon</small></span>
            <b>›</b>
          </button>

          <button className="action action-violet" onClick={openBooksy}>
            <span className="icon" aria-hidden="true"><PenIcon /></span>
            <span><strong>Zostaw opinię</strong><small>Booksy</small></span>
            <b>›</b>
          </button>

          <a className="action action-blue" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <span className="icon" aria-hidden="true"><InstagramIcon /></span>
            <span><strong>Instagram</strong><small>@ksenja_barber</small></span>
            <b>›</b>
          </a>
        </div>

        <section className="value-strip">
          <div className="value-item">
            <span className="value-icon">✦</span>
            <strong>JAKOŚĆ</strong>
            <small>na pierwszym miejscu</small>
          </div>
          <div className="value-item">
            <span className="value-icon">♥</span>
            <strong>PASJA</strong>
            <small>w każdym cięciu</small>
          </div>
          <div className="value-item">
            <span className="value-icon">★</span>
            <strong>ZAUFANIE</strong>
            <small>które budujemy razem</small>
          </div>
          <div className="value-item">
            <span className="value-icon">♠</span>
            <strong>TWÓJ STYL</strong>
            <small>zawsze na pierwszym planie</small>
          </div>
        </section>

        <button className="review-helper" onClick={() => setView("review-return")}>
          Wróciłem/am z Booksy
        </button>
      </section>
    </main>
  );
}

function Brand() {
  return (
    <div className="brand brand-gta" aria-label="KSENIA BARBER">
      <strong>KSENIA</strong>
      <span>BARBER</span>
    </div>
  );
}

function CoffeeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M7 4c0 1 1 1.5 1 2.5" />
      <path d="M11 4c0 1 1 1.5 1 2.5" />
      <path d="M3 20h15" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 20 4.3-1 10.8-10.8a2.1 2.1 0 0 0-3-3L5.3 16 4 20Z" />
      <path d="m14.8 6.5 2.7 2.7" />
      <path d="M8.3 19 5 15.7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
