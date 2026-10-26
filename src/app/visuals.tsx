import type { ReactNode } from "react";
import type { SignItem } from "@/data/guide";

function Frame({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <figure className="mt-4 overflow-hidden rounded-2xl border border-line bg-paper">
      <div className="px-3 py-4">{children}</div>
      {label ? (
        <figcaption className="border-t border-line px-4 py-2 font-mono text-xs tracking-wide text-faint">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function HillDiagram() {
  const cars = [
    { title: "Downhill", sub: "Curb or not", wheels: "right" as const },
    { title: "Uphill", sub: "With a curb", wheels: "left" as const },
    { title: "Uphill", sub: "No curb", wheels: "right" as const },
  ];
  return (
    <Frame label="Handbook 2.2.21 · front wheels">
      <div className="grid grid-cols-3 gap-2">
        {cars.map((c) => (
          <div key={c.title + c.sub} className="text-center">
            <svg viewBox="0 0 88 78" className="mx-auto h-20 w-full" aria-hidden>
              <path d="M8 58 H80" stroke="#d9d9d9" strokeWidth="6" strokeLinecap="round" />
              <path d="M14 52 H74" stroke="#202020" strokeWidth="2" />
              <rect x="30" y="28" width="28" height="16" rx="3" fill="#202020" />
              <circle cx="36" cy="48" r="5" fill="#fcfcfc" stroke="#202020" strokeWidth="2" />
              <circle cx="52" cy="48" r="5" fill="#fcfcfc" stroke="#202020" strokeWidth="2" />
              {c.wheels === "left" ? (
                <path d="M32 48 L26 40 M48 48 L42 40" stroke="#0a66ff" strokeWidth="2" />
              ) : (
                <path d="M40 48 L46 40 M56 48 L62 40" stroke="#0a66ff" strokeWidth="2" />
              )}
            </svg>
            <p className="text-sm leading-5 font-medium">{c.title}</p>
            <p className="text-xs leading-4 text-muted">{c.sub}</p>
            <p className="mt-1 font-mono text-xs text-blue">
              wheels {c.wheels}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function ParallelDiagram() {
  const steps = ["Line up", "Angle in", "Straighten", "Tuck"];
  return (
    <Frame label="About 1 m out · finish within 30 cm">
      <div className="grid grid-cols-4 gap-1">
        {steps.map((s, i) => (
          <div key={s} className="text-center">
            <svg viewBox="0 0 64 86" className="mx-auto h-24 w-full" aria-hidden>
              <rect x="8" y="4" width="22" height="30" rx="3" fill="#e0e0e0" />
              <rect x="8" y="52" width="22" height="30" rx="3" fill="#e0e0e0" />
              <path d="M4 0 V86" stroke="#d9d9d9" strokeWidth="4" />
              {i === 0 && <rect x="36" y="18" width="22" height="30" rx="3" fill="#0a66ff" />}
              {i === 1 && (
                <rect
                  x="34"
                  y="28"
                  width="22"
                  height="30"
                  rx="3"
                  fill="#0a66ff"
                  transform="rotate(-28 45 43)"
                />
              )}
              {i === 2 && <rect x="32" y="36" width="22" height="30" rx="3" fill="#0a66ff" />}
              {i === 3 && <rect x="12" y="36" width="22" height="30" rx="3" fill="#0a66ff" />}
            </svg>
            <p className="text-xs leading-4 text-muted">
              {i + 1}. {s}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function RoundaboutDiagram() {
  return (
    <Frame label="Yield on entry · signal on exit · counter-clockwise">
      <svg viewBox="0 0 220 160" className="mx-auto h-40 w-full max-w-sm" aria-hidden>
        <rect width="220" height="160" fill="#f0f0f0" rx="12" />
        <rect x="92" y="0" width="36" height="160" fill="#fcfcfc" />
        <rect x="0" y="62" width="220" height="36" fill="#fcfcfc" />
        <circle cx="110" cy="80" r="34" fill="#202020" />
        <circle cx="110" cy="80" r="22" fill="#f0f0f0" />
        <path
          d="M110 48 A32 32 0 1 0 142 80"
          fill="none"
          stroke="#0a66ff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M136 74 L146 80 L136 86" fill="none" stroke="#0a66ff" strokeWidth="3" />
        <rect x="98" y="112" width="24" height="16" rx="3" fill="#e5484d" />
        <text x="110" y="146" textAnchor="middle" fontSize="11" fill="#646464" fontFamily="Space Grotesk, sans-serif">
          yield
        </text>
      </svg>
    </Frame>
  );
}

export function LinesDiagram() {
  return (
    <Frame label="Pass only when the broken yellow is on your side">
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { t: "Broken yellow", d: "Passing ok if safe", a: "both" },
          { t: "Solid pair", d: "No passing either way", a: "none" },
          { t: "Broken on your side", d: "You may pass", a: "you" },
        ].map((row) => (
          <div key={row.t} className="rounded-xl bg-surface px-3 py-3">
            <svg viewBox="0 0 80 36" className="mb-2 w-full" aria-hidden>
              <rect width="80" height="36" rx="6" fill="#202020" />
              {row.a === "both" && (
                <path d="M40 4 V10 M40 16 V22 M40 28 V34" stroke="#f5d90a" strokeWidth="3" />
              )}
              {row.a === "none" && (
                <>
                  <path d="M36 4 V32" stroke="#f5d90a" strokeWidth="3" />
                  <path d="M44 4 V32" stroke="#f5d90a" strokeWidth="3" />
                </>
              )}
              {row.a === "you" && (
                <>
                  <path d="M34 4 V32" stroke="#f5d90a" strokeWidth="3" />
                  <path d="M46 4 V8 M46 14 V18 M46 24 V28" stroke="#f5d90a" strokeWidth="3" />
                </>
              )}
            </svg>
            <p className="text-sm leading-5 font-medium">{row.t}</p>
            <p className="text-xs leading-4 text-muted">{row.d}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function LightsDiagram() {
  const lights = [
    { c: "#1f8a4c", name: "Green", d: "Go only if clear" },
    { c: "#e3a008", name: "Amber", d: "Stop if you can" },
    { c: "#e5484d", name: "Red", d: "Stop. Full stop." },
  ];
  return (
    <Frame label="Right on red after stopping, unless a sign says no">
      <div className="grid grid-cols-3 gap-2">
        {lights.map((l) => (
          <div key={l.name} className="text-center">
            <div className="mx-auto flex h-24 w-12 flex-col items-center justify-center gap-1 rounded-full bg-deep">
              {lights.map((dot) => (
                <span
                  key={dot.name}
                  className="block h-5 w-5 rounded-full"
                  style={{ background: dot.name === l.name ? l.c : "#2a2a2a" }}
                />
              ))}
            </div>
            <p className="mt-2 text-sm leading-5 font-medium">{l.name}</p>
            <p className="text-xs leading-4 text-muted">{l.d}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function HandsDiagram() {
  const arms = [
    { name: "Left", d: "M28 28 H8", extra: "" },
    { name: "Right", d: "M28 28 V10", extra: "" },
    { name: "Stop", d: "M28 28 V46", extra: "" },
  ];
  return (
    <Frame label="Use the car’s signals if they work. Know these anyway.">
      <div className="grid grid-cols-3 gap-2">
        {arms.map((a) => (
          <div key={a.name} className="text-center">
            <svg viewBox="0 0 72 64" className="mx-auto h-16 w-full" aria-hidden>
              <rect x="30" y="16" width="34" height="28" rx="4" fill="#202020" />
              <circle cx="26" cy="30" r="4" fill="#0a66ff" />
              <path d={a.d} stroke="#0a66ff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="text-sm leading-5 font-medium">{a.name}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function BusDiagram() {
  return (
    <Frame label="Red arm out: stop both ways, unless a median divides you">
      <svg viewBox="0 0 280 92" className="w-full" aria-hidden>
        <rect width="280" height="92" rx="12" fill="#f0f0f0" />
        <path d="M20 70 H260" stroke="#d9d9d9" strokeWidth="8" />
        <rect x="108" y="28" width="64" height="32" rx="4" fill="#e3a008" />
        <rect x="116" y="34" width="14" height="10" fill="#fcfcfc" />
        <rect x="134" y="34" width="14" height="10" fill="#fcfcfc" />
        <rect x="152" y="34" width="14" height="10" fill="#fcfcfc" />
        <rect x="96" y="40" width="14" height="6" rx="1" fill="#e5484d" />
        <text x="40" y="58" fontSize="11" fill="#646464" fontFamily="Space Grotesk, sans-serif">
          stop
        </text>
        <text x="196" y="58" fontSize="11" fill="#646464" fontFamily="Space Grotesk, sans-serif">
          stop
        </text>
      </svg>
    </Frame>
  );
}

export function DistanceDiagram() {
  const rows = [
    { s: "50", m: "63 m" },
    { s: "80", m: "140 m" },
    { s: "100", m: "205 m" },
  ];
  return (
    <Frame label="Reaction plus braking, good conditions">
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.s} className="flex items-center gap-3">
            <span className="w-14 font-mono text-sm text-muted">{r.s}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-blue"
                style={{ width: r.s === "50" ? "31%" : r.s === "80" ? "68%" : "100%" }}
              />
            </div>
            <span className="w-16 text-right text-sm font-medium tabular-nums">{r.m}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function SecondsDiagram() {
  return (
    <Frame label="Count two full seconds to the same roadside mark">
      <div className="flex items-end justify-between gap-3 px-1">
        <div>
          <p className="font-mono text-xs text-faint">CAR AHEAD</p>
          <div className="mt-1 h-8 w-14 rounded-md bg-ink" />
        </div>
        <div className="mb-2 h-px flex-1 border-t border-dashed border-line" />
        <div className="text-right">
          <p className="font-mono text-xs text-blue">YOU · 2s</p>
          <div className="mt-1 ml-auto h-8 w-14 rounded-md bg-blue" />
        </div>
      </div>
    </Frame>
  );
}

export function MergeDiagram() {
  return (
    <Frame label="Match speed on the ramp. Yield until the gap is yours.">
      <svg viewBox="0 0 260 90" className="w-full" aria-hidden>
        <rect width="260" height="90" rx="12" fill="#f0f0f0" />
        <path d="M0 28 H260" stroke="#fcfcfc" strokeWidth="22" />
        <path d="M0 62 H150" stroke="#fcfcfc" strokeWidth="16" />
        <path d="M120 62 C170 62 180 28 230 28" fill="none" stroke="#0a66ff" strokeWidth="4" />
        <rect x="40" y="20" width="28" height="14" rx="3" fill="#202020" />
        <rect x="150" y="54" width="28" height="14" rx="3" fill="#0a66ff" />
      </svg>
    </Frame>
  );
}

const visuals = {
  hill: HillDiagram,
  parallel: ParallelDiagram,
  roundabout: RoundaboutDiagram,
  lines: LinesDiagram,
  lights: LightsDiagram,
  hands: HandsDiagram,
  bus: BusDiagram,
  distances: DistanceDiagram,
  seconds: SecondsDiagram,
  merge: MergeDiagram,
};

export function Visual({ id }: { id: keyof typeof visuals }) {
  const Cmp = visuals[id];
  return <Cmp />;
}

function SignSvg({ id }: { id: string }) {
  const common = "h-16 w-16";
  switch (id) {
    case "stop":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="22,4 42,4 60,22 60,42 42,60 22,60 4,42 4,22" fill="#e5484d" />
          <text x="32" y="37" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            STOP
          </text>
        </svg>
      );
    case "yield":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,54 6,54" fill="#fcfcfc" stroke="#e5484d" strokeWidth="4" />
          <text x="32" y="42" textAnchor="middle" fontSize="8" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            YIELD
          </text>
        </svg>
      );
    case "school":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,4 60,24 50,58 14,58 4,24" fill="#d6f25a" stroke="#202020" strokeWidth="2" />
          <circle cx="24" cy="36" r="3" fill="#202020" />
          <circle cx="40" cy="36" r="3" fill="#202020" />
          <path d="M22 44 H30 M38 44 H46" stroke="#202020" strokeWidth="2" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="10" y="8" width="44" height="48" rx="4" fill="#fcfcfc" stroke="#202020" strokeWidth="3" />
          <text x="32" y="30" textAnchor="middle" fontSize="8" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            MAXIMUM
          </text>
          <text x="32" y="46" textAnchor="middle" fontSize="16" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            50
          </text>
        </svg>
      );
    case "donotenter":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="8" y="8" width="48" height="48" rx="4" fill="#fcfcfc" stroke="#202020" strokeWidth="2" />
          <circle cx="32" cy="32" r="16" fill="#e5484d" />
          <rect x="20" y="29" width="24" height="6" fill="#fcfcfc" />
        </svg>
      );
    case "noleft":
    case "nopass":
    case "nopark":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="8" y="8" width="48" height="48" rx="4" fill="#fcfcfc" stroke="#202020" strokeWidth="2" />
          <circle cx="32" cy="32" r="16" fill="none" stroke="#e5484d" strokeWidth="3" />
          <path d="M20 44 L44 20" stroke="#e5484d" strokeWidth="3" />
          <text x="32" y="36" textAnchor="middle" fontSize="9" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            {id === "nopark" ? "P" : id === "noleft" ? "←" : "═"}
          </text>
        </svg>
      );
    case "oneway":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="6" y="20" width="52" height="24" rx="3" fill="#202020" />
          <path d="M16 32 H42 M36 24 L46 32 L36 40" fill="none" stroke="#fcfcfc" strokeWidth="3" />
        </svg>
      );
    case "crossbuck":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="28" y="8" width="8" height="48" rx="1" fill="#fcfcfc" stroke="#e5484d" strokeWidth="2" transform="rotate(35 32 32)" />
          <rect x="28" y="8" width="8" height="48" rx="1" fill="#fcfcfc" stroke="#e5484d" strokeWidth="2" transform="rotate(-35 32 32)" />
        </svg>
      );
    case "warnrail":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <path d="M22 40 L32 22 L42 40" fill="none" stroke="#202020" strokeWidth="2.5" />
          <path d="M26 40 H38" stroke="#202020" strokeWidth="2.5" />
        </svg>
      );
    case "curve":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <path d="M22 42 C22 28 40 28 40 18" fill="none" stroke="#202020" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "merge":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <path d="M20 42 L32 24 L44 42" fill="none" stroke="#202020" strokeWidth="2.5" />
          <path d="M32 24 V44" stroke="#202020" strokeWidth="2.5" />
        </svg>
      );
    case "slip":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <path d="M18 40 C26 32 30 40 38 32 C44 26 48 34 50 30" fill="none" stroke="#202020" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "ped":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <circle cx="32" cy="24" r="3" fill="#202020" />
          <path d="M32 28 V36 M24 32 H40 M28 46 L32 36 L36 46" fill="none" stroke="#202020" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "signal":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f5d90a" stroke="#202020" strokeWidth="2" />
          <rect x="28" y="20" width="8" height="22" rx="2" fill="#202020" />
          <circle cx="32" cy="24" r="1.6" fill="#f5d90a" />
          <circle cx="32" cy="31" r="1.6" fill="#f5d90a" />
          <circle cx="32" cy="38" r="1.6" fill="#f5d90a" />
        </svg>
      );
    case "worker":
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <polygon points="32,6 58,32 32,58 6,32" fill="#f97316" stroke="#202020" strokeWidth="2" />
          <text x="32" y="36" textAnchor="middle" fontSize="8" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            WORK
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className={common} aria-hidden>
          <rect x="6" y="16" width="52" height="32" rx="4" fill="#1f7a4d" />
          <text x="32" y="36" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            111
          </text>
        </svg>
      );
  }
}

export function SignFace({ item }: { item: SignItem }) {
  return <SignSvg id={item.id} />;
}
