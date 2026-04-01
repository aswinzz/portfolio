"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PretextFillText from "./pretext-fill-text";

const projects = [
  {
    title: "Pull Sense",
    desc: "AI-powered PR reviewer — catches issues before humans do.",
    tags: ["Next.js", "Bun", "Supabase", "Clerk"],
    link: "https://pullsense.com",
    status: "live",
  },
  {
    title: "Changelogs.site",
    desc: "Create, manage & share beautiful changelogs with hosted pages, custom domains, and embeddable widgets.",
    tags: ["Next.js", "Bun", "Supabase"],
    link: "https://changelogs.site",
    status: "live",
  },
  {
    title: "Fitboite",
    desc: "AI fitness platform — workout tracking, nutrition, and progress monitoring.",
    tags: ["Next.js", "Bun", "Supabase"],
    link: "https://fitboite.com",
    status: "live",
  },
  {
    title: "ClipWeave",
    desc: "Browser-based video/audio editor using FFMPEG and WebAssembly. No uploads needed.",
    tags: ["Next.js", "FFMPEG", "WebAssembly"],
    link: "https://clipweave.xyz",
    status: "live",
  },
  {
    title: "Key Events Tester",
    desc: "Debug keyboard events in real-time. Every keyCode, modifier, and event type exposed.",
    tags: ["Next.js", "TypeScript"],
    link: "https://key-events.aswinvb.com",
    status: "live",
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Teleparty",
    period: "2023 — Present",
    points: [
      "Integrated multiple streaming services to the platform",
      "Developed the first audio service (Spotify) integration",
      "Worked on core platform features at scale",
    ],
  },
  {
    role: "Software Engineer L1 → L2",
    company: "Scaler",
    period: "2021 — 2023",
    points: [
      "Led multiple growth-focused engineering projects",
      "Built the backend for the Scaler Mobile App",
      "Developed key service modules from scratch",
    ],
  },
  {
    role: "Software Engineer",
    company: "Deutsche Telekom",
    period: "2020 — 2021",
    points: [
      "Built multi-tenant CMS for OneShop",
      "Developed Page Builder feature",
      "Implemented Google Chart visualization module",
    ],
  },
];

const skills = [
  { label: "React / Next.js", level: 95 },
  { label: "TypeScript", level: 90 },
  { label: "Node.js / Bun", level: 88 },
  { label: "Python", level: 80 },
  { label: "Supabase / PostgreSQL", level: 85 },
  { label: "AWS / Vercel / Docker", level: 82 },
];

