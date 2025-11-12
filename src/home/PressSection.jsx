import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PRESS_ITEMS } from "../test_data/PressTitles";

// Optional fields supported per item:
// { title, type, link, transcriptLink, image, excerpt, date, source, duration, tags: [] }

const TYPE_ORDER = ["All", "Article", "Video", "Podcast", "Spotlight"];

const JITTERS = [
  { rotate: -2.1, dx: -6, dy: 4, z: 3 },
  { rotate: 1.8, dx: 6, dy: -4, z: 4 },
  { rotate: -0.7, dx: -3, dy: -5, z: 2 },
  { rotate: 2.2, dx: 8, dy: 3, z: 5 },
];

function getTypeIcon(type = "") {
  const t = type.toLowerCase();
  if (t.includes("video")) return "▶";
  if (t.includes("podcast")) return "🎙";
  if (t.includes("spotlight")) return "⭐";
  return "📰"; // article/default
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/60 text-white">
      {children}
    </span>
  );
}

function PressCard({ item, jitter }) {
  const {
    title,
    type,
    link,
    transcriptLink,
    image,
    excerpt,
    date,
    source,
    duration,
    tags = [],
  } = item;
  const { rotate, dx, dy, z } = jitter;

  return (
    <motion.article
      className="relative group rounded-2xl overflow-hidden bg-white/12 border border-white/20 backdrop-blur-md transition will-change-transform focus-within:ring-2 focus-within:ring-white/70 focus-within:ring-offset-2 focus-within:ring-offset-brand-violet"
      style={{
        transform: `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`,
        zIndex: z,
      }}
      whileHover={{ rotate: rotate * 0.6 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      {/* Media */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${type || "Item"}: ${title}`}
        className="block"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {image ? (
            <img
              src={image}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-black/20" />
          )}

          {/* Type badge & duration */}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge>
              <span aria-hidden>{getTypeIcon(type)}</span>
              <span className="uppercase tracking-wide">{type}</span>
            </Badge>
          </div>
          {duration && (
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-0.5 rounded text-[11px] bg-black/70 text-white">
                {duration}
              </span>
            </div>
          )}
        </div>
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-white/70">
          {source && <span>{source}</span>}
          {date && (
            <>
              {source && <span aria-hidden>•</span>}
              <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight line-clamp-2">
          {title}
        </h3>

        {/* Excerpt (trimmed) */}
        {(excerpt || transcriptLink) && (
          <p className="text-sm text-white/80 line-clamp-2">
            {excerpt || "Transcript available."}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="mt-2 flex items-center gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white text-brand-violet text-sm font-semibold transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Open ↗
          </a>
          {transcriptLink && (
            <a
              href={transcriptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-white/60 text-white text-sm font-medium transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Transcript
            </a>
          )}
        </div>
      </div>

      {/* Hover overlay for subtle contrast bump */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/0 group-hover:bg-white/[0.02]" />
    </motion.article>
  );
}

export default function PressSection() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("");
  const [sort, setSort] = useState("newest"); // 'newest' | 'oldest' | 'title'

  // Build tag list (only show if items actually provide tags)
  const allTags = useMemo(() => {
    const s = new Set();
    PRESS_ITEMS.forEach((i) => (i.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    let items = PRESS_ITEMS.slice();

    // Filter by type
    if (typeFilter !== "All") {
      items = items.filter(
        (i) => (i.type || "").toLowerCase() === typeFilter.toLowerCase()
      );
    }

    // Filter by search query across title + excerpt + source
    const q = query.trim().toLowerCase();
    if (q) {
      items = items.filter((i) => {
        const hay = `${i.title ?? ""} ${i.excerpt ?? ""} ${
          i.source ?? ""
        }`.toLowerCase();
        return hay.includes(q);
      });
    }

    // Filter by tag
    if (activeTag) {
      items = items.filter((i) => (i.tags || []).includes(activeTag));
    }

    // Sort
    items.sort((a, b) => {
      if (sort === "title") {
        return (a.title || "").localeCompare(b.title || "");
      }
      if (sort === "oldest") {
        return new Date(a.date || 0) - new Date(b.date || 0);
      }
      // newest
      return new Date(b.date || 0) - new Date(a.date || 0);
    });

    return items;
  }, [typeFilter, query, activeTag, sort]);

  return (
    <div className="w-full max-w-[1150px] px-6">
      <section
        className="text-left bg-brand-violet/95 border border-white/15 rounded-2xl shadow-lg my-6 py-8 px-6 text-gray-100"
        aria-label="Press & Media"
      >
        {/* Lead-in */}
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Press &amp; Media
          </h2>
          <p className="mt-2 text-sm text-white/80 max-w-2xl">
            Articles, podcasts, and videos featuring Matthew Gavzy. Filter,
            search, and sort to find what you need quickly.
          </p>
        </header>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-3">
          {/* Row 1: Type filters */}
          <div className="flex flex-wrap items-center gap-2">
            {TYPE_ORDER.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-full text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  typeFilter === t
                    ? "bg-white text-brand-violet font-semibold"
                    : "bg-white/10 text-white/90 hover:bg-white/15"
                }`}
                aria-pressed={typeFilter === t}
              >
                {t}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <label htmlFor="sort" className="sr-only">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title A–Z</option>
              </select>
            </div>
          </div>

          {/* Row 2: Search + Tags */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1">
              <label htmlFor="press-search" className="sr-only">
                Search
              </label>
              <input
                id="press-search"
                type="search"
                placeholder="Search articles, videos, podcasts…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              />
            </div>

            {allTags.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-xs text-white/70 shrink-0">Tags:</span>
                <button
                  type="button"
                  onClick={() => setActiveTag("")}
                  className={`px-2.5 py-1 rounded-full text-xs transition shrink-0 ${
                    activeTag === ""
                      ? "bg-white text-brand-violet font-semibold"
                      : "bg-white/10 text-white/90 hover:bg-white/15"
                  }`}
                >
                  All
                </button>
                {allTags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTag(t === activeTag ? "" : t)}
                    className={`px-2.5 py-1 rounded-full text-xs transition shrink-0 ${
                      activeTag === t
                        ? "bg-white text-brand-violet font-semibold"
                        : "bg-white/10 text-white/90 hover:bg-white/15"
                    }`}
                    aria-pressed={activeTag === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <PressCard
              key={`${item.title}-${idx}`}
              item={item}
              jitter={JITTERS[idx % JITTERS.length]}
            />
          ))}
          {filtered.length === 0 && (
            <p className="text-white/80 text-sm">
              No results. Try clearing filters.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
