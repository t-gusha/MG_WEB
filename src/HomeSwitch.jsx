export default function HomeSwitch({ currentPage }) {
  const titleColor =
    currentPage === "about"
      ? "text-text1"
      : currentPage === "courses"
      ? "text-text2"
      : "text-white";

  return (
    <div className="flex justify-center items-center flex-col pt-35 pb-10 gap-8">
      <div className="relative h-[200px] w-[200px] animate-bounce-gentle">
        <img
          src="./Logo.png"
          alt="Logo"
          className="h-full w-full rounded-full bg-gray-300 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="text-center">
        <h1 className={`${titleColor} w-full text-4xl font-sans`}>
          Bridging the Gap
        </h1>
        {currentPage === "about" && (
          <h2 className="w-full text-xl text-subtle1">About Body and Works</h2>
        )}
        {currentPage === "courses" && (
          <h2 className="w-full text-xl text-subtle2">Seminars</h2>
        )}
        {currentPage === "home" && (
          <h2 className="w-full text-xl text-white/80">Welcome</h2>
        )}
      </div>
    </div>
  );
}
