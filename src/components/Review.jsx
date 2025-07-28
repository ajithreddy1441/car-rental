import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function ReviewStats() {
  const [animatedValues, setAnimatedValues] = useState({
    cars: 0,
    clients: 0,
    partnerships: 0,
    years: 0,
    rating: 0
  });

  const finalValues = {
    cars: 150,
    clients: 8000,
    partnerships: 200,
    years: 10,
    rating: 4.9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key];
      const increment = finalValue / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        const currentValue = Math.min(increment * currentStep, finalValue);
        
        setAnimatedValues(prev => ({
          ...prev,
          [key]: key === 'rating' ? Number(currentValue.toFixed(1)) : Math.floor(currentValue)
        }));

        if (currentStep >= steps) {
          clearInterval(intervals.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      number: `${animatedValues.cars}+`,
      title: 'Luxury Cars in Our Fleet',
      description: 'Premium vehicles for every occasion',
      highlight: false
    },
    {
      number: `${animatedValues.clients}+`,
      title: 'Satisfied Clients Worldwide',
      description: 'Trust built through excellence',
      highlight: false
    },
    {
      number: `${animatedValues.partnerships}+`,
      title: 'Successful Corporate Partnerships',
      description: 'Professional service delivery',
      highlight: false
    },
    {
      number: `${animatedValues.years}+`,
      title: 'Years',
      subtitle: 'Providing Premium Transportation',
      description: 'Experience you can trust',
      highlight: false
    },
    {
      number: animatedValues.rating.toString(),
      title: 'Customer Rating',
      description: 'Consistently excellent service',
      highlight: false,
      showStar: true
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#25344b' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Step Into the World of </span>
            <span style={{ color: '#f9dd17' }}>Luxury</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience trust, most comforting service comfort over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-600/30 bg-white/5 transition-all duration-500 hover:scale-105"
            >
              {/* Star for rating */}
              {stat.showStar && (
                <div className="mb-3 flex justify-center">
                  <Star 
                    className="w-8 h-8 fill-current" 
                    style={{ color: '#f9dd17' }}
                  />
                </div>
              )}

              {/* Number */}
              <div className="mb-4">
                <span 
                  className="text-5xl md:text-6xl font-bold"
                  style={{ color: '#f9dd17' }}
                >
                  {stat.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.title}
              </h3>

              {/* Subtitle (for Years card) */}
              {stat.subtitle && (
                <h4 className="text-lg font-semibold text-white mb-3">
                  {stat.subtitle}
                </h4>
              )}

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 mx-auto w-12 h-0.5" style={{ backgroundColor: '#f9dd17' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}