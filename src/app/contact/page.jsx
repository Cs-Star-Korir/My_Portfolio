import CVRequestForm from "@/components/CVRequestForm";

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">Résumé</h1>
      <p className="text-foreground mb-8">
        Want a copy of my CV? Fill in your details below and I&apos;ll send
        it to you directly.
      </p>

      <CVRequestForm />
    </main>
  );
}