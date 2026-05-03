import hero from "@/assets/hero-school.jpg";
import classroom from "@/assets/classroom.jpg";
import toudja from "@/assets/toudja.jpg";
import courtyard from "@/assets/courtyard.jpg";
import lab from "@/assets/lab.jpg";
import classroomEmpty from "@/assets/classroom-empty.jpg";

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-label="Lycée Boudiar Ahmed & Saadi" className={className} fill="none">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.25" />
    <path d="M16 42 L32 16 L48 42 Z" stroke="currentColor" strokeWidth="1.25" />
    <path d="M22 42 L32 26 L42 42" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="32" cy="50" r="1.6" fill="currentColor" />
  </svg>
);

const Stat = ({ k, v, l }: { k: string; v: string; l: string }) => (
  <div className="flex flex-col gap-1 border-l hairline pl-5">
    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
    <div className="font-display text-4xl md:text-5xl">{v}</div>
    <div className="text-sm text-muted-foreground">{l}</div>
  </div>
);

const Section = ({ id, kicker, title, children }: any) => (
  <section id={id} className="container py-24 md:py-32">
    <div className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{kicker}</div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">{title}</h2>
      </div>
      <div className="md:col-span-7 md:col-start-6 text-lg leading-relaxed text-foreground/85 space-y-5">
        {children}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b hairline">
        <div className="bg-[hsl(var(--ink))] text-[hsl(var(--parchment))] text-xs">
          <div className="container py-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <p className="italic leading-snug">
              "I created this website to honor my school and proof to some teachers that school does not proof who is the best" — <span className="text-accent font-medium not-italic">@sadi_bnms</span>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/sadi_bnms"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de sadi_bnms"
                className="inline-flex items-center gap-1 hover:text-accent transition uppercase tracking-[0.2em] text-[10px]"
              >
                Instagram ↗
              </a>
              <span className="opacity-30">·</span>
              <a
                href="https://facebook.com/sadi_bnms"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de sadi_bnms"
                className="inline-flex items-center gap-1 hover:text-accent transition uppercase tracking-[0.2em] text-[10px]"
              >
                Facebook ↗
              </a>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3 text-foreground">
            <Logo className="w-7 h-7 text-primary" />
            <div className="leading-tight">
              <div className="font-display text-base">Lycée des Deux Martyrs</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Boudiar Ahmed & Saadi · Toudja</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#histoire" className="hover:text-primary transition">Histoire</a>
            <a href="#vie" className="hover:text-primary transition">Vie scolaire</a>
            <a href="#filieres" className="hover:text-primary transition">Filières</a>
            <a href="#actualites" className="hover:text-primary transition">Actualités</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition">
            Inscription
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden grain">
        <img src={hero} alt="Le lycée au pied des montagnes de Toudja" width={1920} height={1280}
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-fade" />
        <div className="absolute inset-0 vignette" />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-28 text-[hsl(var(--parchment))]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-6 animate-rise">
              <span className="w-10 h-px bg-[hsl(var(--parchment))]/60" />
              Toudja · Béjaïa · Algérie
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-rise-delay-1">
              Au pied des montagnes,<br />
              <em className="italic font-light">une école qui se souvient — et qui élève.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[hsl(var(--parchment))]/85 animate-rise-delay-2">
              Le Lycée des Deux Martyrs <span className="font-display italic">Boudiar Ahmed & Saadi</span> porte
              le nom de deux fils de Toudja tombés pour la liberté. Soixante ans plus tard, leurs noms
              accompagnent chaque génération de lycéens.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-rise-delay-3">
              <a href="#histoire" className="inline-flex items-center gap-3 bg-[hsl(var(--parchment))] text-[hsl(var(--ink))] px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition">
                Découvrir l'établissement
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-[hsl(var(--parchment))]/40 text-[hsl(var(--parchment))] px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[hsl(var(--parchment))]/10 transition">
                Nous rendre visite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y hairline bg-[hsl(var(--parchment))]">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 py-16">
          <Stat k="Fondé en" v="1985" l="à Toudja, Béjaïa" />
          <Stat k="Élèves" v="912" l="trois niveaux du secondaire" />
          <Stat k="Enseignants" v="68" l="encadrement dédié" />
          <Stat k="Réussite Bac" v="87%" l="promotion 2025" />
        </div>
      </section>

      {/* HISTOIRE */}
      <Section id="histoire" kicker="Mémoire — Tamektit" title="Deux noms gravés dans la pierre, deux vies offertes au pays.">
        <p>
          Boudiar Ahmed et Saadi, fils de la commune de Toudja, ont rejoint la lutte pour
          l'indépendance avec l'enthousiasme d'une jeunesse qui refusait l'oubli. Tombés
          pendant la guerre de libération, ils ne reviendront jamais s'asseoir sur les bancs de l'école.
        </p>
        <p>
          En 1985, lorsque l'établissement ouvrit ses portes au pied du mont Adrar Aïssa,
          la commune choisit naturellement de lui confier leurs noms. Depuis, chaque rentrée
          rend hommage à ce double héritage : l'instruction, et la dignité.
        </p>
        <figure className="pt-6">
          <img src={courtyard} alt="La cour du lycée à Toudja" loading="lazy"
               width={1024} height={768}
               className="w-full shadow-frame" />
          <figcaption className="text-sm text-muted-foreground mt-4 italic">
            « Ils sont partis jeunes pour que d'autres puissent grandir. »
          </figcaption>
        </figure>
      </Section>

      {/* PARALLAX-STYLE EDITORIAL BAND */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={toudja} alt="Le village de Toudja vu d'en haut" loading="lazy"
             width={1920} height={1080}
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--ink))]/70" />
        <div className="relative z-10 container h-full flex items-end pb-16">
          <blockquote className="font-display italic text-3xl md:text-5xl text-[hsl(var(--parchment))] max-w-4xl text-balance leading-tight">
            « L'école, ici, sent l'olivier et la pluie de novembre. On y apprend à lire,
            et on y apprend d'où l'on vient. »
            <footer className="mt-6 text-sm not-italic font-body uppercase tracking-[0.25em] text-[hsl(var(--parchment))]/70">
              — Ancien élève, promotion 1998
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FILIERES */}
      <section id="filieres" className="container py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Filières</div>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Trois voies, une même exigence : <em className="italic font-light">faire grandir</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 border-t hairline">
          {[
            { n: "01", t: "Sciences expérimentales", d: "Mathématiques, physique, sciences de la vie. Une voie rigoureuse vers les études médicales et d'ingénierie." },
            { n: "02", t: "Mathématiques", d: "Pour les esprits qui aiment l'abstraction et la démonstration. Préparation aux classes prépa et aux écoles supérieures." },
            { n: "03", t: "Lettres & langues", d: "Arabe, français, anglais, tamazight. Une formation humaniste tournée vers le monde et vers l'héritage." },
          ].map((f) => (
            <article key={f.n} className="group p-8 md:p-10 border-b md:border-b-0 md:border-r hairline last:border-r-0 hover:bg-[hsl(var(--parchment))] transition-colors">
              <div className="font-display text-sm text-primary mb-8">{f.n} / 03</div>
              <h3 className="font-display text-2xl mb-4 leading-tight">{f.t}</h3>
              <p className="text-foreground/75 leading-relaxed">{f.d}</p>
              <div className="mt-10 inline-flex items-center text-xs uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition">
                Programme détaillé →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VIE SCOLAIRE */}
      <section id="vie" className="bg-[hsl(var(--ink))] text-[hsl(var(--parchment))]">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <img src={classroom} alt="Salle de classe du lycée" loading="lazy"
                   className="w-full h-48 md:h-64 object-cover shadow-soft col-span-2" />
              <img src={lab} alt="Laboratoire de sciences" loading="lazy"
                   className="w-full h-32 md:h-44 object-cover shadow-soft" />
              <img src={classroomEmpty} alt="Salle de classe lumineuse" loading="lazy"
                   className="w-full h-32 md:h-44 object-cover shadow-soft" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Vie scolaire</div>
            <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
              Apprendre lentement, profondément, ensemble.
            </h2>
            <p className="mt-6 text-[hsl(var(--parchment))]/80 text-lg leading-relaxed">
              Au-delà des programmes, le lycée cultive une culture du débat, du sport
              et de l'engagement. Ateliers de théâtre en tamazight, club d'astronomie
              sous le ciel sans pollution lumineuse de Toudja, équipes de football,
              et journées portes ouvertes en mai.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {["Bibliothèque · 8 400 ouvrages","Laboratoires · physique & SVT","Salle informatique","Atelier tamazight","Club d'astronomie","Équipe de football"].map(x => (
                <li key={x} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent rounded-full" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ACTUALITES */}
      <section id="actualites" className="container py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Journal</div>
            <h2 className="font-display text-4xl md:text-5xl">Actualités du lycée</h2>
          </div>
          <a href="#" className="hidden md:inline text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-primary">Toutes les actualités →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {[
            { d: "12 Avril 2026", t: "Cérémonie du 18 avril : journée du Savoir", e: "Conférences, expositions et lectures dans la cour d'honneur." },
            { d: "03 Mars 2026", t: "Olympiades de mathématiques : trois finalistes", e: "Trois élèves de terminale qualifiés pour la finale nationale d'Alger." },
            { d: "21 Janvier 2026", t: "Sortie pédagogique aux ruines romaines", e: "Les classes de seconde explorent l'aqueduc antique de Toudja." },
          ].map((a) => (
            <article key={a.t} className="bg-background p-8 md:p-10 hover:bg-[hsl(var(--parchment))] transition">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">{a.d}</div>
              <h3 className="font-display text-2xl leading-tight mb-4">{a.t}</h3>
              <p className="text-foreground/70 leading-relaxed">{a.e}</p>
              <div className="rule mt-10 mb-6" />
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-primary">Lire →</a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-[hsl(var(--ink))] text-[hsl(var(--parchment))]">
        <div className="container py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo className="w-10 h-10 text-accent mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
              Venez nous rencontrer.
            </h2>
            <p className="mt-6 text-[hsl(var(--parchment))]/75 max-w-md">
              L'établissement est ouvert aux familles tous les mercredis après-midi.
              Pour les inscriptions, prenez rendez-vous auprès du secrétariat.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7 space-y-3 text-sm text-[hsl(var(--parchment))]/80">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Adresse</div>
            <div>Lycée Boudiar Ahmed & Saadi</div>
            <div>Route principale, Toudja</div>
            <div>06000 Béjaïa, Algérie</div>
            <a className="block pt-3 underline-offset-4 hover:underline"
               href="https://www.google.com/maps/place/Lyc%C3%A9e+Les+Deux+Martyrs+Boudiar+Ahmed+%26+Saadi/@36.7429338,4.919914,15z"
               target="_blank" rel="noreferrer">Voir sur la carte ↗</a>
          </div>
          <div className="md:col-span-3 space-y-3 text-sm text-[hsl(var(--parchment))]/80">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Contact</div>
            <div>+213 (0) 34 00 00 00</div>
            <div>secretariat@lycee-toudja.dz</div>
            <div className="pt-3">Lun – Jeu · 8h – 17h<br />Sam · 8h – 12h</div>
          </div>
        </div>
        <div className="border-t border-[hsl(var(--parchment))]/10">
          <div className="container py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[hsl(var(--parchment))]/50">
            <div>© 2026 Lycée des Deux Martyrs Boudiar Ahmed & Saadi · Toudja</div>
          <div>This site is created by <span className="text-accent font-medium">sadi_bnms</span></div>
            <div className="font-display italic">In memoriam — 1954 / 1962</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
