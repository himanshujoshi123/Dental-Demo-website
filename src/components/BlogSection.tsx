import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  X,
  Mail,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { BLOG_POSTS } from '../data/clinicData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Dental Health Insights & Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest Articles & Patient Guides
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Expert dental care tips, procedure comparisons, and oral health guides written by our board-certified dentists.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col rounded-[28px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 overflow-hidden shadow-lg shadow-sky-900/5 hover:shadow-2xl hover:border-white/90 hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/40 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-7 h-7 rounded-full object-cover border border-white/60"
                    />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {post.author}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold text-sky-700 dark:text-sky-300 hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter & Discount Voucher Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-950 to-cyan-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              Exclusive Patient Reward
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Subscribe & Get $50 OFF Your First Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join the Georgia Dental Care newsletter for monthly smile health tips, seasonal whitening discounts, and instant $50 welcome voucher code!
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {isSubscribed ? (
              <div className="p-4 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                <span>Voucher Code Sent! Check your inbox for $50 OFF coupon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold shadow-md hover:scale-105 transition"
                >
                  Get $50 Voucher
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Full Article Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-10 max-w-3xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl my-8 relative space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>By {selectedPost.author} ({selectedPost.authorRole})</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
