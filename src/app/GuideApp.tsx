import { useEffect, useMemo, useState } from "react";
import { Bookmark, Search, X } from "lucide-react";
import {
  cards,
  cats,
  checklist,
  levelLabel,
  signGroups,
  signs,
  type Card,
  type FilterId,
  type Level,
  type SignItem,
} from "@/data/guide";
import { SignFace, Visual } from "@/app/visuals";

const SAVE_KEY = "drive-test-saved";
const CHECK_KEY = "drive-test-checks";

const levelClass: Record<Level, string> = {
  critical: "bg-critical-soft text-critical",
  essential: "bg-blue-soft text-blue",
  caution: "bg-caution-soft text-caution",
  note: "bg-surface text-muted",
};

const sourceLabel = {
  handbook: "Driver’s Handbook, 08/2026",
  booking: "Access NS booking",
  local: "Local test routes",
};

function loadSet(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function GuideApp() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<FilterId>("all");
  const [saved, setSaved] = useState<string[]>([]);
  const [checks, setChecks] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSaved(loadSet(SAVE_KEY));
    setChecks(loadSet(CHECK_KEY));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
  }, [saved, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
  }, [checks, ready]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("guide-search")?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim().toLowerCase();

  const visible = useMemo(() => {
    return cards.filter((card) => {
      if (cat === "saved" && !saved.includes(card.id)) return false;
      if (cat === "signs") return false;
      if (cat !== "all" && cat !== "saved" && card.cat !== cat) return false;
      if (!q) return true;
      const blob = [card.title, card.lede, ...(card.bullets ?? []), levelLabel[card.level]]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });
  }, [cat, q, saved]);

  const visibleSigns = useMemo(() => {
    if (cat !== "all" && cat !== "signs") return [];
    if (!q) return signs;
    return signs.filter((s) =>
      [s.name, s.kind, s.meaning, levelLabel[s.level]].join(" ").toLowerCase().includes(q),
    );
  }, [cat, q]);

  const done = checks.length;

  function toggleSave(id: string) {
    setSaved((curr) => (curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]));
  }

  function toggleCheck(id: string) {
    setChecks((curr) => (curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]));
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3 md:pr-36">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight">Drive Test</span>
            <span className="hidden text-sm text-muted sm:inline">Halifax · Class 5</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <a href="#rules" className="hover:text-ink">
              Rules
            </a>
            <a href="#signs" className="hover:text-ink">
              Signs
            </a>
            <a href="#day" className="rounded-full bg-blue px-3 py-2 text-sm font-medium text-paper">
              Test day
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1100px] px-4 pb-24">
        <section className="pt-10 pb-8 md:pt-16 md:text-center">
          <p className="font-mono text-xs tracking-widest text-faint uppercase">
            Nova Scotia · Traffic Safety Act · 2026
          </p>
          <h1 className="display mt-4 max-w-3xl md:mx-auto">The road test, made skimmable.</h1>
          <p className="mt-5 max-w-xl text-muted md:mx-auto">
            Rules, speeds, signs, and the parking moves an examiner watches — pulled from the
            August 2026 Driver’s Handbook, written for a Halifax Class 5 test.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-4">
          {[
            ["30 min", "Class 5 test"],
            ["$52.54", "Fee with HST"],
            ["30 km/h", "Kids in a school zone"],
            ["2 weeks", "Wait after a fail"],
          ].map(([n, l]) => (
            <div key={l} className="bg-paper px-4 py-5">
              <p className="text-2xl font-semibold tracking-tight tabular-nums">{n}</p>
              <p className="text-sm leading-5 text-muted">{l}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Critical", "A fault that fails tests or breaks a hard rule.", "bg-critical"],
            ["Essential", "Examiners score this every route.", "bg-blue"],
            ["Caution", "Easy to miss. Still on the test.", "bg-caution"],
          ].map(([name, copy, dot]) => (
            <div key={name} className="flex gap-3 rounded-2xl bg-surface px-4 py-4">
              <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
              <div>
                <p className="text-base font-medium leading-6">{name}</p>
                <p className="text-sm leading-5 text-muted">{copy}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="day" className="scroll-mt-24 pt-16">
          <h2 className="section-title">Before you leave the house.</h2>
          <p className="mt-3 max-w-xl text-muted">
            {done} of {checklist.length} checked. Stays on this phone.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {checklist.map((item) => {
              const on = checks.includes(item.id);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggleCheck(item.id)}
                    className={`flex min-h-11 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-base leading-6 ${
                      on ? "border-blue bg-blue-soft" : "border-line bg-paper"
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                        on ? "border-blue bg-blue text-paper" : "border-line"
                      }`}
                      aria-hidden
                    >
                      {on ? "✓" : ""}
                    </span>
                    <span className={on ? "text-muted line-through" : ""}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="sticky top-[57px] z-10 -mx-4 mt-12 border-y border-line bg-paper/95 px-4 py-3 backdrop-blur-md">
          <label className="flex items-center gap-2 rounded-full border border-line bg-paper px-4">
            <Search className="h-4 w-4 text-faint" aria-hidden />
            <input
              id="guide-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search parking, school zone, 30…"
              className="h-11 w-full bg-transparent text-base outline-none placeholder:text-faint"
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-muted">
                <X className="h-4 w-4" />
              </button>
            ) : (
              <span className="hidden font-mono text-xs text-faint sm:inline">/</span>
            )}
          </label>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {cats.map((c) => {
              const on = cat === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={`shrink-0 rounded-full px-3 py-2 text-sm ${
                    on ? "bg-ink text-paper" : "bg-surface text-muted"
                  }`}
                >
                  {c.label}
                  {c.id === "saved" && saved.length > 0 ? ` ${saved.length}` : ""}
                </button>
              );
            })}
          </div>
        </div>

        {cat !== "signs" ? (
        <section id="rules" className="scroll-mt-40 pt-8">
          {visible.length === 0 ? (
            <p className="py-16 text-center text-muted">Nothing matches. Try “stop”, “park”, or “30”.</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2">
              {visible.map((card, i) => (
                <CardView
                  key={card.id}
                  card={card}
                  saved={saved.includes(card.id)}
                  onSave={() => toggleSave(card.id)}
                  delay={Math.min(i, 8)}
                />
              ))}
            </ul>
          )}
        </section>
        ) : null}

        {visibleSigns.length > 0 ? (
          <section id="signs" className={`scroll-mt-24 ${cat === "signs" ? "pt-8" : "pt-20"}`}>
            <h2 className="section-title">Signs worth knowing cold.</h2>
            <p className="mt-3 max-w-xl text-muted">
              Octagon is only stop. Inverted triangle is only yield. A yellow diamond warns.
              Fluorescent pentagon is a school area. Orange means the usual lane and the usual
              speed are paused.
            </p>
            {signGroups.map((group) => {
              const items = visibleSigns.filter((s) => s.group === group.id);
              if (items.length === 0) return null;
              return (
                <div key={group.id} className="mt-10">
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-5 text-muted">{group.lede}</p>
                  <SignGrid items={items} />
                </div>
              );
            })}
          </section>
        ) : cat === "signs" ? (
          <p className="py-16 text-center text-muted">No sign matches that.</p>
        ) : null}

        <footer className="mt-20 border-t border-line pt-8 text-sm leading-6 text-muted">
          <p>
            Written from the Nova Scotia Driver’s Handbook (August 2026, ISBN 978-1-77448-826-3)
            under the Traffic Safety Act, plus the Access Nova Scotia Class 5 booking page.
            Halifax test-centre notes are labelled as local instructor practice, not government
            routes.
          </p>
          <p className="mt-3">
            This is a study aid, not legal advice and not an official Registry of Motor Vehicles
            site. Confirm anything that could change at{" "}
            <a className="text-blue underline" href="https://novascotia.ca/book-a-road-test/">
              novascotia.ca/book-a-road-test
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

function SignGrid({ items }: { items: SignItem[] }) {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((sign) => (
        <li key={sign.id} className="rounded-2xl border border-line bg-paper p-4">
          <SignFace item={sign} />
          <div className="mt-3 flex items-start justify-between gap-2">
            <h3 className="text-base leading-6 font-medium">{sign.name}</h3>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${levelClass[sign.level]}`}>
              {levelLabel[sign.level]}
            </span>
          </div>
          <p className="mt-1 font-mono text-[11px] tracking-wide text-faint uppercase">{sign.kind}</p>
          <p className="mt-2 text-sm leading-5 text-muted">{sign.meaning}</p>
        </li>
      ))}
    </ul>
  );
}

function CardView({
  card,
  saved,
  onSave,
  delay,
}: {
  card: Card;
  saved: boolean;
  onSave: () => void;
  delay: number;
}) {
  return (
    <li
      className="card-in rounded-2xl border border-line bg-paper p-5"
      style={{ animationDelay: `${delay * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${levelClass[card.level]}`}>
          {levelLabel[card.level]}
        </span>
        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          aria-label={saved ? "Remove saved card" : "Save card"}
          className={`grid h-11 w-11 place-items-center rounded-full ${saved ? "bg-blue text-paper" : "bg-surface text-muted"}`}
        >
          <Bookmark className="h-4 w-4" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <h3 className="mt-3 text-xl leading-7 font-semibold tracking-tight">{card.title}</h3>
      <p className="mt-2 text-base leading-6 text-ink">{card.lede}</p>
      {card.bullets ? (
        <ul className="mt-3 space-y-2 text-sm leading-5 text-muted">
          {card.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {card.visual ? <Visual id={card.visual} /> : null}
      <p className="mt-4 font-mono text-[11px] tracking-wide text-faint uppercase">
        {sourceLabel[card.source]}
      </p>
    </li>
  );
}
