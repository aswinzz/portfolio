"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PretextFillText from "./pretext-fill-text";

const stats = [
  { icon: "🏃", value: "21.1km", label: "Half Marathon — Done" },
  { icon: "🔥", value: "Sub 90", label: "HYROX Target" },
  { icon: "🏋️", value: "5–6×/wk", label: "Training Volume" },
  { icon: "🎯", value: "42.2km", label: "Full Marathon — Next" },
];

const pillars = [
  {
    name: "Running",
    icon: "🏃",
    color: "#f97316",
    desc: "Half marathon finisher chasing a full marathon. Training in HR zones, tracking with Garmin. Every run is data.",
    tags: ["Garmin tracking", "HR zones", "Pacing", "Recovery"],
  },
  {
    name: "HYROX",
    icon: "🔥",
    color: "#ef4444",
    desc: "Targeting sub-90 min. Hybrid functional fitness where strength meets endurance. The most honest test of a hybrid athlete.",
    tags: ["Sub-90 target", "Functional strength", "Endurance", "Competition"],
  },
  {
    name: "Strength",
    icon: "🏋️",
    color: "#fb923c",
    desc: "Lean bulk mindset. Compound movements. Strength that serves performance, not just aesthetics.",
    tags: ["Lean bulk", "Compound lifts", "Performance", "Progressive overload"],
  },
];


const goals = [
  { label: "Run a full marathon", done: false },
  { label: "HYROX sub-90", done: false },
  { label: "Complete an Ironman", done: false },
  { label: "Half marathon finisher", done: true },
  { label: "Grow to 100K audience", done: false },
  { label: "Launch Fitboite v1", done: true },
];

export default function FitnessPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const padWidth = Math.max(0, width - 64);

  return (
    <div
      ref={containerRef}
      className="min-h-full"
      style={{ background: "#0a0500", color: "#fef3c7" }}
    >
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-16 pb-12 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 70% 40%, #f9731612, transparent)",
          }}
        />

        <div className="relative z-10">
          {/* Identity label */}
          <p
            className="font-mono text-xs mb-6 tracking-widest"
            style={{ color: "#f9731688" }}
          >
            ◉ hybrid athlete
          </p>

          {/* Big fill text */}
          {padWidth > 0 && (
            <PretextFillText
              text="ATHLETE"
              fontFamily="Outfit"
              fontWeight={900}
              containerWidth={padWidth}
              className="font-black"
              style={{ color: "#f97316" }}
            />
          )}

          <div className="mt-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tight" style={{ color: "#fef3c7" }}>
              Aswin VB
            </h1>
            <p className="font-mono text-sm" style={{ color: "#a16207" }}>
              Runner ·{" "}
              <span style={{ color: "#f97316" }}>HYROX Athlete</span> · Strength
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-3 rounded-sm"
                style={{ background: "#1a0a0022", border: "1px solid #451a0344" }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-base font-black" style={{ color: "#f97316" }}>
                    {s.value}
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: "#a16207" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-10 flex-wrap">
            <Link
              href="https://instagram.com/aswin_vb"
              target="_blank"
              className="px-5 py-2 text-sm font-bold font-mono border transition-all hover:bg-[#f97316] hover:text-black hover:border-[#f97316]"
              style={{ borderColor: "#f97316", color: "#f97316" }}
            >
              Follow journey ↗
            </Link>
          </div>

          {/* Scroll hint */}
          <p
            className="mt-16 text-xs font-mono tracking-widest animate-pulse"
            style={{ color: "#f9731655" }}
          >
            ↓ scroll for more
          </p>
        </div>
      </section>

      <AthleteDivider label="TRAINING" />

      {/* ── TRAINING PILLARS ─────────────────────────── */}
      <section className="px-8 py-12 space-y-4">
        {pillars.map((p) => (
          <div
            key={p.name}
            className="p-5 group transition-all"
            style={{ border: "1px solid #451a0344", background: "#0f070022" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{p.icon}</span>
              <h3 className="font-black text-base" style={{ color: p.color }}>
                {p.name}
              </h3>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "#a16207" }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5"
                  style={{ background: "#1a0a00", color: "#a16207", border: "1px solid #451a0344" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <AthleteDivider label="GOALS" />

      {/* ── GOALS ────────────────────────────────────── */}
      <section className="px-8 py-12">
        <p className="text-xs font-mono mb-6" style={{ color: "#f9731688" }}>
          Here&apos;s what I&apos;m building towards.
        </p>
        <div className="space-y-3">
          {goals.map((g) => (
            <div key={g.label} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: g.done ? "#f97316" : "transparent",
                  border: `1px solid ${g.done ? "#f97316" : "#451a03"}`,
                }}
              >
                {g.done && (
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M1 3.5L3 5.5L7 1.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: g.done ? "#f97316" : "#fef3c7", textDecoration: g.done ? "none" : "none" }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="px-8 py-12" style={{ borderTop: "1px solid #451a0333" }}>
        <p className="text-xs font-mono mb-4" style={{ color: "#f9731688" }}>
          ◉ connect
        </p>
        <div className="flex gap-4 flex-wrap">
          {[
            { label: "instagram", href: "https://instagram.com/aswin_vb" },
            { label: "twitter", href: "https://twitter.com/aswinvb1" },
            { label: "email", href: "mailto:aswinvb.aswin6@gmail.com" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.label !== "email" ? "_blank" : undefined}
              className="text-xs font-mono hover:text-[#f97316] transition-colors"
              style={{ color: "#a16207" }}
            >
              {l.label} ↗
            </Link>
          ))}
        </div>
        <p className="text-xs font-mono mt-8" style={{ color: "#451a03" }}>
          © {new Date().getFullYear()} Aswin VB
        </p>
      </footer>
    </div>
  );
}

function AthleteDivider({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-3 px-8 py-4"
      style={{ borderTop: "1px solid #451a0333", borderBottom: "1px solid #451a0333" }}
    >
      <span
        className="text-xs font-mono font-bold tracking-[0.25em]"
        style={{ color: "#f9731688" }}
      >
        ◉ {label}
      </span>
      <div className="flex-1 h-px" style={{ background: "#f9731622" }} />
    </div>
  );
}
