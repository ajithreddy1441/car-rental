import React from 'react';
import { Star, Users } from 'lucide-react';

const CarCards = () => {
  const vehicles = [
    {
      id: 1,
      category: "Luxury Sedan",
      name: "Mercedes S-Class",
      passengers: 4,
      rating: 4.9,
      price: 120,
      features: ["Premium Interior", "WiFi", "Refreshments"],
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      category: "Executive Sedan",
      name: "BMW 7 Series",
      passengers: 4,
      rating: 4.8,
      price: 110,
      features: ["Business Class", "WiFi", "Privacy"],
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      category: "Special Events",
      name: "Stretch Limousine",
      passengers: 10,
      rating: 5,
      price: 200,
      features: ["Entertainment", "Bar", "LED Lights"],
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      category: "Luxury SUV",
      name: "Cadillac Escalade",
      passengers: 7,
      rating: 4.9,
      price: 150,
      features: ["Spacious", "Premium Sound", "Safety"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop"
    }
  ];

  const categoryColors = {
    "Luxury Sedan": "#f9dd17",
    "Executive Sedan": "#f9dd17", 
    "Special Events": "#f9dd17",
    "Luxury SUV": "#f9dd17"
  };

  return (
    <div style={{ 
      backgroundColor: '#04213c',
      minHeight: '100vh',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#fff',
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em'
          }}>
            Explore Our Exquisite <span style={{ color: '#f9dd17' }}>Fleet</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem',
            color: '#e3e7ee',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Experience our diverse fleet designed to provide unparalleled luxury and
            seamless journeys that redefine your travel experience
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              style={{
                backgroundColor: '#25344b',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(227, 231, 238, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {/* Category Badge and Rating */}
              <div style={{ 
                position: 'relative',
                padding: '20px 20px 10px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    backgroundColor: categoryColors[vehicle.category],
                    color: '#04213c',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {vehicle.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} fill="#f9dd17" color="#f9dd17" />
                    <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                      {vehicle.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Image */}
              <div style={{ 
                height: '200px',
                margin: '0 20px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#25344b'
              }}>
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Vehicle Details */}
              <div style={{ padding: '25px 20px' }}>
                {/* Vehicle Name and Capacity */}
                <div style={{ marginBottom: '15px' }}>
                  <h3 style={{ 
                    color: '#fff',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>
                    {vehicle.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={16} color="#e3e7ee" />
                    <span style={{ color: '#e3e7ee', fontSize: '0.9rem' }}>
                      {vehicle.passengers} passengers
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: 'rgba(227, 231, 238, 0.1)',
                        color: '#e3e7ee',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(227, 231, 238, 0.2)'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ 
                      color: '#f9dd17',
                      fontSize: '1.6rem',
                      fontWeight: '700'
                    }}>
                      ${vehicle.price}/hour
                    </span>
                  </div>
                  <button
                    style={{
                      backgroundColor: '#f9dd17',
                      color: '#04213c',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f5d300';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f9dd17';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Vehicles Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#f9dd17',
              border: '2px solid #f9dd17',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f9dd17';
              e.target.style.color = '#04213c';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#f9dd17';
            }}
          >
            View All Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCards;