import { useState } from "react";
import { Link } from "react-router-dom";
import examSchedule from "@/assets/exam-schedule-t3.jpg";

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-label="Lycée Boudiar Ahmed & Saadi" className={className} fill="none">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.25" />
    <path d="M16 42 L32 16 L48 42 Z" stroke="currentColor" strokeWidth="1.25" />
    <path d="M22 42 L32 26 L42 42" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="32" cy="50" r="1.6" fill="currentColor" />
  </svg>
);

const posts = [
  {
    id: "t3-exams-2026",
    date: "28 Avril 2026",
    category: "Examens",
    title: "Calendrier des examens du 3e trimestre — Année 2025/2026",
    titleAr: "زرنامة سير اختبارات الفصل الثالث — 2025/2026",
    summary:
      "La direction du lycée porte à la connaissance des élèves et des familles le calendrier officiel des épreuves du troisième trimestre pour l'année scolaire 2025/2026. Les examens se dérouleront du 10 au 14 mai 2026.",
    image: examSchedule,
    imageAlt: "Calendrier officiel des examens du troisième trimestre 2025/2026",
  },
];

const News = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b hairline">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 text-foreground">
            <Logo className="w-7 h-7 text-primary" />
            <div className="leading-tight">
              <div className="font-display text-base">Lycée des Deux Martyrs</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Boudiar Ahmed & Saadi · Toudja</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/#histoire" className="hover:text-primary transition">Histoire</Link>
            <Link to="/#vie" className="hover:text-primary transition">Vie scolaire</Link>
            <Link to="/#filieres" className="hover:text-primary transition">Filières</Link>
            <Link to="/news" className="text-primary font-medium border-b border-primary pb-0.5">Actualités</Link>
            <Link to="/#contact" className="hover:text-primary transition">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/#contact" className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition">
              Inscription
            </Link>
            <button
              type="button"
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`block w-5 h-px bg-foreground origin-center transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-foreground origin-center transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden border-t hairline bg-background/95 backdrop-blur-md">
            <div className="container py-5 flex flex-col gap-5 text-sm">
              <Link to="/#histoire" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Histoire</Link>
              <Link to="/#vie" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Vie scolaire</Link>
              <Link to="/#filieres" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Filières</Link>
              <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="text-primary font-medium">Actualités</Link>
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Contact</Link>
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="mt-1 inline-flex w-fit items-center text-xs uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition">
                Inscription
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b hairline">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Journal du lycée</div>
          <h1 className="font-display text-5xl md:text-6xl text-balance leading-[1.05]">Actualités</h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/70">
            Informations officielles, calendriers et événements du Lycée des Deux Martyrs Boudiar Ahmed & Saadi.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <main className="container py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-16">
          {posts.map((post) => (
            <article key={post.id} className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {post.date} · <span className="text-primary">{post.category}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-2">{post.title}</h2>
              <div className="font-display italic text-xl text-foreground/60 mb-6" dir="rtl">{post.titleAr}</div>
              <p className="text-foreground/75 text-lg leading-relaxed mb-8">{post.summary}</p>
              <figure>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full shadow-frame"
                  loading="eager"
                />
                <figcaption className="text-sm text-muted-foreground mt-4 italic">
                  Document officiel — Direction du Lycée des Deux Martyrs, Toudja · {post.date}
                </figcaption>
              </figure>
            </article>
          ))}

          {/* SIDEBAR */}
          <aside className="md:col-span-3 md:col-start-10">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Retour</div>
                <Link to="/" className="inline-flex items-center gap-2 text-sm hover:text-primary transition">
                  ← Accueil
                </Link>
              </div>
              <div className="border-t hairline pt-8">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Catégories</div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="text-foreground font-medium">Examens</li>
                  <li>Événements</li>
                  <li>Résultats</li>
                  <li>Vie scolaire</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--parchment))]">
        <div className="border-t border-[hsl(var(--parchment))]/10">
          <div className="container py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[hsl(var(--parchment))]/50">
            <div>© 2026 Lycée des Deux Martyrs Boudiar Ahmed & Saadi · Toudja</div>
            <div className="font-display italic">In memoriam — 1954 / 1962</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
