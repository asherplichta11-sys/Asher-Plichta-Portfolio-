"use client";

import { useId, useState } from "react";
import { CONTACT_TOPICS, PERSON } from "@/content/site";

type Topic = (typeof CONTACT_TOPICS)[number];

export function ContactComposer() {
  const labelId = useId();
  const [picked, setPicked] = useState<readonly Topic[]>([]);

  const toggle = (topic: Topic) => {
    setPicked((current) =>
      current.includes(topic)
        ? current.filter((t) => t !== topic)
        : CONTACT_TOPICS.filter((t) => t === topic || current.includes(t)),
    );
  };

  const subject = picked.length > 0 ? `?subject=${encodeURIComponent(`Inquiry: ${picked.join(", ")}`)}` : "";
  const href = `mailto:${PERSON.email}${subject}`;

  return (
    <div className="mt-8">
      <p id={labelId} className="text-lg text-muted">
        Pick what you need, then send me a message.
      </p>
      <div role="group" aria-labelledby={labelId} className="mt-5 flex flex-wrap gap-3">
        {CONTACT_TOPICS.map((topic) => {
          const on = picked.includes(topic);
          return (
            <button
              key={topic}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(topic)}
              className={`rounded-[4px] px-4 py-2.5 text-[15px] font-medium ${
                on ? "border border-ink bg-ink text-bg" : "border border-line text-ink hover:border-ink"
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>
      <a
        href={href}
        className="mt-10 inline-block rounded-[4px] bg-accent px-6 py-3.5 text-lg font-bold text-on-accent no-underline hover:bg-accent-strong"
      >
        Email me
      </a>
      <p className="mt-4 text-muted">{PERSON.email}</p>
    </div>
  );
}
