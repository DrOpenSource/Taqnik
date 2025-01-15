import React from 'react';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import ProductCard from './components/ProductCard';
import BlogCard from './components/BlogCard';
import ToolCard from './components/ToolCard';

function App() {
  const products = [
    {
      title: "Smart Analytics Suite",
      description: "Advanced analytics platform for business intelligence",
      price: "$99/mo",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
    },
    {
      title: "Cloud Security Pro",
      description: "Enterprise-grade security solution",
      price: "$149/mo",
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800"
    },
    {
      title: "DevOps Automation",
      description: "Streamline your development workflow",
      price: "$199/mo",
      imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Exploring how artificial intelligence is transforming business operations...",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800"
    },
    {
      title: "Cloud Computing Trends 2024",
      excerpt: "Key trends shaping the future of cloud computing and infrastructure...",
      author: "Michael Chen",
      date: "Mar 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures for modern businesses...",
      author: "Alex Rivera",
      date: "Mar 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
    }
  ];

  const aiTools = [
    {
      name: "TextAI Pro",
      description: "Advanced text analysis and generation tool",
      category: "Text Processing",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
    },
    {
      name: "ImageSense AI",
      description: "Intelligent image recognition and processing",
      category: "Computer Vision",
      imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800"
    },
    {
      name: "DataMind Analytics",
      description: "AI-powered data analysis and insights",
      category: "Data Analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Products Section */}
        <section id="products" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Catalog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="ai-tools" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Tools Directory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 TAQNIK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;