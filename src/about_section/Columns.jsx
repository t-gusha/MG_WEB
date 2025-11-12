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
          About Bridging the Gap
        </h1>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-violet/80 to-brand-blue/80" />
      </header>

      {/* Intro columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Matthew Gavzy
          </h2>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Teaching continuing education is one of my greatest passions because
            it allows me to share what I’ve learned as both a massage therapist
            of over 30 years and a physical therapist assistant for more than
            20. I love helping massage therapists expand the way they
            think—encouraging curiosity, critical thinking, and a deeper
            understanding of the body.
          </p>
          <p className="mt-4 text-[15px] md:text-base text-gray-700 leading-relaxed">
            My classes are collaborative and conversational, filled with
            real-life examples, open dialogue, and plenty of “aha” moments.
            Above all, I want my students to leave inspired, more confident in
            their skills, and reminded that compassion and knowledge go hand in
            hand in great patient care.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Vision Statement
          </h2>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            At Bridging the Gap Seminars, we envision a profession where massage
            therapists are empowered with the knowledge, critical thinking, and
            clinical insight to collaborate confidently across disciplines. By
            integrating evidence-based practice with compassion and humanism, we
            strive to elevate the standards of massage therapy
            education—bridging the gap between what therapists know and what
            they are truly capable of achieving.
          </p>
          <p className="mt-4 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Our goal is to inspire lifelong learning, professional excellence,
            and a community of practitioners dedicated to advancing both their
            own growth and the future of the profession. Matthew Gavzy of
            Bridging the Gap Seminars is an NCBTMB accredited Approved Provider.
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
              My Story
            </h3>
            <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
              Matthew Gavzy, PTA, LMT, BCTMB has been a practicing massage
              therapist since 1994. He achieved Board Certification in
              Therapeutic Massage and Bodywork in 1995, is a Professional Member
              of the American Massage Therapy Association (AMTA), and an active
              member of the National Certification Board for Therapeutic Massage
              and Bodywork (NCBTMB). In 2014, he became a Licensed Massage
              Therapist in New Jersey. He also holds Specialty Certificates in
              Clinical Rehabilitative Massage and Sports Massage and served as a
              member of the AMTA National Event Sports Massage Team.
            </p>
          </header>

          {/* Image block */}
          <figure className="mt-6">
            <div className="relative w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100 aspect-[16/9] md:aspect-[5/3]">
              <img
                src="./seminar3.jpg"
                alt="..."
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption describing the image.
            </figcaption>
          </figure>

          <p className="mt-6 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Matthew currently serves on the NCBTMB Board of Directors and has
            contributed as a national exam question writer and Specialty
            Certificate Committee member. He is also an experienced educator,
            having taught at the AMTA National Convention (2022, 2024) as well
            as numerous AMTA State Conferences. In addition, he is a published
            author in the field.
          </p>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            He holds a BS in Economics from the University of Delaware and an AS
            in Applied Health as a Physical Therapist Assistant. As the owner of
            Body Workings Massage Therapy, Matthew specializes in orthopedic
            massage, sports massage, and chronic pain management. By combining
            his knowledge of physical therapy and massage therapy, he provides
            an integrated approach to care. Today, he also serves as a
            continuing education provider, teaching massage therapists advanced
            skills and concepts to help bridge the education gap between massage
            therapy and physical therapy.
          </p>
        </article>

        <article className="p-0">
          {/* Top image */}
          <figure>
            <div
              className="relative w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100
                  aspect-[16/9] md:aspect-[5/3]"
            >
              <img
                src="./MG.jpg"
                alt="Portrait of Matthew Gavzy"
                className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
                /* tweak the 50%_30% to shift the crop: x%_y% */
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption for context.
            </figcaption>
          </figure>

          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900"></h3>
          <p className="mt-3 text-[15px] md:text-base text-gray-700 leading-relaxed">
            As the AMTA-NJ Massage Emergency Response Team Coordinator, Matthew
            provided massage therapy at the Pentagon and Ground Zero to rescue
            workers following the 9/11 attacks. His career includes work at many
            high-profile national and international sporting events, including
            the 1996 Atlanta Olympic and Paralympic Games, the A10 Swimming and
            Diving Championships, the NCAA Men’s Swimming and Diving
            Championships with LaSalle University and Yale University, ATP and
            WTA Tennis Events, AVP Pro Beach Volleyball, and the New York,
            Boston, and Baltimore Marathons.
          </p>

          {/* Bottom image */}
          <figure className="mt-6">
            <div className="w-full h-48 md:h-56 rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
              <img
                src="./procedure.jpg"
                alt="..."
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Optional caption for additional context.
            </figcaption>
          </figure>

          <p className="mt-6 text-[15px] md:text-base text-gray-700 leading-relaxed">
            Since 2004, Matthew has also been a Licensed Physical Therapist
            Assistant in New Jersey, working in outpatient orthopedic,
            sub-acute, and long-term care settings with a wide range of
            orthopedic and neurological conditions. During the COVID-19
            pandemic, he served in New Jersey’s pop-up hospitals, providing
            physical therapy to patients affected by the virus.
          </p>
        </article>
      </div>
    </section>
  );
}
