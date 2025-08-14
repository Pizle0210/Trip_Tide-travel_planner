import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden">
            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 break-words">
                        Your Next Adventure
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Starts Here
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
                        Discover amazing destinations, plan unforgettable trips, and create memories that last a lifetime with TripTide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                            Start Planning
                        </button>
                        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium">
                            Explore Destinations
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-bold text-xl">🗺️</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Planning</h3>
                        <p className="text-gray-600">AI-powered trip planning that adapts to your preferences and budget.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-bold text-xl">👥</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Travel</h3>
                        <p className="text-gray-600">Coordinate with friends and family to plan the perfect group adventure.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-bold text-xl">📱</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Ready</h3>
                        <p className="text-gray-600">Access your itineraries anywhere, anytime with our mobile-first design.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
