import Link from "next/link";

export default function Blog() {
  const articles = [
    {
      slug: "ai-in-healthcare",
      title: "Transforming Healthcare with AI-Powered Patient Portals",
      excerpt: "How custom AI solutions can reduce administrative workload by 60% while improving patient care and satisfaction scores.",
      readTime: "8 min read",
      category: "Healthcare Tech",
      date: "2024-01-15"
    },
    {
      slug: "react-nextjs-saas",
      title: "Building Scalable SaaS Products with React and Next.js",
      excerpt: "Architecture patterns and best practices for creating enterprise-ready SaaS platforms that scale to millions of users.",
      readTime: "12 min read", 
      category: "Development",
      date: "2024-01-12"
    },
    {
      slug: "data-analytics-dashboards",
      title: "Creating Business Intelligence Dashboards That Drive Decisions",
      excerpt: "Turning complex data into actionable insights with real-time analytics and predictive modeling.",
      readTime: "6 min read",
      category: "Data Analytics",
      date: "2024-01-10"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Matrix Tech Insights
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Expert articles on AI development, web technologies, and digital transformation strategies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="mb-4">
                  <span className="bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
