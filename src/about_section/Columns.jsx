export default function AboutColumns() {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full px-6 md:px-10 py-12 md:py-16 bg-brand-beige"
    >
      {/* Lead-in */}
      <header className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
        <h1
          id="about-title"
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
        >
          Main Title
        </h1>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-violet/80 to-brand-blue/80" />
      </header>

      {/* Intro columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Subtitle One
          </h2>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p className="mt-4 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Subtitle Two
          </h2>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p className="mt-4 text-[15px] md:text-base text-gray-700 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
        </article>
      </div>

      {/* Visual separator */}
      <div className="max-w-6xl mx-auto my-10 md:my-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Secondary columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <article className="p-0">
          <header className="px-6 md:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Section Title
            </h3>
            <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </header>

          {/* Image block */}
          <figure className="mt-6">
            <div className="w-full h-48 md:h-56 rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
              {/* Replace with <img src="/about-1.jpg" alt="..." className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption describing the image.
            </figcaption>
          </figure>

          <p className="mt-6 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem.
          </p>
        </article>

        <article className="p-0">
          {/* Top image */}
          <figure>
            <div className="w-full h-48 md:h-56 rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
              {/* <img src="/about-2.jpg" alt="..." className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption for context.
            </figcaption>
          </figure>

          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
            Another Title
          </h3>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Bottom image */}
          <figure className="mt-6">
            <div className="w-full h-48 md:h-56 rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
              {/* <img src="/about-3.jpg" alt="..." className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption for additional context.
            </figcaption>
          </figure>

          <p className="mt-6 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </section>
  );
}
