import CVRequestForm from "@/components/CVRequestForm";

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-8">
        Want a copy of my CV? Fill in your details below and I&apos;ll send
        it to you directly.
      </p>

      <CVRequestForm />
    </main>
  );
}