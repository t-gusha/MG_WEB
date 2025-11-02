export default function AboutColumns() {
  return (
    <section className="w-full px-10 py-8 flex flex-col items-center justify-center space-y-10">
      {/* ---------- FIRST ROW (Main title centered above two columns) ---------- */}
      <div className="w-full flex flex-col gap-8">
        {/* Main title centered */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Main Title</h1>
        </div>

        {/* Two columns below the title */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Left half of main content */}
          <div className="basis-1/2 p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">
              Subtitle One
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          {/* Right half of main content */}
          <div className="basis-1/2 p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">
              Subtitle Two
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- SECOND ROW (original left + right columns) ---------- */}
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Original first column */}
        <div className="basis-1/2 pt-10 p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Section Title
          </h3>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full h-48 bg-gray-700 rounded-lg shadow-md mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem.
          </p>
        </div>

        {/* Original third column */}
        <div className="basis-1/2 pt-10 p-6">
          <div className="w-full h-48 bg-gray-700 rounded-lg shadow-md mb-4"></div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Another Title
          </h3>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full h-48 bg-gray-700 rounded-lg shadow-md mb-4"></div>
          <p className="text-gray-700 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
