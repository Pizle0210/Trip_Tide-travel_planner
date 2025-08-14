import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white w-full overflow-hidden mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TripTide
                            </h2>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover amazing destinations, plan unforgettable trips, and create memories that last a lifetime with TripTide.
                        </p>
                        <div className="flex space-x-4">
                            <Link 
                                href="#" 
                                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link 
                                href="#" 
                                className="p-2 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors duration-200"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link 
                                href="#" 
                                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors duration-200"
                            >
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link 
                                href="#" 
                                className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors duration-200"
                            >
                                <Youtube className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="/destinations" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/trips" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    My Trips
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/groups" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Travel Groups
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/blog" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Travel Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/guides" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Travel Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="/help" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/privacy" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/terms" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/faq" 
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-400 text-sm">hello@triptide.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    123 Travel Street<br />
                                    Adventure City, AC 12345
                                </span>
                            </div>
                        </div>
                        
                        {/* Newsletter Signup */}
                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-0"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-1 flex-wrap max-w-screen items-center text-gray-400 text-sm">
                            <span>© 2024 TripTide. Made with</span>
                            <Heart className="h-4 w-4 text-red-500" />
                            <span>for travelers worldwide.</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Link 
                                href="/sitemap" 
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                            >
                                Sitemap
                            </Link>
                            <Link 
                                href="/accessibility" 
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                            >
                                Accessibility
                            </Link>
                            <Link 
                                href="/cookies" 
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}