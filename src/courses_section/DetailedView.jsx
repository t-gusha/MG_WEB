import { TEST_DATA } from "../test_data/CoursesTestData";
import { useEffect } from "react";

export default function DetailedView({ index, onClose }) {
  const item = TEST_DATA?.[index];

  const ImageContainer = () => {
    if (item?.img3) {
      return (
        <div className="w-full flex gap-4 mt-6">
          <img
            className="w-[32%] h-[350px] rounded-lg object-cover"
            src={item?.img1}
          />
          <img
            className="w-[32%] h-[350px] rounded-lg object-cover"
            src={item?.img2}
          />
          <img
            className="w-[32%] h-[350px] rounded-lg object-cover"
            src={item?.img3}
          />
        </div>
      );
    } else if (item?.img2) {
      return (
        <div className="w-full flex gap-4 mt-6">
          <img
            className="w-1/2 h-[350px] rounded-lg object-cover"
            src={item?.img1}
          />
          <img
            className="w-1/2 h-[350px] rounded-lg object-cover"
            src={item?.img2}
          />
        </div>
      );
    } else if (item?.img1) {
      return (
        <div className="w-full mt-6">
          <img
            className="w-full h-[350px] rounded-lg object-cover"
            src={item?.img1}
          />
        </div>
      );
    }
  };

  const enrollNow = () => {
    alert("Enrolling Now. Good job!");
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative z-10 w-[min(92vw,900px)] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
            {item?.title ?? `Item ${index + 1}`}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-gray-500 hover:bg-gray-100 transition cursosr-pointer"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 font-medium">{item?.subtitle}</p>
          <p className=" text-gray-700">
            <bold className="font-medium">Hours:</bold> {item?.hours}
          </p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {item?.description ??
              "Here you can render a richer description, syllabus, instructor info, pricing, and a CTA."}
          </p>
        </div>

        {/* Images */}
        <ImageContainer />

        {/* Footer Buttons */}
        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={enrollNow}
            className="rounded-lg px-5 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
