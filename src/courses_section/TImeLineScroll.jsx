import { useMemo, useRef } from "react";
import { TEST_DATA } from "../test_data/ClndrTestData";

function parseDateTime(dateStr, timeStr) {
  // Accepts:
  // - ISO date like "2025-10-20" + "10:00 AM"
  // - Or a single ISO datetime in dateStr (then timeStr can be empty)
  if (!dateStr) return null;

  // If dateStr already looks like a full datetime, try it as-is:
  let candidate = new Date(dateStr);
  if (!isNaN(candidate)) return candidate;

  // Otherwise combine date + time
  const combined = timeStr ? `${dateStr} ${timeStr}` : dateStr;
  const dt = new Date(combined);
  return isNaN(dt) ? null : dt;
}

function formatDateTime(dt) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(dt);
  } catch {
    return "";
  }
}

export default function TimelineScroll({ events = TEST_DATA }) {
  const containerRef = useRef(null);

  const sorted = useMemo(() => {
    const copy = Array.isArray(events) ? [...events] : [];
    copy.sort((a, b) => {
      const da = parseDateTime(a?.date, a?.time) ?? new Date(0);
      const db = parseDateTime(b?.date, b?.time) ?? new Date(0);
      return da - db;
    });
    return copy;
  }, [events]);

  const scrollByCard = (dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    // Find the width of one card (assumes consistent width)
    const card = el.querySelector("[data-card]");
    const amount = card ? card.getBoundingClientRect().width + 16 : 320; // +gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="w-[100vw] py-10">
      <div className="flex items-center justify-center gap-10 mb-10">
        <h2 className="text-xl text-gray-50 font-semibold">Upcoming Events</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="rounded-xl border px-3 py-1 text-sm border-brand-beige text-brand-beige hover:text-brand-blue hover:bg-gray-50 active:scale-95 cursor-pointer"
            aria-label="Previous"
          >
            ‹ Prev
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="rounded-xl border px-3 py-1 text-sm border-brand-beige text-brand-beige hover:text-brand-blue hover:bg-gray-50 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            Next ›
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="
          flex gap-4 overflow-x-auto py-4 px-15
          snap-x snap-mandatory
          scroll-smooth
          [scrollbar-width:thin]
        "
        style={{ scrollbarGutter: "stable" }}
        aria-label="Timeline events"
      >
        {sorted.map((ev, idx) => {
          const dt = parseDateTime(ev?.date, ev?.time);
          const when = dt
            ? formatDateTime(dt)
            : [ev?.date, ev?.time].filter(Boolean).join(" • ");

          return (
            <article
              key={`${ev?.name ?? "event"}-${idx}`}
              data-card
              className="
                snap-center shrink-0
                min-w-[280px] md:min-w-[340px] max-w-[360px]
                rounded-2xl border bg-white p-4 shadow-sm
                hover:shadow-md transition-shadow
              "
            >
              <header className="mb-2">
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {ev?.loc || "Location TBA"}
                </div>
                <h3 className="mt-1 text-lg font-semibold leading-snug">
                  {ev?.name || "Untitled Event"}
                </h3>
              </header>

              <dl className="text-sm text-gray-700 space-y-1">
                <div className="flex gap-2">
                  <dt className="font-medium">When:</dt>
                  <dd>{when || "TBA"}</dd>
                </div>
                {ev?.notes ? (
                  <div className="flex gap-2">
                    <dt className="font-medium">Notes:</dt>
                    <dd className="line-clamp-2">{ev.notes}</dd>
                  </div>
                ) : null}
              </dl>

              <footer className="mt-3">
                <button
                  type="button"
                  className="text-sm underline underline-offset-2 hover:opacity-80 cursor-pointer"
                  onClick={() => {
                    // Placeholder for your modal/route
                    // e.g., openEvent(ev) or navigate(`/events/${id}`)
                    alert(`${ev?.name || "Event"}\n${when}\n${ev?.loc || ""}`);
                  }}
                >
                  View details
                </button>
              </footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}
