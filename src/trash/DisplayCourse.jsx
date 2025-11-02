import { useState } from "react";
import { TEST_DATA } from "./CoursesTestData";
import "./DisplayCourse.css";

export default function DisplayCourse() {
  const [selCourse, setSelCourse] = useState(0);
  const listElements = TEST_DATA;
  const cur = listElements[selCourse];

  return (
    <div className="flex w-full h-[90vh] overflow-hidden">
      <div className=" flex-1 w-full h-full">
        <div className=" w-full h-full py-10 pl-15 pr-6 flex flex-col min-h-0">
          <h1 className="text-4xl font-bold mb-2">{cur.title}</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            {cur.subtitle}
          </h2>
          <hr className="mb-4" />
          <div className="overflow-auto w-full scrollbar-hide">
            <p className="mb-4 text-gray-700 whitespace-pre-line">
              {cur.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full py-20 px-12 flex flex-col justify-end gap-15 overflow-hidden">
        <div className="grid grid-cols-2 auto-rows-[180px] rounded-xl overflow-hidden">
          <div className="bg-gray-600 border ">
            <img src={cur.img1} className="h-full w-full object-cover" />
          </div>
          <div className="bg-gray-600 border  row-span-2">
            <img src={cur.img2} className="h-full w-full  row-span-2" />
          </div>
          <div className="bg-gray-600 border">
            <img src={cur.img3} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex overflow-x-scroll gap-5 h-auto py-5 px-3 scrollbar-hide ">
          {listElements.map((course, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelCourse(index)}
              className={`flex-none w-[200px] rounded-lg py-3 px-4 ease-in duration-200 snap-start text-left
                ${
                  selCourse === index
                    ? "bg-brand-blue ring-2 ring-brand-blue/20"
                    : "bg-[#8593b0] hover:scale-105"
                }`}
            >
              <h3 className="text-lg font-bold mb-1">{course.title}</h3>
              <p className="text-xs text-gray-800 line-clamp-2">
                {course.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
