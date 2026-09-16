"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  Eye, 
  Bookmark, 
  Share2, 
  Tag,
  TrendingUp,
  BookOpen,
  ChevronRight,
  Search,
  Filter,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const blogs = [
  { 
    id: 1,
    title: "Why Every Business Needs a Professional Website in 2025", 
    href: "/blog/professional-website", 
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    excerpt: "Discover how a professionally designed website can increase conversions by 300% and establish brand credibility in the digital age.",
    category: "Web Development",
    readTime: "7 min read",
    date: "Mar 15, 2025",
    author: "Ahmed Raza",
    views: "2.4K",
    tags: ["Web Design", "Business", "Digital Transformation"],
    featured: true
  },
  { 
    id: 2,
    title: "Social Media Strategies That Actually Convert in 2025", 
    href: "/blog/social-media", 
    img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Advanced social media tactics that drive real engagement and measurable ROI for businesses of all sizes.",
    category: "Digital Marketing",
    readTime: "8 min read",
    date: "Mar 12, 2025",
    author: "Sara Khan",
    views: "3.1K",
    tags: ["Social Media", "Marketing", "ROI"],
    featured: false
  },
  { 
    id: 3,
    title: "Next.js 14: The Secret to Lightning-Fast Websites", 
    href: "/blog/nextjs", 
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    excerpt: "Deep dive into Next.js 14 features that can boost your website performance by 200% and improve SEO rankings.",
    category: "Technology",
    readTime: "10 min read",
    date: "Mar 10, 2025",
    author: "Ali Hassan",
    views: "5.2K",
    tags: ["Next.js", "Performance", "SEO"],
    featured: false
  },
  { 
    id: 4,
    title: "Google Ranking Factors 2025 – What Actually Matters", 
    href: "/blog/seo", 
    img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1920&q=80",
    excerpt: "Updated SEO strategies based on Google's latest algorithm changes. Stay ahead of the competition with these insights.",
    category: "SEO",
    readTime: "12 min read",
    date: "Mar 8, 2025",
    author: "Zain Malik",
    views: "4.8K",
    tags: ["SEO", "Google", "Ranking"],
    featured: false
  },
  { 
    id: 5,
    title: "Complete Brand Identity Guide for Growing Businesses", 
    href: "/blog/branding", 
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=600&fit=crop",
    excerpt: "Step-by-step guide to building a strong brand identity that resonates with your target audience and drives loyalty.",
    category: "Branding",
    readTime: "9 min read",
    date: "Mar 5, 2025",
    author: "Maria Qureshi",
    views: "3.7K",
    tags: ["Branding", "Identity", "Design"],
    featured: false
  },
  { 
    id: 6,
    title: "5 Google Ads Mistakes That Burn Your Budget", 
    href: "/blog/google-ads", 
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Avoid these common pitfalls and optimize your Google Ads campaigns for maximum return on investment.",
    category: "PPC",
    readTime: "6 min read",
    date: "Mar 3, 2025",
    author: "Usman Tariq",
    views: "2.9K",
    tags: ["Google Ads", "PPC", "Advertising"],
    featured: false
  },
  { 
    id: 7,
    title: "How We Make $30K/Month with Email Marketing", 
    href: "/blog/email-marketing", 
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop",
    excerpt: "Real case study showing how strategic email marketing can generate substantial recurring revenue.",
    category: "Email Marketing",
    readTime: "11 min read",
    date: "Feb 28, 2025",
    author: "Fatima Ahmed",
    views: "6.3K",
    tags: ["Email", "Marketing", "Revenue"],
    featured: false
  },
  { 
    id: 8,
    title: "Website Redesign Checklist 2025 – 50+ Items", 
    href: "/blog/redesign", 
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Comprehensive checklist for a successful website redesign that improves UX and boosts conversions.",
    category: "Web Design",
    readTime: "14 min read",
    date: "Feb 25, 2025",
    author: "Bilal Khan",
    views: "4.1K",
    tags: ["Redesign", "UX", "Checklist"],
    featured: false
  },
];

const categories = [
  "All Topics",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "Technology",
  "Branding",
  "Business Growth",
  "Case Studies"
];

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    href: string;
    img: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    views: string;
    tags: string[];
    featured?: boolean;
  };
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={blog.href}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 hover:border-cyan-200 transition-all duration-500 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
              {blog.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500 ml-auto">
              <Eye className="w-4 h-4" />
              {blog.views}
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-slate-600 mb-6 flex-1 line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.slice(0, 2).map((tag: string, index: number) => (
              <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-slate-700 font-medium">
                {blog.author.charAt(0)}
              </div>
              <div className="text-sm">
                <div className="font-medium text-slate-900">{blog.author}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-cyan-600 font-semibold group/link">
              <span className="text-sm">Read</span>
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const featuredBlog = blogs.find(blog => blog.featured) || blogs[0];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === "All Topics" || blog.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4" />
              ULTRACOM INSIGHTS
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Knowledge Hub
              </span>
              <span className="block text-cyan-400 text-4xl lg:text-5xl mt-4">
                Digital Excellence Blog
              </span>
            </h1>

            <p className="text-xl text-slate-300 mt-8 leading-relaxed">
              Expert insights, strategies, and trends in web development, digital marketing, 
              and enterprise technology. Stay ahead with our premium content.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-1 border border-slate-700/50">
                  <div className="flex items-center gap-3 px-4">
                    <Search className="w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles, topics, or keywords..."
                      className="w-full py-4 bg-transparent text-white placeholder-slate-400 focus:outline-none text-lg"
                    />
                    <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                EDITOR'S PICK
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Article</h2>
            </div>
            <Link 
              href={featuredBlog.href}
              className="flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
            >
              Read Full Story
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Link href={featuredBlog.href}>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 hover:border-cyan-200 transition-all duration-500 group-hover:shadow-cyan-500/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <Image 
                      src={featuredBlog.img} 
                      alt={featuredBlog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                      <span className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-bold">
                        {featuredBlog.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredBlog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredBlog.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-cyan-700 transition-colors duration-300">
                      {featuredBlog.title}
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {featuredBlog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {featuredBlog.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{featuredBlog.author}</div>
                          <div className="text-sm text-slate-500">Lead Strategist</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Save">
                          <Bookmark className="w-5 h-5 text-slate-400 hover:text-cyan-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Share">
                          <Share2 className="w-5 h-5 text-slate-400 hover:text-cyan-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-semibold text-slate-900">Browse Categories</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Articles</h2>
              <p className="text-slate-600">
                Showing {filteredBlogs.length} of {blogs.length} premium articles
              </p>
            </div>
            <div className="flex items-center gap-2 text-cyan-600 font-semibold">
              <TrendingUp className="w-5 h-5" />
              <span>Trending Now</span>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No articles found</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.filter(blog => !blog.featured).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Premium Insights
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Get the latest articles, case studies, and industry trends delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-slate-400 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}