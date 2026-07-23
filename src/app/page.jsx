import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20">
      <img
        src="/Sir Korir.jpg"
        alt="Tonybrian"
        className="w-80 h-80 rounded-full object-cover mb-6"
      />

      <p className="text-sm text-warmgray mb-2">ICT & Computer Science Student</p>

      <h1 className="text-4xl font-bold text-foreground mb-4">
        Hey, I&apos;m Tonybrian
      </h1>

      <p className="max-w-md text-warmgray mb-8">
        I build practical, reliable web applications — currently exploring
        full-stack development with React and Next.js.
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="px-5 py-2 bg-clay text-white rounded-md hover:opacity-90 transition-opacity"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2 border border-sage text-sage rounded-md hover:bg-sage hover:text-white transition-colors"
        >
          Request CV
        </Link>
      </div>
    </main>
  );
}