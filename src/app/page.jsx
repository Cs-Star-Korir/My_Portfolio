import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Profile image - swap the src once you add your photo to /public */}
      <img
        src="/Sir Korir.jpg"
        alt="Tonybrian"
        className="w-32 h-32 rounded-full object-cover mb-6"
      />

      <p className="text-sm text-gray-500 mb-2">
        ICT & Computer Science Student
      </p>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Hey, I&apos;m Tonybrian
      </h1>

      <p className="max-w-md text-gray-600 mb-8">
        I build practical, reliable web applications — currently exploring
        full-stack development with React and Next.js.
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Request CV
        </Link>
      </div>
    </main>
  );
}