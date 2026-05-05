"use client";

import { useEffect, useState } from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className="transition-opacity duration-1000"
      style={{ opacity: mounted ? 1 : 0, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
