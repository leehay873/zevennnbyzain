import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  X, 
  ChevronDown,
  Menu
} from 'lucide-react';

export default function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const marqueeItems = [
    "FREE SHIPPING ON ORDER ABOVE RS 2999",
    "7 DAYS RETURN/EXCHANGE POLICY",
    "FREE SHIPPING ON ORDER ABOVE RS 2999",
    "7 DAYS RETURN/EXCHANGE POLICY",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans w-full overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: 200%;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. TOP ANNOUNCEMENT TICKER BANNER */}
      {isBannerVisible && (
        <div className="relative bg-black text-white text-xs py-2 overflow-hidden border-b border-gray-800 z-50 w-full">
          <div className="flex items-center justify-between w-full px-4">
            <div className="overflow-hidden whitespace-nowrap flex-1 mr-4">
              <div className="animate-marquee-infinite">
                {marqueeItems.concat(marqueeItems).map((text, idx) => (
                  <div key={idx} className="flex items-center mx-4 font-semibold tracking-wide">
                    <span>{text}</span>
                    <span className="mx-6 text-gray-400 font-bold">•</span>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setIsBannerVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-3 text-gray-700">
              <a href="#" className="p-1.5 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="p-1.5 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 text-center md:flex-initial">
              <a href="#" className="inline-block">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-teal-600 font-serif">
                  zevenby<span className="text-pink-500 relative inline-block">zain</span>
                </span>
              </a>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-5 text-gray-800">
              <button className="p-1.5 hover:text-teal-600 transition-colors"><Search className="w-5 h-5" /></button>
              <button className="hidden sm:block p-1.5 hover:text-teal-600 transition-colors"><User className="w-5 h-5" /></button>
              
              <button className="relative p-1.5 hover:text-pink-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>
              </button>

              <button className="relative p-1.5 hover:text-teal-600 transition-colors">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block border-t border-gray-100 bg-white w-full">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center space-x-6 lg:space-x-8 text-md font-bold tracking-wider text-gray-800 py-3">
              <li><a href="#" className="hover:text-teal-600 transition-colors">HOME</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">SUMMER SALE</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">WOMEN</a></li>
              <li className="group relative">
                <a href="#" className="flex items-center hover:text-teal-600 transition-colors">MEN<ChevronDown className="w-3 h-3 ml-1" /></a>
              </li>
              <li className="group relative">
                <a href="#" className="flex items-center hover:text-teal-600 transition-colors">GIRLS (1YR-12YRS)<ChevronDown className="w-3 h-3 ml-1" /></a>
              </li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">BOYS (1YR-12YRS)</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO SECTION - Tightly fitted without excess bottom whitespace */}
      <main className="w-full px-4 pt-4 pb-0">
        <div className="bg-teal-100 rounded-xl p-8 sm:p-10 text-center shadow-inner w-full">
          <h1 className="text-3xl sm:text-5xl font-black text-teal-800 tracking-tight uppercase">
            Summer Clearance Sale
          </h1>
          <p className="mt-2 text-shadow-white font-medium text-sm sm:text-base">
            Home &gt; Summer Clearance Sale
          </p>
        </div>
      </main>
    </div>
  );
}