"use client";

import { useEffect, useState } from "react";

const BOOKSY_URL = "https://booksy.com/pl-pl/166491_bronco-barbershop_barber-shop_13750_wroclaw#ba_s=seo";
const INSTAGRAM_URL = "https://www.instagram.com/ksenja_barber";
const BLIK_PHONE_DISPLAY = "+48 576 862 590";
const BLIK_PHONE_COPY = "576862590";

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
      <main className="page-shell">
        <section className="card">
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
      <main className="page-shell">
        <section className="card">
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
    <main className="page-shell">
      <section className="card">
        <Brand />
        <div className="eyebrow">DZIĘKUJĘ ZA WIZYTĘ</div>
        <h1>Miło Cię widzieć</h1>
        <p className="lead">Wybierz jedną z trzech prostych opcji.</p>

        <div className="actions">
          <button className="action" onClick={() => setView("tip")}>
            <span className="icon" aria-hidden="true"><CoffeeIcon /></span>
            <span><strong>Zostaw napiwek</strong><small>BLIK na telefon</small></span>
            <b>›</b>
          </button>

          <button className="action" onClick={openBooksy}>
            <span className="icon" aria-hidden="true"><PenIcon /></span>
            <span><strong>Zostaw opinię</strong><small>Booksy</small></span>
            <b>›</b>
          </button>

          <a className="action" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <span className="icon" aria-hidden="true"><InstagramIcon /></span>
            <span><strong>Instagram</strong><small>@ksenja_barber</small></span>
            <b>›</b>
          </a>
        </div>

        <button className="review-helper" onClick={() => setView("review-return")}>
          Wróciłem/am z Booksy
        </button>
        <p className="micro">KSENIA BARBER · WROCŁAW</p>
      </section>
    </main>
  );
}

function Brand() {
  return (
    <div className="brand" aria-label="KSENIA BARBER">
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
