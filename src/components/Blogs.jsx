// src/components/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'Minimal UI Design: Benefits and Best Practices',
      excerpt: 'Explore the principles of minimal UI design and how it can improve user experience and engagement.',
      date: 'March 15, 2026',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Improving User Experience: Best Practices for Web Design',
      excerpt: 'Learn the essential best practices for creating user-friendly websites that convert visitors into customers.',
      date: 'March 10, 2026',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Understanding the Color Wheel: Basics Every Designer Should Know',
      excerpt: 'A comprehensive guide to understanding color theory and how to apply it effectively in your designs.',
      date: 'March 5, 2026',
      category: 'Design Theory',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Getting Started with Android App Development',
      excerpt: 'A beginner-friendly guide to building your first Android app using Java and Android Studio.',
      date: 'February 28, 2026',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Future of IT: Emerging Technologies to Watch',
      excerpt: 'Discover the latest trends and technologies shaping the future of the IT industry.',
      date: 'February 20, 2026',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Building Scalable Web Applications with React',
      excerpt: 'Learn how to build scalable and maintainable web applications using React and modern best practices.',
      date: 'February 15, 2026',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FAF9F4] min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm tracking-wider">News &amp; Blogs</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3B2C] font-serif italic mt-1 sm:mt-2">
            Our Latest <span className="text-[#EFA83C]">News & Blogs</span>
          </h2>
          <p className="text-[#6B6B62] mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Insights, tutorials, and thoughts on design, development, and technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1F3B2C] text-white text-[0.7rem] sm:text-sm font-semibold hover:bg-[#16291D] transition">
            All
          </button>
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-transparent border border-[#E5E3DA] text-[#6B6B62] text-[0.7rem] sm:text-sm font-semibold hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition">
            UI/UX Design
          </button>
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-transparent border border-[#E5E3DA] text-[#6B6B62] text-[0.7rem] sm:text-sm font-semibold hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition">
            Web Design
          </button>
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-transparent border border-[#E5E3DA] text-[#6B6B62] text-[0.7rem] sm:text-sm font-semibold hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition">
            Mobile Development
          </button>
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-transparent border border-[#E5E3DA] text-[#6B6B62] text-[0.7rem] sm:text-sm font-semibold hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition">
            Technology
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-[0.6rem] sm:text-xs text-[#EFA83C] font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[0.6rem] sm:text-xs text-[#6B6B62]">•</span>
                  <span className="text-[0.6rem] sm:text-xs text-[#6B6B62]">{post.readTime}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1F3B2C] mb-1.5 sm:mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#6B6B62] text-[0.7rem] sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] sm:text-xs text-[#6B6B62]">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-[#1F3B2C] font-semibold text-[0.7rem] sm:text-sm hover:text-[#EFA83C] transition flex items-center gap-1"
                  >
                    Read More <i className="fa-solid fa-arrow-right text-[0.6rem] sm:text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#1F3B2C] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-[0.8rem] sm:text-sm hover:bg-[#16291D] transition"
          >
            Start Your Project <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
