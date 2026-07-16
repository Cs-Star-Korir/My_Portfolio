import blogPosts from "@/data/blogPosts.json";

export default function Blog() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">Blog</h1>
      <p className="text-warmgray mb-8">
        Writing on carbon markets, climate finance, and pastoral resilience —
        part of my work with AIID-Africa.
      </p>

      <div className="flex flex-col gap-6">
        {blogPosts.map((post) => (
          
           <a key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-warmgray/20 pb-6 hover:opacity-75 transition-opacity"
          >
            <h2 className="text-lg font-semibold text-foreground mb-1">
              {post.title}
            </h2>
            <p className="text-warmgray">{post.summary}</p>
          </a>
        ))}
      </div>
    </main>
  );
}