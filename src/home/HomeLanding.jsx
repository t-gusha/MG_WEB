import { motion } from "framer-motion";
import PressSection from "./PressSection";

const COURSE_SECTIONS = [
  {
    id: "adv",
    title: "Comprehensive & Advanced (8–16 CEs)",
    subtitle: "Deep-Dive Learning for Experienced Therapists",
    description:
      "For those seeking to refine their clinical expertise, these full-day and multi-day programs explore advanced assessment, orthopedic considerations, and evidence-based reasoning—building mastery in complex client care.",
    tags: ["Advanced", "Orthopedics", "Assessment"],
  },
  {
    id: "mod",
    title: "Moderate & Practical (4–8 CEs)",
    subtitle: "Hands-On Skills to Elevate Everyday Practice",
    description:
      "Focused, skill-based seminars designed to enhance your practical techniques and expand your clinical toolkit. Perfect for therapists looking to integrate new modalities or refine specific treatment approaches.",
    tags: ["Hands-On", "Techniques", "Modalities"],
  },
  {
    id: "intro",
    title: "Introductory & Foundational (2–3 CEs)",
    subtitle: "Quick, Insightful Courses on Ethics and Professional Growth",
    description:
      "Short, meaningful sessions that strengthen your professional foundation—covering topics in ethics, communication, and client-centered care. Ideal for fulfilling CE requirements while deepening your personal practice philosophy.",
    tags: ["Ethics", "Communication", "Foundations"],
  },
];

function CourseCard({ section, index }) {
  return (
    <motion.section
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-violet/70"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <div className="p-6 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          {section.title}
        </h2>
        <p className="text-lg italic text-gray-700">{section.subtitle}</p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-1">
          {section.description}
        </p>

        {section.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {section.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-brand-violet/10 text-brand-violet font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default function HomeLanding({ setPage }) {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-brand-beige px-8 py-20 overflow-hidden">
        <motion.section
          className="max-w-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Title
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">Subtitle</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-base leading-relaxed text-center md:text-left text-gray-700 md:w-1/2">
              Explore a curated lineup of continuing education seminars designed
              to meet you where you are in your massage therapy career. Our
              programs range from concise 2–3 hour ethics and humanism courses,
              to mid-length taping and orthopedic classes, all the way up to
              full-day advanced clinical intensives. Each course is crafted to
              expand your confidence, sharpen your skills, and elevate the
              quality of care you provide.
            </p>

            <motion.img
              src="./seminar4.jpg"
              alt="Massage therapy seminar in progress"
              className="rounded-2xl w-full md:w-1/2 h-[300px] object-cover shadow-md border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.section>

        {/* ===== COURSE GRID ===== */}
        <section
          className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8"
          aria-label="Course Categories"
        >
          {COURSE_SECTIONS.map((section, i) => (
            <CourseCard key={section.id} section={section} index={i} />
          ))}
        </section>

        <motion.button
          onClick={() => setPage("courses")}
          className="mt-10 px-6 py-3 bg-white text-brand-violet font-semibold rounded-full border border-gray-200 hover:bg-gray-100 transition focus-visible:ring-2 focus-visible:ring-brand-violet/70 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Seminars →
        </motion.button>
      </div>

      {/* ===== SYNOPSIS / MISSION SECTION ===== */}
      <div className="w-full bg-brand-violet text-center text-white">
        <section className="w-full max-w-5xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Bridging the Gap Seminars
          </h2>
          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto mb-12">
            Bridging the Gap Seminars delivers evidence-based, human-centered
            continuing education for massage therapists. Led by{" "}
            <span className="font-semibold">
              Matthew Gavzy, PTA, LMT, BCTMB
            </span>
            —an NCBTMB Approved Provider with over 30 years of experience—these
            seminars build confidence, clinical reasoning, and collaboration
            skills that bridge the worlds of massage therapy and physical
            therapy.
          </p>

          <motion.div
            className="bg-brand-beige text-left rounded-2xl shadow-md px-8 md:px-16 py-12 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to empower massage therapists with the knowledge,
              critical thinking, and compassion to collaborate confidently
              across disciplines—bridging education and practice through
              evidence-based learning, humanism, and lifelong professional
              growth.
            </p>
            <button
              onClick={() => setPage("about")}
              className="px-6 py-3 bg-brand-violet text-white font-semibold rounded-full hover:opacity-95 transition focus-visible:ring-2 focus-visible:ring-white/70 cursor-pointer"
            >
              Read More About →
            </button>
          </motion.div>
        </section>

        {/* ===== PRESS SECTION ===== */}
        <div className="flex items-center justify-center pb-16">
          <PressSection />
        </div>
      </div>
    </>
  );
}
