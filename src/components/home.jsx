import React, { useState } from 'react';
import { 
  Heart, 
  Eye, 
  ShoppingBag, 
  Sparkles,
  Sliders,
  X,
  MapPin,
  Mail,
  Phone,
  MessageCircleQuestion,
  MessageCircle,
  Grid,
  ChevronDown,
  Loader2
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack Luxe',
    category: 'men',
    tag: 'Bestseller',
    price: '$256',
    description: 'Get the full lineup of our premium Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Eight luxury shirts arranged neatly on a dark tabletop.',
  },
  {
    id: 2,
    name: 'Executive Minimalist Tee',
    category: 'men',
    tag: 'Signature',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same ultra-soft black t-shirt every single day.',
    options: 'Jet Black',
    imageSrc: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Front of plain black premium t-shirt.',
  },
  {
    id: 3,
    name: 'Kinda White Organic Tee',
    category: 'women',
    tag: 'New Season',
    price: '$32',
    description: "Crafted from 100% organic cotton with a refined warm white tone of 5000 Kelvin.",
    options: 'Warm White',
    imageSrc: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Model wearing plain white organic t-shirt.',
  },
  {
    id: 4,
    name: 'Stone Charcoal Tee',
    category: 'women',
    tag: 'Trending',
    price: '$32',
    description: 'White tees stain easily, and black tees fade. This sophisticated gray stays pristine for a long time.',
    options: 'Charcoal Gray',
    imageSrc: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Front of plain dark gray luxury t-shirt.',
  },
  {
    id: 5,
    name: 'Autumn Kids Earth-Tone 3-Pack',
    category: 'kids',
    tag: 'Exclusive',
    price: '$96',
    description: 'Who needs stark minimalism when little ones can have rich earth tones? Embrace the season in comfort.',
    options: 'Earth Tones',
    imageSrc: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kids apparel in mustard, dark gray, and olive.',
  },
  {
    id: 6,
    name: 'Silk Blend Evening Tee',
    category: 'women',
    tag: 'Limited',
    price: '$120',
    description: 'An elevated take on the casual staple featuring a subtle sheen and ultra-drape organic silk blend.',
    options: 'Pearl Ivory',
    imageSrc: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Silk blend evening wear tee.',
  },
  {
    id: 7,
    name: 'Heavyweight Ribbed Crew',
    category: 'men',
    tag: 'Core',
    price: '$45',
    description: 'Structured boxy fit with a thick ribbed collar that holds its shape wash after wash.',
    options: 'Olive Drab',
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Heavyweight crewneck shirt.',
  },
  {
    id: 8,
    name: 'Junior Cotton Pocket Tee',
    category: 'kids',
    tag: 'Play',
    price: '$28',
    description: 'Durable everyday organic tee designed for active play with reinforced double-stitch hems.',
    options: 'Sunburst Yellow',
    imageSrc: 'https://images.unsplash.com/photo-1503944583220-7eeec390d6af?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kids yellow cotton t-shirt.',
  },
  {
    id: 9,
    name: 'Monochrome Linen Short Sleeve',
    category: 'men',
    tag: 'Summer',
    price: '$68',
    description: 'Breathable European linen pre-washed for ultimate cloud-like softness.',
    options: 'Sand Beige',
    imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Linen casual shirt.',
  },
  {
    id: 10,
    name: 'Ribbed Knit Summer Dress',
    category: 'women',
    tag: 'Hot Seller',
    price: '$85',
    description: 'Elegant figure-hugging ribbed knit silhouette crafted with sustainable yarn.',
    options: 'Terracotta',
    imageSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Model in stylish ribbed dress.',
  },
  {
    id: 11,
    name: 'Kids Playtime Denim Jacket',
    category: 'kids',
    tag: 'New',
    price: '$52',
    description: 'Soft stretch cotton denim built to withstand endless playground adventures.',
    options: 'Classic Indigo',
    imageSrc: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Child wearing denim jacket.',
  },
  {
    id: 12,
    name: 'Signature Cashmere Knit Crew',
    category: 'men',
    tag: 'Luxury',
    price: '$180',
    description: 'Ultra-lightweight 100% Mongolian cashmere knit designed for all-season layering.',
    options: 'Navy Blue',
    imageSrc: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Man in navy blue luxury sweater.',
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [gridCols, setGridCols] = useState(4); // Default to 4 columns as requested
  const [visibleCount, setVisibleCount] = useState(8); // Pagination state
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [notification, setNotification] = useState('');
  const [cartCount, setCartCount] = useState(2);

  // Filtering products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  // Display subset based on visibleCount
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
      showToast('Removed from wishlist');
    } else {
      setWishlist([...wishlist, id]);
      showToast('Added to luxury wishlist ✨');
    }
  };

  const handleQuickShop = (product, e) => {
    if (e) e.stopPropagation();
    setCartCount(prev => prev + 1);
    showToast(`Added "${product.name}" to shopping bag! 🛍️`);
  };

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setIsLoadingMore(false);
    }, 600);
  };

  // Helper class for grid column layout selection
  const getGridClass = () => {
    switch (gridCols) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-rose-100 selection:text-rose-900 flex flex-col justify-between">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-neutral-900 text-white px-5 py-3 rounded-full shadow-2xl text-xs font-medium animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header Bar */}


      {/* Main Catalog View */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full flex-grow">
        
        {/* Category Tabs & Grid Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-neutral-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Collections' },
              { id: 'men', label: "Men's Atelier" },
              { id: 'women', label: "Women's Couture" },
              { id: 'kids', label: "Kids Couture" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setVisibleCount(8); // reset pagination when category changes
                }}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? 'bg-neutral-900 text-white shadow-md scale-105'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid View Selector */}
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-neutral-200 shadow-xs self-end md:self-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 pl-2 hidden sm:inline">
              Layout Options
            </span>
            <div className="flex items-center gap-1">
              {[
                { cols: 2, label: '2 Columns', icon: '||' },
                { cols: 3, label: '3 Columns', icon: '|||' },
                { cols: 4, label: '4 Columns', icon: '||||' },
              ].map((item) => (
                <button
                  key={item.cols}
                  onClick={() => setGridCols(item.cols)}
                  title={item.label}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    gridCols === item.cols
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {item.cols} Grid
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 grid ${getGridClass()} gap-5`}>
          {displayedProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                onClick={() => setQuickViewProduct(product)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Badge Tag */}
                  <span className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md text-neutral-900 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {product.tag}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      isWishlisted 
                        ? 'bg-rose-500 text-white shadow-md' 
                        : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-rose-500'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-x-3 bottom-3 flex flex-col gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
                      className="w-full bg-white/95 backdrop-blur-md text-neutral-900 py-2 px-3 rounded-xl text-[11px] font-semibold tracking-wider uppercase hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                    <button 
                      onClick={(e) => handleQuickShop(product, e)}
                      className="w-full bg-neutral-900/95 backdrop-blur-md text-white py-2 px-3 rounded-xl text-[11px] font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Quick Shop
                    </button>
                  </div>
                </div>

                {/* Compact Product Details */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-xs font-semibold text-neutral-900 tracking-tight group-hover:text-amber-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="text-xs font-bold text-neutral-900">{product.price}</span>
                  </div>
                  
                  <p className="mt-1 text-[11px] text-neutral-500 line-clamp-1 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-2 text-[10px] text-neutral-400 uppercase tracking-widest font-medium">
                    {product.options}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <div className="w-16 h-16 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-medium text-neutral-900">No pieces found in this collection</h3>
            <p className="text-xs text-neutral-500 mt-1">Please try exploring another category tab above.</p>
          </div>
        )}

        {visibleCount < filteredProducts.length && (
          <div className="mt-12 mb-6 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-300 font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Loading More Pieces...</span>
                </>
              ) : (
                <>
                  <span>View More</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-neutral-400 mt-2">
              Showing {displayedProducts.length} of {filteredProducts.length} products
            </p>
          </div>
        )}
      </main>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-neutral-800" />
            </button>

            <div className="md:w-1/2 bg-neutral-100 relative aspect-square md:aspect-auto">
              <img 
                src={quickViewProduct.imageSrc} 
                alt={quickViewProduct.imageAlt}
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-700">
                  {quickViewProduct.tag} &bull; {quickViewProduct.category}
                </span>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-1">
                  {quickViewProduct.name}
                </h2>
                <div className="text-xl font-bold text-neutral-900 mt-2">
                  {quickViewProduct.price}
                </div>
                <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
                  {quickViewProduct.description}
                </p>
                <div className="mt-6">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400 block mb-2">Available Options</span>
                  <span className="inline-block bg-neutral-100 text-neutral-800 text-xs font-medium px-3 py-1.5 rounded-lg">
                    {quickViewProduct.options}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  onClick={(e) => {
                    handleQuickShop(quickViewProduct, e);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-6 rounded-xl font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-black text-white pt-12 pb-6 px-4 sm:px-8 lg:px-12 border-t border-neutral-800 text-xs relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Get in touch */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wide text-white mb-4">Get in touch</h3>
            <div className="flex items-start gap-3 text-neutral-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <span>youhanabad lahore .</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href="mailto:info@kidscouture.pk" className="hover:text-white transition-colors">info@zevenbyzain.pk</a>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href="tel:+923334488440" className="hover:text-white transition-colors">+923732948</a>
            </div>
            <div className="pt-4 flex items-center gap-2 text-neutral-300 cursor-pointer hover:text-white transition-colors">
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Need help?</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide text-white mb-4">Categories</h3>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ALL PRODUCTS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BOYS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Girls</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Summer'25</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Winter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide text-white mb-4">Useful links</h3>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Exchange and Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide text-white mb-4">Information</h3>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ'S</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tracking Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guid</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm tracking-wide text-white mb-4">Newsletter Signup</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <form onSubmit={(e) => { e.preventDefault(); showToast('Subscribed successfully!'); }} className="relative flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-black border border-neutral-700 text-white text-xs rounded-full py-2.5 pl-4 pr-28 focus:outline-none focus:border-teal-400 placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="absolute right-1 bg-[#61c9b2] hover:bg-[#4eb39d] text-white font-medium px-4 py-1.5 rounded-full text-xs transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-6 text-center text-neutral-400 text-[11px]">
          Copyright © 2026 <span className="text-teal-400">Kids Couture</span> all rights reserved. Powered by <span className="text-rose-400">KidsCouture</span>
        </div>

        {/* Floating WhatsApp Floating Button */}
        <a
          href="https://wa.me/923334488440"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </footer>

    </div>
  );
}