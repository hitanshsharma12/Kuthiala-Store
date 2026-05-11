"use client";

import Image from "next/image";
import { ShoppingCart, Search, Heart, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Leather Bag",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      category: "Bags",
    },
    {
      id: 2,
      name: "Elegance Watch",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1523170335684-f5b1e3fea29e?w=400&h=400&fit=crop",
      category: "Watches",
    },
    {
      id: 3,
      name: "Classic Sunglasses",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Premium Fragrance",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Fragrances",
    },
    {
      id: 5,
      name: "Designer Wallet",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      category: "Wallets",
    },
    {
      id: 6,
      name: "Luxury Ring",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "Jewelry",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:inline">
                Kuthiala Store
              </span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-accent transition">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                Shop
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                About
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                Contact
              </a>
            </nav>

            {/* Search & Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                <Search size={18} className="text-foreground/50" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-foreground placeholder-foreground/50 w-32"
                />
              </div>

              <button className="p-2 hover:bg-muted rounded-lg transition">
                <Heart size={20} className="text-foreground" />
              </button>

              <button className="p-2 hover:bg-muted rounded-lg transition">
                <User size={20} className="text-foreground" />
              </button>

              <button className="relative p-2 hover:bg-muted rounded-lg transition">
                <ShoppingCart size={20} className="text-foreground" />
                <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition"
              >
                <Menu size={20} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
              <a href="#" className="text-foreground hover:text-accent transition">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                Shop
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                About
              </a>
              <a href="#" className="text-foreground hover:text-accent transition">
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-accent/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Welcome to <span className="text-accent">Kuthiala</span> Store
          </h1>
          <p className="text-lg text-foreground/70 mb-8 text-pretty max-w-2xl mx-auto">
            Discover premium products curated just for you. Experience luxury shopping with
            unbeatable prices and exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Featured Products
            </h2>
            <p className="text-foreground/60 text-lg">
              Handpicked items perfect for any occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-accent">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {product.name}
                  </h3>
                  <p className="text-accent font-bold text-xl mb-4">{product.price}</p>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-accent text-white py-2 rounded-lg hover:bg-accent/90 transition font-medium">
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-foreground/60">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">100% Authentic</h3>
              <p className="text-foreground/60">All products guaranteed genuine</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-foreground/60">Dedicated customer service team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Best Sellers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-accent transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-foreground/60 mb-4 sm:mb-0">
              © 2024 Kuthiala Store. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition">
                Twitter
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition">
                Instagram
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
