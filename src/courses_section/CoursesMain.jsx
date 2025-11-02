import Events from "./Events";
import Catalogue from "./Catalogue";

export default function CoursesMain({ onImageClick }) {
  //const images = ["./procedure.jpg", "/taping.jpg", "./stock1.jpg"];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-brand-beige w-full py-5 px-10">
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Seminars</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore hands-on workshops and educational sessions designed to
            elevate your skills.
          </p>
        </section>

        <Catalogue />
      </div>
      <Events />
    </div>
  );
}
