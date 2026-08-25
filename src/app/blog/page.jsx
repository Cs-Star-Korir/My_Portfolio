import blogPosts from "@/data/blogPosts.json";

export default function Blog() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">Blog</h1>
      <p className="text-warmgray mb-8">
        Writing on carbon markets, climate finance, and pastoral resilience — co-authored with {" "}
        <a href="https://www.linkedin.com/in/adho-yattani-580206280/" 
           target="_blank"
           rel="noreferrer noopener"
           className="underline hover:text-clay transition colors"
        >Adho Elle</a> and Enock Mobisa
        
        {" "} as part of my work with AIID-Africa.
      </p>

      <div className="flex flex-col gap-6">
        {blogPosts.map((post) => (
          
          <a  key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-b border-clay/20 pb-6"
          >
            <h2 className="text-lg font-semibold text-foreground  mb-1">
              {post.title}
            </h2>
            <p className="text-warmgray group-hover:text-clay transition-colors">
              {post.summary}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}