export default function TechPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const padWidth = Math.max(0, width - 64); // account for px-8 padding

  return (
    <div
      ref={containerRef}
      className="min-h-full"
      style={{ background: "#0d1117", color: "#e6edf3" }}
    >
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-16 pb-12 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 30% 40%, #4ade8012, transparent)",
          }}
        />

        <div className="relative z-10">
          {/* Terminal prompt */}
          <p
            className="font-mono text-xs mb-6 tracking-widest"
            style={{ color: "#4ade8088" }}
          >
            $ whoami
          </p>

          {/* Big fill text */}
          {padWidth > 0 && (
            <PretextFillText
              text="BUILDER"
              fontFamily="Outfit"
              fontWeight={900}
              containerWidth={padWidth}
              className="font-black"
              style={{ color: "#4ade80" }}
            />
          )}

          <div className="mt-6 space-y-1">
            <h1 className="text-3xl font-black tracking-tight" style={{ color: "#e6edf3" }}>
              Aswin VB
            </h1>
            <p className="font-mono text-sm" style={{ color: "#8b949e" }}>
              Senior Software Engineer{" "}
              <span style={{ color: "#4ade80" }}>@ Teleparty</span>
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 mt-8 flex-wrap">
            {[
              { val: "5+", label: "years exp" },
              { val: "20+", label: "projects" },
              { val: "3", label: "companies" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-2xl font-black" style={{ color: "#4ade80" }}>
                  {s.val}
                </span>
                <span className="text-xs font-mono ml-1" style={{ color: "#8b949e" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-10 flex-wrap">
            <Link
              href="https://github.com/aswinzz"
              target="_blank"
              className="px-5 py-2 text-sm font-bold font-mono border transition-all hover:bg-[#4ade80] hover:text-black"
              style={{ borderColor: "#4ade80", color: "#4ade80" }}
            >
              GitHub ↗
            </Link>
            <Link
              href="mailto:aswinvb.aswin6@gmail.com"
              className="px-5 py-2 text-sm font-bold font-mono border transition-all hover:bg-white hover:text-black"
              style={{ borderColor: "#30363d", color: "#8b949e" }}
            >
              Email me
            </Link>
          </div>

          {/* Scroll hint */}
          <p
            className="mt-16 text-xs font-mono tracking-widest animate-pulse"
            style={{ color: "#4ade8055" }}
          >
            ↓ scroll for more
          </p>
        </div>
      </section>

      <Divider label="PROJECTS" color="#4ade80" />

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className="px-8 py-12 space-y-4">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.link}
            target="_blank"
            className="block p-5 border transition-all hover:border-[#4ade80] hover:bg-[#4ade8008] group"
            style={{ borderColor: "#21262d" }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3
                className="font-bold text-sm group-hover:text-[#4ade80] transition-colors"
                style={{ color: "#e6edf3" }}
              >
                {p.title}
              </h3>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ background: "#4ade8022", color: "#4ade80" }}
              >
                {p.status}
              </span>
            </div>
            <p className="text-xs mb-3" style={{ color: "#8b949e" }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5"
                  style={{ background: "#161b22", color: "#8b949e", border: "1px solid #30363d" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <Divider label="EXPERIENCE" color="#4ade80" />

      {/* ── EXPERIENCE ───────────────────────────────── */}
      <section className="px-8 py-12 space-y-8">
        {experience.map((job, i) => (
          <div key={i} className="relative pl-4" style={{ borderLeft: "2px solid #21262d" }}>
            <div
              className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
              style={{ background: "#4ade80" }}
            />
            <p className="text-xs font-mono mb-1" style={{ color: "#4ade8088" }}>
              {job.period}
            </p>
            <h3 className="font-bold text-sm" style={{ color: "#e6edf3" }}>
              {job.role}
            </h3>
            <p className="text-xs font-mono mb-3" style={{ color: "#8b949e" }}>
              {job.company}
            </p>
            <ul className="space-y-1">
              {job.points.map((pt, j) => (
                <li key={j} className="text-xs flex gap-2" style={{ color: "#8b949e" }}>
                  <span style={{ color: "#4ade8066" }}>›</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Divider label="SKILLS" color="#4ade80" />

      {/* ── SKILLS ───────────────────────────────────── */}
      <section className="px-8 py-12 space-y-4">
        {skills.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1.5">
              <span className="text-xs font-mono" style={{ color: "#e6edf3" }}>
                {s.label}
              </span>
              <span className="text-xs font-mono" style={{ color: "#4ade8088" }}>
                {s.level}%
              </span>
            </div>
            <div className="h-1 rounded-full" style={{ background: "#21262d" }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${s.level}%`, background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="px-8 py-12" style={{ borderTop: "1px solid #21262d" }}>
        <p className="text-xs font-mono mb-4" style={{ color: "#4ade8088" }}>
          $ contact --reach-out
        </p>
        <div className="flex gap-4 flex-wrap">
          {[
            { label: "twitter", href: "https://twitter.com/aswinvb1" },
            { label: "github", href: "https://github.com/aswinzz" },
            { label: "email", href: "mailto:aswinvb.aswin6@gmail.com" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.label !== "email" ? "_blank" : undefined}
              className="text-xs font-mono hover:text-[#4ade80] transition-colors"
              style={{ color: "#8b949e" }}
            >
              {l.label} ↗
            </Link>
          ))}
        </div>
        <p className="text-xs font-mono mt-8" style={{ color: "#30363d" }}>
          © {new Date().getFullYear()} Aswin VB
        </p>
      </footer>
    </div>
  );
}

function Divider({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="flex items-center gap-3 px-8 py-4"
      style={{ borderTop: "1px solid #21262d", borderBottom: "1px solid #21262d" }}
    >
      <span
        className="text-xs font-mono font-bold tracking-[0.25em]"
        style={{ color: `${color}88` }}
      >
        {"// "}{label}
      </span>
      <div className="flex-1 h-px" style={{ background: `${color}22` }} />
    </div>
  );
}
