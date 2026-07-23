export default function About() {
  return (
    <main className="relative px-6 py-20 min-h-screen overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        {/* About Me */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-center text-foreground">
            About Me
          </h1>

          <div className="w-20 h-1 bg-clay rounded-full mx-auto mt-4 mb-10"></div>

          <p className="text-lg leading-8 text-warmgray">
            I'm a sophomore pursuing Computer Science at Strathmore University.
            I'm currently building my skills in full-stack web development,
            working with React and Next.js, and exploring how software can
            solve real, practical problems. I am also passionate about removing
            the crudeness in data—which is, for sure, the new oil!
          </p>
        </section>

        {/* Beyond the Code */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground">
            Beyond the Code
          </h2>

          <div className="w-16 h-1 bg-clay rounded-full mx-auto mt-3 mb-12"></div>

          {/* Athletics */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🏃 Athletics & Hiking
            </h3>

            <p className="text-lg leading-8 text-warmgray mb-8">
              Running has consistently taught me discipline, resilience, and
              consistency. The mindset I build on the track shapes how I
              approach learning, teamwork, and solving technical challenges.
              Morning runs are real therapy too. After a hard week, I normally
              reset by hiking and simply enjoying nature.
            </p>

            <div className="grid grid-cols-3 gap-4 auto-rows-[150px]">
              <img
                src="/running.jpeg"
                alt="Tonybrian running"
                className="w-full h-full object-cover rounded-2xl row-span-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />

              <img
                src="/hiking.jpg"
                alt="Tonybrian hiking"
                className="w-full h-full object-cover rounded-2xl row-span-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />

              <img
                src="/running.jpg"
                alt="Tonybrian running"
                className="w-full h-full object-cover rounded-2xl row-span-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />

              <img
                src="/hiking2.jpg"
                alt="Tonybrian hiking"
                className="w-full h-full object-cover rounded-2xl row-span-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />
            </div>
          </div>

          {/* Guitar */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🎸 Learning Guitar
            </h3>

            <p className="text-lg leading-8 text-warmgray">
              Plucking away at a new passion! Learning guitar is teaching me
              that with a little tuning and a lot of patience, every practice
              session brings a new reason to smile. It's a reminder that
              progress comes from consistency, not perfection.
            </p>
          </div>

          {/* Work Study */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              💼 Professional Experience
            </h3>

            <p className="text-lg leading-8 text-warmgray">
              Through Strathmore University's Work-Study Programme, I support
              lecturers by troubleshooting and maintaining audiovisual systems
              in lecture halls. The experience has strengthened my
              problem-solving skills, teamwork, and ability to work in a
              fast-paced technical environment.
            </p>
          </div>

          {/* Sustainability */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🌍 Building Technology for Impact
            </h3>

            <p className="text-lg leading-8 text-warmgray mb-8">
              I'm passionate about sustainability and recently participated in
              Cornell University's SMART Hackathon, contributing to discussions
              around carbon markets, bankability, and long-term financial
              resilience in Kenya's ASALs. The experience strengthened my
              interest in using technology and data to solve environmental and
              social challenges.
            </p>

            <img
              src="/carbon.jpg"
              alt="Carbon sustainability team"
              className="w-full h-[240px] object-cover rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            />
          </div>
        </section>
      </div>
    </main>
  );
}