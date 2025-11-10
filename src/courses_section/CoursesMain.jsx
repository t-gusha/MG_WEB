import React, { useEffect } from "react";
import Events from "./Events";
import Catalogue from "./Catalogue";

export default function CoursesMain() {
  // Smooth scroll for the page
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-brand-beige w-full py-8 md:py-12 px-6 md:px-10 lg:px-14">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Seminars
          </h1>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-violet/80 to-brand-blue/80" />
        </section>
        <Catalogue compact />
      </div>

      <Events />
    </div>
  );
}
