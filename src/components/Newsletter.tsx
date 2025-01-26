import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-indigo-100">Get the latest updates on products, blog posts, and AI tools.</p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}