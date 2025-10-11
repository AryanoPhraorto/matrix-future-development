import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-green-400 hover:text-green-300 mb-8 inline-block">
            ← Back to Blog
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
