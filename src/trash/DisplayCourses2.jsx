import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEST_DATA } from "./CoursesTestData";

export default function DisplayCourses2() {
  const listElements = TEST_DATA; // [{ title, subtitle, image? }, ...]
  const [selCourse, setSelCourse] = useState(0);
  const [active, setActive] = useState(null);

  // static order (no shuffle)
  const order = listElements.map((_, i) => i);

  // alternating row pattern: 3, 4, 3, 4...
  const rows = [];
  let i = 0;
  let isThree = true;
  while (i < order.length) {
    const count = isThree ? 3 : 4;
    rows.push(order.slice(i, i + count));
    i += count;
    isThree = !isThree;
  }

  const onCardClick = (idx) => {
    setSelCourse(idx);
    setActive(idx);
  };

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Courses — Polaroid Wall
      </h2>

      <div className="flex flex-col gap-8 px-2 md:px-4 items-center">
        {rows.map((rowItems, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${
              rowItems.length === 3 ? "grid-cols-3" : "grid-cols-4"
            } gap-6 justify-center`}
          >
            {rowItems.map((idx) => {
              const it = listElements[idx];
              const isSelected = idx === selCourse;
              const tilt = ((idx * 7) % 11) - 5;

              return (
                <motion.div
                  key={`${it?.title}-${idx}`}
                  layout
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="flex justify-center"
                >
                  <motion.button
                    type="button"
                    onClick={() => onCardClick(idx)}
                    whileHover={{ rotate: 0, y: -4 }}
                    whileTap={{ scale: 0.995 }}
                    style={{ rotate: tilt, width: 300, height: 300 }}
                    className={`relative bg-white rounded-xl border p-2 text-left shadow-[0_12px_24px_rgba(0,0,0,0.12)] ${
                      isSelected
                        ? "ring-2 ring-brand-blue border-brand-blue/20"
                        : "border-black/5"
                    }`}
                  >
                    <div className="w-full h-[230px] overflow-hidden rounded-md bg-neutral-200">
                      {it?.image ? (
                        <img
                          src={it.image}
                          alt={it.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-sky-200 to-indigo-300" />
                      )}
                    </div>
                    <div className="mt-2 px-1">
                      <p className="font-semibold text-sm leading-tight">
                        {it?.title}
                      </p>
                      {it?.subtitle && (
                        <p className="text-xs text-neutral-600 line-clamp-2">
                          {it.subtitle}
                        </p>
                      )}
                    </div>

                    {isSelected && (
                      <span className="absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full bg-brand-blue text-white shadow">
                        Selected
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-black/5 w-full max-w-lg p-3"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const it = listElements[active];
                return (
                  <>
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-200">
                      {it?.image ? (
                        <img
                          src={it.image}
                          alt={it.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-rose-200 to-rose-400" />
                      )}
                    </div>
                    <div className="mt-3 px-1">
                      <p className="font-semibold text-base leading-tight">
                        {it?.title}
                      </p>
                      {it?.subtitle && (
                        <p className="text-sm text-neutral-600">
                          {it.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2">
                      <button
                        onClick={() => {
                          setSelCourse(active);
                          setActive(null);
                        }}
                        className="px-3 py-1.5 rounded-md bg-brand-blue text-white"
                      >
                        Select Course
                      </button>
                      <button
                        onClick={() => setActive(null)}
                        className="px-3 py-1.5 rounded-md border border-black/10"
                      >
                        Close
                      </button>
                    </div>
                  </>
                );
              })()}

              <button
                onClick={() => setActive(null)}
                className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white shadow border border-black/10 text-[13px]"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected course summary */}
      <div className="max-w-2xl mx-auto mt-8 p-4 rounded-xl border border-black/5 bg-white/70 backdrop-blur">
        <p className="text-sm text-neutral-600 mb-1">Currently selected:</p>
        <h3 className="text-lg font-semibold">
          {listElements[selCourse]?.title}
        </h3>
        {listElements[selCourse]?.subtitle && (
          <p className="text-sm text-neutral-700">
            {listElements[selCourse].subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
