'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { SIT_PUBLICATIONS, PublicationItem } from '../data/sitData';
import { ShoppingBag, ChevronLeft, Check, Search, Trash2, ArrowRight } from 'lucide-react';

interface BookShopPageProps {
  navigate?: (path: string) => void;
}

export const BookShopPage: React.FC<BookShopPageProps> = ({ navigate: propNavigate }) => {
  const router = useRouter();
  const navigate = (path: string) => {
    if (propNavigate) {
      propNavigate(path);
    } else {
      router.push(path);
    }
  };
  const [cart, setCart] = useState<{ item: PublicationItem; count: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Monograph', 'Curriculum', 'Textbook', 'Research Journal'];

  const filteredBooks = SIT_PUBLICATIONS.filter((b) => {
    if (activeCategory !== 'All' && b.category !== activeCategory) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    }
    return true;
  });

  const addToCart = (item: PublicationItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.item.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.item.id === item.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { item, count: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.item.id !== id));
  };

  const totalCartCount = cart.reduce((sum, i) => sum + i.count, 0);
  const totalCartAmount = cart.reduce((sum, i) => sum + i.item.price * i.count, 0);

  return (
    <div className="min-h-screen bg-[#0b1320] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb & Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <button
            onClick={() => navigate('/publications')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-amber-400 transition-colors mb-4 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Publications & Curriculum Overview</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-1">
                Resource Catalog & Orders
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                SIT Publications Catalog
              </h1>
              <p className="text-stone-300 text-sm md:text-base mt-2 max-w-2xl font-light">
                Learning materials supporting students and teachers from the early years through higher school levels. Confirm current editions and enquire for school orders.
              </p>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative px-5 py-2.5 bg-stone-900 border border-white/15 hover:border-amber-400/40 rounded-xl flex items-center gap-3 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-white">Cart</span>
              {totalCartCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-[#0b1320] text-xs font-bold font-mono">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
            <div className="flex flex-wrap items-center gap-1.5 bg-stone-900/80 p-1 rounded-xl border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-[#0b1320] font-semibold shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All Publications' : cat}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search title, author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-900/60 border border-white/10 rounded-lg text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => {
            const inCart = cart.find((c) => c.item.id === book.id);

            return (
              <SpotlightCard
                key={book.id}
                spotlightColor="rgba(245, 158, 11, 0.15)"
                borderColor="rgba(245, 158, 11, 0.35)"
                className="flex flex-col justify-between h-full p-6"
              >
                <div>
                  {/* Book Cover */}
                  <div className="relative h-64 w-full rounded-lg overflow-hidden bg-stone-900 border border-white/10 mb-5">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0b1320]/80 rounded text-[10px] text-amber-400 font-mono">
                      {book.category}
                    </div>
                  </div>

                  <span className="text-[11px] text-stone-400 block mb-1">
                    {book.author}
                  </span>

                  <h3 className="text-lg font-serif text-white font-medium mb-1 leading-snug">
                    {book.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                    {book.subtitle}
                  </p>

                  <div className="text-[11px] font-mono text-stone-500 mb-4">
                    {book.isbn} · {book.pages} pp.
                  </div>
                </div>

                {/* Price & Add to Cart */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="text-lg font-serif font-bold text-white">
                    ${book.price.toFixed(2)}
                  </div>

                  <button
                    onClick={() => addToCart(book)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    {inCart ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added ({inCart.count})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Cart Drawer */}
        {cartOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
            onClick={() => setCartOpen(false)}
          >
            <div
              className="bg-[#0b1320] border-l border-white/10 w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-serif text-white">Your Book Cart</h3>
                  </div>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-stone-400 hover:text-white text-xs uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-20 text-stone-400 text-xs">
                    Your cart is currently empty.
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                    {cart.map(({ item, count }) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-stone-900/60 border border-white/5 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="min-w-0">
                          <h4 className="font-serif text-white font-medium truncate">
                            {item.title}
                          </h4>
                          <span className="text-stone-400 text-[11px]">
                            Qty: {count} × ${item.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-amber-400 font-bold">
                            ${(item.price * count).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-500 hover:text-rose-400 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-400">Subtotal:</span>
                    <span className="font-serif text-xl font-bold text-white">
                      ${totalCartAmount.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      alert('Order request registered. SIT Institutional Distribution will contact you with invoice and shipping arrangements.');
                      setCart([]);
                      setCartOpen(false);
                    }}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
                  >
                    Submit Order Request
                  </button>
                  <p className="text-[10px] text-center text-stone-500">
                    Institutional discounts available for orders of 20+ copies per school.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookShopPage;
