"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import TechPanel from "./tech-panel";
import FitnessPanel from "./fitness-panel";

const DIVIDER_PX = 3;

export default function SplitPortfolio() {
  const [split, setSplit] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTab, setMobileTab] = useState<"tech" | "fitness">("tech");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const clamp = (v: number) => Math.max(20, Math.min(80, v));

  const onDividerMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  const onDividerTouchStart = useCallback(() => {
    dragging.current = true;
  }, []);

  useEffect(() => {
    const onMove = (clientX: number) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSplit(clamp(((clientX - rect.left) / rect.width) * 100));
    };

    const onMouseMove = (e: MouseEvent) => onMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // Mobile: tab-based layout
  if (isMobile) {
    return (
      <div className="flex flex-col h-screen w-full">
        {/* Tab switcher */}
        <div className="flex flex-shrink-0">
          <button
            onClick={() => setMobileTab("tech")}
            className="flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-all"
            style={{
              background: mobileTab === "tech" ? "#0d1117" : "#1a1a1a",
              color: mobileTab === "tech" ? "#4ade80" : "#555",
              borderBottom: mobileTab === "tech" ? "2px solid #4ade80" : "2px solid #222",
            }}
          >
            &lt;/&gt; Tech
          </button>
          <button
            onClick={() => setMobileTab("fitness")}
            className="flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-all"
            style={{
              background: mobileTab === "fitness" ? "#0a0500" : "#1a1a1a",
              color: mobileTab === "fitness" ? "#f97316" : "#555",
              borderBottom: mobileTab === "fitness" ? "2px solid #f97316" : "2px solid #222",
            }}
          >
            ◉ Athlete
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto ${mobileTab === "tech" ? "tech-scroll" : "fitness-scroll"}`}>
          {mobileTab === "tech" ? <TechPanel /> : <FitnessPanel />}
        </div>
      </div>
    );
  }

  // Desktop: split layout
  return (
    <div
      ref={containerRef}
      className="flex h-screen w-full overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Tech Panel */}
      <div
        className="h-full overflow-y-auto flex-shrink-0 tech-scroll"
        style={{ width: `calc(${split}% - ${DIVIDER_PX / 2}px)` }}
      >
        <TechPanel />
      </div>

      {/* Divider */}
      <div
        className="relative flex-shrink-0 cursor-col-resize group z-50"
        style={{ width: `${DIVIDER_PX}px`, background: "#1a1a1a" }}
        onMouseDown={onDividerMouseDown}
        onTouchStart={onDividerTouchStart}
      >
        {/* Gradient line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #4ade8044 30%, #f9731644 70%, transparent)",
          }}
        />
        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-125"
            style={{
              background: "linear-gradient(135deg, #4ade80, #f97316)",
              boxShadow: "0 0 12px #4ade8066, 0 0 12px #f9731666",
            }}
          >
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M3.5 1.5L1 5L3.5 8.5M8.5 1.5L11 5L8.5 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Fitness Panel */}
      <div className="flex-1 h-full overflow-y-auto fitness-scroll">
        <FitnessPanel />
      </div>
    </div>
  );
}
