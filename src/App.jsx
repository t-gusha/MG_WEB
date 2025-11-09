import { useState, useMemo } from "react";
import AboutMain from "./about_section/AboutMain";
import CoursesMain from "./courses_section/CoursesMain";
import HomeSwitch from "./HomeSwitch";
import HomeLanding from "./home/HomeLanding";

function NavButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`px-4 py-2 rounded-xl transition-all cursor-pointer duration-300
        ${
          active
            ? "bg-white/20 text-white backdrop-blur-md shadow"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState("home"); // 'home' | 'courses' | 'about'

  const bgClass = useMemo(() => {
    switch (page) {
      case "home":
        return "bg-brand-violet";
      case "courses":
        return "bg-brand-blue";
      case "about":
        return "bg-brand-green";
      default:
        return "bg-brand-violet";
    }
  }, [page]);

  return (
    <div
      className={`min-h-screen transition-colors duration-[1500ms] ease-in-out ${bgClass}`}
    >
      <div className="relative">
        {/* Logo / Title block (no more click-to-toggle) */}
        <div className="relative z-10">
          <HomeSwitch currentPage={page} />
        </div>

        {/* Nav bar directly under the HomeSwitch image */}
        <nav className="sticky top-0 z-10 flex items-center justify-center gap-3 py-3">
          <div className="flex items-center gap-2 rounded-2xl bg-black/10 px-2 py-2 backdrop-blur-sm">
            <NavButton active={page === "home"} onClick={() => setPage("home")}>
              Home
            </NavButton>
            <NavButton
              active={page === "courses"}
              onClick={() => setPage("courses")}
            >
              Courses
            </NavButton>
            <NavButton
              active={page === "about"}
              onClick={() => setPage("about")}
            >
              About
            </NavButton>
          </div>
        </nav>

        {/* Cross-fade container */}
        <div className="relative overflow-hidden min-h-[60vh]">
          {/* HOME */}
          <section
            className={`transition-opacity duration-1000 ease-in-out
              ${
                page === "home"
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
          >
            <HomeLanding setPage={setPage} />
          </section>

          {/* COURSES */}
          <section
            className={`transition-opacity duration-1000 ease-in-out
              ${
                page === "courses"
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
          >
            <CoursesMain />
          </section>

          {/* ABOUT */}
          <section
            className={`transition-opacity duration-1000 ease-in-out
              ${
                page === "about"
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
          >
            <AboutMain />
          </section>
        </div>
      </div>
    </div>
  );
}
