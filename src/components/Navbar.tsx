'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Menu, X, MapPin, Calendar, Users, Settings, User } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm w-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
                            <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            TripTide
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            href="/destinations" 
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                            <MapPin className="h-4 w-4" />
                            <span>Destinations</span>
                        </Link>
                        <Link 
                            href="/trips" 
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                            <Calendar className="h-4 w-4" />
                            <span>My Trips</span>
                        </Link>
                        <Link 
                            href="/groups" 
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                            <Users className="h-4 w-4" />
                            <span>Groups</span>
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link 
                            href="/profile" 
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            <User className="h-4 w-4" />
                            <span>Profile</span>
                        </Link>
                        <Link 
                            href="/settings" 
                            className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                        >
                            <Settings className="h-4 w-4" />
                        </Link>
                        <Link 
                            href="/login" 
                            className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/signup" 
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                href="/destinations" 
                                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MapPin className="h-4 w-4" />
                                <span>Destinations</span>
                            </Link>
                            <Link 
                                href="/trips" 
                                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Calendar className="h-4 w-4" />
                                <span>My Trips</span>
                            </Link>
                            <Link 
                                href="/groups" 
                                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="h-4 w-4" />
                                <span>Groups</span>
                            </Link>
                            <Link 
                                href="/profile" 
                                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User className="h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                            <Link 
                                href="/settings" 
                                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                            <div className="pt-2 border-t border-gray-200/50 space-y-2">
                                <Link 
                                    href="/login" 
                                    className="block px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link 
                                    href="/signup" 
                                    className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}