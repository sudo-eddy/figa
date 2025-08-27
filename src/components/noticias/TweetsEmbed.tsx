"use client";

import { useEffect, useRef } from "react";
import { Twitter } from "lucide-react";

// Change this to your handle when ready
const HANDLE = "CBCNews"; // placeholder timeline (safe for demo)

export default function TweetsEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load X widgets.js once
    if (!(window as any).twttr) {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      document.body.appendChild(s);
      s.onload = renderTimeline;
    } else {
      renderTimeline();
    }

    function renderTimeline() {
      try {
        (window as any).twttr?.widgets?.createTimeline(
          {
            sourceType: "profile",
            screenName: HANDLE,
          },
          ref.current,
          {
            theme: "light",
            height: 600,
            dnt: true,
          }
        );
      } catch {}
    }
  }, []);

  return (
    <section className="px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Twitter className="w-6 h-6 text-blue-700" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700">
            Actualizaciones en X (Twitter)
          </h2>
        </div>
        <p className="text-gray-700 mt-2">
          Por ahora mostramos un timeline de ejemplo. Cambiaremos el handle al tuyo cuando nos lo pases.
        </p>

        <div className="mt-6 rounded-xl border border-gray-200 p-3 bg-white overflow-hidden">
          <div ref={ref} />
        </div>
      </div>
    </section>
  );
}
