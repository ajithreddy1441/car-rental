import React, { useState } from 'react';
import { Calendar, MapPin, Search, Car, Users, Plane, Heart } from 'lucide-react';

export default function LuxuryCarHero() {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#04213c' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/hero-limousine.jpg"
          alt="Luxury Limousine"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-[#04213c]/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen ml-10 mr-25">
        {/* Left Content */}
        <div className="flex-1 flex items-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Your </span>
              <span style={{ color: '#f9dd17' }}>Ultimate</span>
              <br />
              <span style={{ color: '#f9dd17' }}>Luxury</span>
              <br />
              <span className="text-white">Drive Awaits</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Rent the world's #1 most cars and modern luxury cars here.<br />
              Experience unmatched comfort and style for your special moments.
            </p>

            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-12"
              style={{ backgroundColor: '#f9dd17', color: '#04213c' }}
            >
              Explore All Cars
            </button>

            {/* Popular Searches */}
            <div>
              <p className="text-gray-400 mb-4 text-lg">Popular Searches:</p>
              <div className="flex flex-wrap gap-3">
                {['Premium Sedans', 'Party Buses', 'Airport Transfers', 'Wedding Cars'].map((item) => (
                  <button
                    key={item}
                    className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Booking Form */}
        <div className="w-full lg:w-96 p-8 flex items-center">
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f9dd17' }}></div>
              <h2 className="text-2xl font-bold text-white">Book Your Ride</h2>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: '#f9dd17' }} />
                  <label className="text-white font-medium">Destination</label>
                </div>
                <input
                  type="text"
                  placeholder="City or Airport"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              {/* Pick Up Date */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5" style={{ color: '#f9dd17' }} />
                  <label className="text-white font-medium">Pick Up Date</label>
                </div>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              {/* Return Date */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5" style={{ color: '#f9dd17' }} />
                  <label className="text-white font-medium">Return Date</label>
                </div>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              {/* Search Button */}
              <button 
                className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#f9dd17', color: '#04213c' }}
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}