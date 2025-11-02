export default function HomeLanding({ setPage }) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-brand-beige px-8 py-20 overflow-hidden">
        {/* ===== Main Section ===== */}
        <section className="max-w-4xl text-center mb-28">
          <h1 className="text-5xl text-gray-800 font-bold mb-6">
            Continuing Education for Every Level of Practice
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From short ethics refreshers to immersive clinical training—choose
            the path that matches your professional goals.
          </p>
          <p className="text-base leading-relaxed text-gray-600 mb-8">
            Explore a curated lineup of continuing education seminars designed
            to meet you where you are in your massage therapy career. Our
            programs range from concise 2–3 hour ethics and humanism courses, to
            mid-length taping and orthopedic classes, all the way up to full-day
            advanced clinical intensives. Each course is crafted to expand your
            confidence, sharpen your skills, and elevate the quality of care you
            provide.
          </p>
          <button
            onClick={() => setPage("courses")}
            className="mt-4 px-6 py-3 bg-white text-brand-violet font-semibold rounded-full hover:bg-gray-100 cursor-pointer transition"
          >
            View All Seminars →
          </button>
        </section>

        {/* ===== Courses Grid: 2 cols × 4 rows ===== */}
        <div className="relative max-w-6xl grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto] gap-x-16 gap-y-24 w-full">
          {/* ---- Section 1: col 1, rows 1–2 ---- */}
          <section className="lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-brand-violet/40 p-5 rounded-lg">
            <h2 className="text-3xl font-semibold mb-2">
              Comprehensive & Advanced (8–16 CEs)
            </h2>
            <h3 className="text-xl italic text-gray-700 mb-4">
              Deep-Dive Learning for Experienced Therapists
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For those seeking to refine their clinical expertise, these
              full-day and multi-day programs explore advanced assessment,
              orthopedic considerations, and evidence-based reasoning—building
              mastery in complex client care.
            </p>
          </section>

          {/* ---- Section 2: col 2, rows 2–3 ---- */}
          <section className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-brand-violet/40 p-5 rounded-lg">
            <h2 className="text-3xl font-semibold mb-2">
              Moderate & Practical (4–8 CEs)
            </h2>
            <h3 className="text-xl italic text-gray-700 mb-4">
              Hands-On Skills to Elevate Everyday Practice
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Focused, skill-based seminars designed to enhance your practical
              techniques and expand your clinical toolkit. Perfect for
              therapists looking to integrate new modalities or refine specific
              treatment approaches.
            </p>
            <h4 className="font-semibold text-gray-700 mb-2">
              Course includes:
            </h4>
          </section>

          {/* ---- Section 3: col 1, rows 3–4 ---- */}
          <section className="lg:col-start-1 lg:row-start-3 lg:row-span-2 bg-brand-violet/40 p-5 rounded-lg">
            <h2 className="text-3xl font-semibold mb-2">
              Introductory & Foundational (2–3 CEs)
            </h2>
            <h3 className="text-xl italic text-gray-700 mb-4">
              Quick, Insightful Courses on Ethics and Professional Growth
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Short, meaningful sessions that strengthen your professional
              foundation—covering topics in ethics, communication, and
              client-centered care. Ideal for fulfilling CE requirements while
              deepening your personal practice philosophy.
            </p>
          </section>
        </div>
      </div>
      <div className="w-full bg-brand-violet">
        <section className="w-full max-w-5xl mx-auto text-center py-25 px-6">
          {/* === Synopsis === */}
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Bridging the Gap Seminars
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
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

          {/* === Mission & Approach === */}
          <div className="bg-brand-beige rounded-2xl shadow-md my-20 py-10 px-8 lg:px-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our mission is to empower massage therapists with the knowledge,
              critical thinking, and compassion to collaborate confidently
              across disciplines— bridging education and practice through
              evidence-based learning, humanism, and lifelong professional
              growth.
            </p>
            <button
              onClick={() => setPage("about")}
              className="mt-4 px-6 py-3 bg-white text-brand-violet font-semibold rounded-full hover:bg-gray-100 cursor-pointer transition"
            >
              Read More About →
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
