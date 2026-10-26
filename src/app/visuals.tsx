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

export function ParkTypesDiagram() {
  const kinds = [
    { t: "Parallel", d: "Within 30 cm", tone: "#0a66ff" },
    { t: "Angle", d: "Turn when even", tone: "#0a66ff" },
    { t: "Stall", d: "Centre the lines", tone: "#202020" },
    { t: "Hill", d: "Wheels to the curb", tone: "#e5484d" },
  ];
  return (
    <Frame label="Signal · straighten · parking brake · Park">
      <div className="grid grid-cols-2 gap-2">
        {kinds.map((k, i) => (
          <div key={k.t} className="rounded-xl bg-surface px-2 py-3 text-center">
            <svg viewBox="0 0 120 72" className="mx-auto h-16 w-full" aria-hidden>
              <rect width="120" height="72" rx="8" fill="#fcfcfc" />
              {i === 0 && (
                <>
                  <path d="M8 8 V64" stroke="#d9d9d9" strokeWidth="6" />
                  <rect x="18" y="6" width="18" height="26" rx="3" fill="#e0e0e0" />
                  <rect x="18" y="40" width="18" height="26" rx="3" fill="#e0e0e0" />
                  <rect x="22" y="28" width="18" height="22" rx="3" fill={k.tone} />
                </>
              )}
              {i === 1 && (
                <>
                  <path d="M0 64 H120" stroke="#d9d9d9" strokeWidth="6" />
                  <rect x="18" y="18" width="22" height="34" rx="3" fill="#e0e0e0" transform="rotate(-28 29 35)" />
                  <rect x="78" y="18" width="22" height="34" rx="3" fill="#e0e0e0" transform="rotate(-28 89 35)" />
                  <rect x="48" y="16" width="22" height="34" rx="3" fill={k.tone} transform="rotate(-28 59 33)" />
                </>
              )}
              {i === 2 && (
                <>
                  <path d="M28 8 V64 M60 8 V64 M92 8 V64" stroke="#d9d9d9" strokeWidth="2" />
                  <rect x="36" y="16" width="18" height="32" rx="3" fill={k.tone} />
                </>
              )}
              {i === 3 && (
                <>
                  <path d="M8 58 H112" stroke="#d9d9d9" strokeWidth="6" />
                  <rect x="46" y="22" width="28" height="16" rx="3" fill={k.tone} />
                  <circle cx="54" cy="42" r="4" fill="#fcfcfc" stroke="#202020" strokeWidth="1.5" />
                  <circle cx="68" cy="42" r="4" fill="#fcfcfc" stroke="#202020" strokeWidth="1.5" />
                  <path d="M50 42 L44 34 M64 42 L58 34" stroke="#0a66ff" strokeWidth="2" />
                </>
              )}
            </svg>
            <p className="text-sm leading-5 font-medium">{k.t}</p>
            <p className="text-xs leading-4 text-muted">{k.d}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function AngleDiagram() {
  const steps = ["1.5 m out", "Turn in", "Straighten"];
  return (
    <Frame label="Start the turn when your front is even with the space">
      <div className="grid grid-cols-3 gap-1">
        {steps.map((s, i) => (
          <div key={s} className="text-center">
            <svg viewBox="0 0 80 78" className="mx-auto h-20 w-full" aria-hidden>
              <rect width="80" height="78" rx="8" fill="#f0f0f0" />
              <path d="M0 70 H80" stroke="#d9d9d9" strokeWidth="8" />
              <rect x="6" y="22" width="16" height="28" rx="2" fill="#e0e0e0" transform="rotate(-24 14 36)" />
              <rect x="58" y="22" width="16" height="28" rx="2" fill="#e0e0e0" transform="rotate(-24 66 36)" />
              {i === 0 && <rect x="30" y="8" width="16" height="28" rx="2" fill="#0a66ff" />}
              {i === 1 && (
                <rect x="28" y="18" width="16" height="28" rx="2" fill="#0a66ff" transform="rotate(-24 36 32)" />
              )}
              {i === 2 && (
                <rect x="32" y="28" width="16" height="28" rx="2" fill="#0a66ff" transform="rotate(-24 40 42)" />
              )}
            </svg>
            <p className="text-xs leading-4 text-muted">{s}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function StallDiagram() {
  return (
    <Frame label="Equal gaps both sides · stop before the back line">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <svg viewBox="0 0 160 110" className="w-full" aria-hidden>
            <rect width="160" height="110" rx="10" fill="#f0f0f0" />
            <path d="M28 18 V92 M70 18 V92 M112 18 V92 M132 18 V92" stroke="#d9d9d9" strokeWidth="2" />
            <rect x="40" y="28" width="20" height="40" rx="3" fill="#0a66ff" />
            <path d="M50 22 V28" stroke="#0a66ff" strokeWidth="2" />
            <text x="80" y="104" textAnchor="middle" fontSize="10" fill="#646464" fontFamily="Space Grotesk, sans-serif">
              nose-in
            </text>
          </svg>
          <p className="mt-1 text-center text-xs text-muted">Turn as the line meets the mirror</p>
        </div>
        <div>
          <svg viewBox="0 0 160 110" className="w-full" aria-hidden>
            <rect width="160" height="110" rx="10" fill="#f0f0f0" />
            <path d="M28 18 V92 M70 18 V92 M112 18 V92 M132 18 V92" stroke="#d9d9d9" strokeWidth="2" />
            <rect x="78" y="36" width="20" height="40" rx="3" fill="#202020" />
            <path d="M118 24 H96" stroke="#0a66ff" strokeWidth="2" fill="none" />
            <path d="M108 70 V48" stroke="#0a66ff" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="104" textAnchor="middle" fontSize="10" fill="#646464" fontFamily="Space Grotesk, sans-serif">
              back-in
            </text>
          </svg>
          <p className="mt-1 text-center text-xs text-muted">Pass it, scan, then reverse</p>
        </div>
      </div>
    </Frame>
  );
}

export function ParkBanDiagram() {
  const rows = [
    { n: "5 m", d: "Crosswalk, hydrant, fire-station driveway", tone: "text-critical" },
    { n: "7.5 m", d: "An intersection", tone: "text-critical" },
    { n: "10 m", d: "Stop, yield, signal, or flashing light", tone: "text-caution" },
    { n: "15 m", d: "Nearest rail at a crossing", tone: "text-critical" },
    { n: "30 cm", d: "Wheels to the curb when you are parked legally", tone: "text-blue" },
  ];
  return (
    <Frame label="These bans apply even with no sign, and even if you stay in the car">
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.n} className="flex items-center gap-3">
            <span className={`w-14 shrink-0 font-mono text-sm font-medium tabular-nums ${r.tone}`}>{r.n}</span>
            <span className="text-sm leading-5 text-ink">{r.d}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function ParkCompareDiagram() {
  const cols = [
    { t: "No parking", n: "P", d: "Don’t leave the car. A short passenger stop is usually allowed.", tone: "text-caution" },
    { t: "No stopping", n: "—", d: "Don’t stop at all, except for a hazard, a light, or an officer.", tone: "text-critical" },
    { t: "Accessible", n: "Permit", d: "A permit on the dash, or don’t use the stall.", tone: "text-blue" },
  ];
  return (
    <Frame label="Read the symbol before you commit the car">
      <div className="grid gap-2 sm:grid-cols-3">
        {cols.map((c) => (
          <div key={c.t} className="rounded-xl bg-surface px-3 py-3">
            <p className={`font-mono text-lg ${c.tone}`}>{c.n}</p>
            <p className="mt-1 text-sm font-medium leading-5">{c.t}</p>
            <p className="mt-1 text-xs leading-4 text-muted">{c.d}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function SpeedDiagram() {
  const rows = [
    {
      n: "30",
      title: "School area, kids out",
      d: "You entered from a 50 zone and a child is on the road, the sidewalk, or within 30 m. Any day, any hour.",
      tone: "bg-critical-soft text-critical",
    },
    {
      n: "50",
      title: "School area on a faster road",
      d: "The limit before the school area was already above 50. Drop to 50 while children are present.",
      tone: "bg-blue-soft text-blue",
    },
    {
      n: "50",
      title: "Town, if nothing is posted",
      d: "Urban default. Also public parks, within 30 m of railway tracks, and passing a place of worship as people go in or out.",
      tone: "bg-blue-soft text-blue",
    },
    {
      n: "40",
      title: "Many Halifax side streets",
      d: "Not a provincial default. A posted 40 replaces the 50. Read the sign on the street you turned onto.",
      tone: "bg-surface text-muted",
    },
    {
      n: "60",
      title: "Stopped emergency vehicle",
      d: "Lights flashing. Slow to 60, or to the posted limit if it is already under 60. Move a lane away when you can.",
      tone: "bg-caution-soft text-caution",
    },
    {
      n: "80",
      title: "Outside town, no sign",
      d: "The highway default. Trunk roads are often posted 80 even when you expected more.",
      tone: "bg-surface text-ink",
    },
    {
      n: "100+",
      title: "100-series, as posted",
      d: "Many sections are 100. Parts of Highway 102 and 104 are 110. Urban 111 is often lower. The ramp sign wins.",
      tone: "bg-surface text-ink",
    },
    {
      n: "◆",
      title: "Construction",
      d: "An orange temporary MAXIMUM replaces the normal limit, even if the crew is not standing in the lane.",
      tone: "bg-caution-soft text-caution",
    },
  ];
  return (
    <Frame label="A posted sign always beats a default. The number is a ceiling.">
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.title} className="flex items-start gap-3">
            <span
              className={`grid h-11 w-14 shrink-0 place-items-center rounded-xl text-base font-semibold tabular-nums ${r.tone}`}
            >
              {r.n}
            </span>
            <span>
              <span className="block text-sm font-medium leading-5">{r.title}</span>
              <span className="block text-xs leading-4 text-muted">{r.d}</span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

const visuals = {
  hill: HillDiagram,
  parallel: ParallelDiagram,
  angle: AngleDiagram,
  stall: StallDiagram,
  parktypes: ParkTypesDiagram,
  parkban: ParkBanDiagram,
  parkcmp: ParkCompareDiagram,
  speeds: SpeedDiagram,
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

function Diamond({ children, fill = "#f5d90a" }: { children: ReactNode; fill?: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <polygon points="32,6 58,32 32,58 6,32" fill={fill} stroke="#202020" strokeWidth="2" />
      {children}
    </svg>
  );
}

function SquareSign({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <rect x="8" y="8" width="48" height="48" rx="4" fill="#fcfcfc" stroke="#202020" strokeWidth="2" />
      {children}
    </svg>
  );
}

function Slash() {
  return <path d="M20 46 L44 18" stroke="#e5484d" strokeWidth="3" strokeLinecap="round" />;
}

function SpeedPlate({ n }: { n: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <rect x="10" y="8" width="44" height="48" rx="4" fill="#fcfcfc" stroke="#202020" strokeWidth="3" />
      <text x="32" y="28" textAnchor="middle" fontSize="7" fill="#202020" fontFamily="Space Grotesk, sans-serif">
        MAXIMUM
      </text>
      <text x="32" y="46" textAnchor="middle" fontSize="16" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
        {n}
      </text>
    </svg>
  );
}

function BanArrow({ dir }: { dir: "left" | "right" | "uturn" }) {
  return (
    <SquareSign>
      <circle cx="32" cy="32" r="16" fill="none" stroke="#e5484d" strokeWidth="3" />
      <Slash />
      {dir === "left" ? <path d="M40 32 H24 M30 26 L22 32 L30 38" fill="none" stroke="#202020" strokeWidth="2.2" /> : null}
      {dir === "right" ? <path d="M24 32 H40 M34 26 L42 32 L34 38" fill="none" stroke="#202020" strokeWidth="2.2" /> : null}
      {dir === "uturn" ? <path d="M26 38 V28 H36 V38" fill="none" stroke="#202020" strokeWidth="2.2" /> : null}
    </SquareSign>
  );
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
      return <BanArrow dir="left" />;
    case "noright":
      return <BanArrow dir="right" />;
    case "nouturn":
      return <BanArrow dir="uturn" />;
    case "nopass":
      return (
        <SquareSign>
          <circle cx="32" cy="32" r="16" fill="none" stroke="#e5484d" strokeWidth="3" />
          <Slash />
          <rect x="22" y="30" width="8" height="6" rx="1" fill="#202020" />
          <rect x="34" y="30" width="8" height="6" rx="1" fill="#202020" />
        </SquareSign>
      );
    case "nopark":
      return (
        <SquareSign>
          <circle cx="32" cy="32" r="16" fill="none" stroke="#e5484d" strokeWidth="3" />
          <Slash />
          <text x="32" y="37" textAnchor="middle" fontSize="16" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            P
          </text>
        </SquareSign>
      );
    case "nostop":
      return (
        <SquareSign>
          <circle cx="32" cy="32" r="16" fill="none" stroke="#e5484d" strokeWidth="3" />
          <Slash />
          <rect x="24" y="29" width="16" height="8" rx="1.5" fill="#202020" />
        </SquareSign>
      );
    case "accessible":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="6" y="6" width="52" height="52" rx="4" fill="#0a66ff" />
          <circle cx="32" cy="22" r="3" fill="#fcfcfc" />
          <path d="M28 28 H36 L38 36 H26" fill="none" stroke="#fcfcfc" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="38" cy="42" r="6" fill="none" stroke="#fcfcfc" strokeWidth="2" />
        </svg>
      );
    case "oneway":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="6" y="20" width="52" height="24" rx="3" fill="#202020" />
          <path d="M16 32 H42 M36 24 L46 32 L36 40" fill="none" stroke="#fcfcfc" strokeWidth="3" />
        </svg>
      );
    case "wrongway":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="8" y="16" width="48" height="32" rx="3" fill="#e5484d" />
          <text x="32" y="30" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            WRONG
          </text>
          <text x="32" y="40" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            WAY
          </text>
        </svg>
      );
    case "allway":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <polygon points="22,2 42,2 58,18 58,36 42,52 22,52 6,36 6,18" fill="#e5484d" />
          <text x="32" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            STOP
          </text>
          <rect x="16" y="54" width="32" height="8" rx="1" fill="#e5484d" />
          <text x="32" y="60" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            ALL WAY
          </text>
        </svg>
      );
    case "speed30":
      return <SpeedPlate n="30" />;
    case "keepright":
      return (
        <SquareSign>
          <path d="M24 18 V34 H40" fill="none" stroke="#202020" strokeWidth="3" />
          <path d="M34 28 L42 34 L34 40" fill="none" stroke="#202020" strokeWidth="3" />
          <rect x="20" y="16" width="6" height="16" fill="#202020" />
        </SquareSign>
      );
    case "crossbuck":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="28" y="8" width="8" height="48" rx="1" fill="#fcfcfc" stroke="#202020" strokeWidth="2" transform="rotate(35 32 32)" />
          <rect x="28" y="8" width="8" height="48" rx="1" fill="#fcfcfc" stroke="#202020" strokeWidth="2" transform="rotate(-35 32 32)" />
          <text x="32" y="30" textAnchor="middle" fontSize="6" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            RAIL
          </text>
          <text x="32" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            ROAD
          </text>
        </svg>
      );
    case "warnrail":
      return (
        <Diamond>
          <path d="M22 40 L32 22 L42 40" fill="none" stroke="#202020" strokeWidth="2.5" />
          <path d="M26 40 H38" stroke="#202020" strokeWidth="2.5" />
        </Diamond>
      );
    case "stopahead":
      return (
        <Diamond>
          <polygon points="32,20 40,28 40,36 32,44 24,36 24,28" fill="#e5484d" />
        </Diamond>
      );
    case "curve":
      return (
        <Diamond>
          <path d="M22 42 C22 28 40 28 40 18" fill="none" stroke="#202020" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 16 L42 18 L38 24" fill="none" stroke="#202020" strokeWidth="2.4" />
        </Diamond>
      );
    case "merge":
      return (
        <Diamond>
          <path d="M22 44 L32 22 L42 44" fill="none" stroke="#202020" strokeWidth="2.5" />
          <path d="M32 24 V46" stroke="#202020" strokeWidth="2.5" />
        </Diamond>
      );
    case "added":
      return (
        <Diamond>
          <path d="M24 46 V22 H34" fill="none" stroke="#202020" strokeWidth="2.4" />
          <path d="M40 46 V30" stroke="#202020" strokeWidth="2.4" />
          <path d="M36 26 L42 30 L36 34" fill="none" stroke="#202020" strokeWidth="2" />
        </Diamond>
      );
    case "laneends":
      return (
        <Diamond>
          <path d="M22 18 V46" stroke="#202020" strokeWidth="2.4" />
          <path d="M42 18 C42 30 28 30 28 46" fill="none" stroke="#202020" strokeWidth="2.4" />
        </Diamond>
      );
    case "twoway":
      return (
        <Diamond>
          <path d="M26 44 V24 M26 24 L22 30 M26 24 L30 30" fill="none" stroke="#202020" strokeWidth="2.3" />
          <path d="M38 20 V40 M38 40 L34 34 M38 40 L42 34" fill="none" stroke="#202020" strokeWidth="2.3" />
        </Diamond>
      );
    case "divided":
      return (
        <Diamond>
          <path d="M22 20 V44 M42 20 V44" stroke="#202020" strokeWidth="2.4" />
          <rect x="29" y="24" width="6" height="16" fill="#202020" />
        </Diamond>
      );
    case "slip":
      return (
        <Diamond>
          <path d="M18 40 C26 32 30 40 38 32 C44 26 48 34 50 30" fill="none" stroke="#202020" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="34" y="34" width="12" height="7" rx="1" fill="#202020" />
        </Diamond>
      );
    case "ped":
      return (
        <Diamond>
          <circle cx="32" cy="24" r="3" fill="#202020" />
          <path d="M32 28 V36 M24 32 H40 M28 46 L32 36 L36 46" fill="none" stroke="#202020" strokeWidth="2.2" strokeLinecap="round" />
        </Diamond>
      );
    case "crosswalk":
      return (
        <SquareSign>
          <path d="M18 46 H46" stroke="#202020" strokeWidth="2" />
          <path d="M22 46 V28 M28 46 V28 M34 46 V28 M40 46 V28" stroke="#202020" strokeWidth="2" />
          <circle cx="32" cy="20" r="3" fill="#202020" />
        </SquareSign>
      );
    case "signal":
      return (
        <Diamond>
          <rect x="28" y="20" width="8" height="22" rx="2" fill="#202020" />
          <circle cx="32" cy="24" r="1.6" fill="#f5d90a" />
          <circle cx="32" cy="31" r="1.6" fill="#f5d90a" />
          <circle cx="32" cy="38" r="1.6" fill="#f5d90a" />
        </Diamond>
      );
    case "roundwarn":
      return (
        <Diamond>
          <circle cx="32" cy="32" r="10" fill="none" stroke="#202020" strokeWidth="2.4" />
          <path d="M32 22 A10 10 0 0 1 42 32" fill="none" stroke="#202020" strokeWidth="2.4" />
          <path d="M38 20 L42 26 L34 26" fill="#202020" />
        </Diamond>
      );
    case "deer":
      return (
        <Diamond>
          <circle cx="36" cy="28" r="3" fill="#202020" />
          <path d="M30 24 L26 16 M34 22 L32 16 M38 22 L42 16" stroke="#202020" strokeWidth="1.6" />
          <path d="M28 40 C30 32 34 32 36 36 L42 44" fill="none" stroke="#202020" strokeWidth="2.2" />
        </Diamond>
      );
    case "bump":
      return (
        <Diamond>
          <path d="M16 42 H24 C28 42 28 28 32 28 C36 28 36 42 40 42 H48" fill="none" stroke="#202020" strokeWidth="2.5" />
        </Diamond>
      );
    case "worker":
      return (
        <Diamond fill="#f97316">
          <circle cx="32" cy="24" r="3" fill="#202020" />
          <path d="M32 28 V36 M26 32 H38 M28 46 L32 36 L36 46" fill="none" stroke="#202020" strokeWidth="2.2" strokeLinecap="round" />
        </Diamond>
      );
    case "flagger":
      return (
        <Diamond fill="#f97316">
          <circle cx="30" cy="24" r="3" fill="#202020" />
          <path d="M30 28 V40 M26 34 H36 L44 26" fill="none" stroke="#202020" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="42" y="20" width="6" height="8" fill="#e5484d" />
        </Diamond>
      );
    case "workspeed":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="10" y="8" width="44" height="48" rx="4" fill="#f97316" stroke="#202020" strokeWidth="2" />
          <text x="32" y="28" textAnchor="middle" fontSize="7" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            MAXIMUM
          </text>
          <text x="32" y="46" textAnchor="middle" fontSize="16" fontWeight="700" fill="#202020" fontFamily="Space Grotesk, sans-serif">
            60
          </text>
        </svg>
      );
    case "hospital":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
          <rect x="8" y="8" width="48" height="48" rx="4" fill="#0a66ff" />
          <text x="32" y="42" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fcfcfc" fontFamily="Space Grotesk, sans-serif">
            H
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
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
