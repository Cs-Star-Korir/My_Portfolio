export default function About() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed relative px-6 py-16"
      style={{
        backgroundImage: 'url(/running.jpeg)',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Content wrapper */}
      <div className="relative max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
      <p className="text-gray-600 leading-relaxed">
        I'm Tonybrian, a second-year ICT and Computer Science student at
        Strathmore University. I'm currently building my skills in full-stack
        web development, working with React and Next.js, and exploring how
        software can solve real, practical problems.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
        Beyond the Code
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
        Athletics
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Running has consistently taught me discipline, resilience, and consistency. The
        mindset I build on the track shapes how I approach learning, teamwork,
        and solving technical challenges.Morning runs are a real therapy too 😝
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
        Learning Guitar
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        I'm currently learning the guitar, embracing the patience and persistence
        that come with mastering a new skill.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
        Work-Study Programme
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        At Strathmore University, I serve in the Work-Study Programme, where I
        support lecturers by troubleshooting and maintaining audiovisual
        systems in lecture halls.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
        Sustainability
      </h3>
      <p className="text-gray-600 leading-relaxed">
        I'm passionate about sustainability and was recently involved in Cornell
        University's SMART Hackathon, contributing to discussions around carbon
        markets, bankability, and long-term financial resilience in Kenya's
        ASALs. The experience strengthened my interest in using technology to
        address environmental and social challenges.
      </p>
      </div>
    </main>
  );
}