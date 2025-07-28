import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Clients = () => {
  const [hoveredBookBtn, setHoveredBookBtn] = useState(false);
  const [hoveredLearnBtn, setHoveredLearnBtn] = useState(false);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Exceptional service! The limousine was pristine and the chauffeur was professional. Made our corporate event memorable.",
      clientName: "Sarah Johnson",
      clientTitle: "CEO, Tech Corp",
      clientImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      rating: 5,
      quote: "Outstanding luxury transportation service. Always reliable, punctual, and the vehicles are absolutely stunning.",
      clientName: "Michael Chen",
      clientTitle: "Wedding Planner",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      rating: 5,
      quote: "Premium experience from start to finish. The attention to detail and customer service exceeded all expectations.",
      clientName: "Emily Davis",
      clientTitle: "Event Coordinator",
      clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const StarRating = ({ rating }) => (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', justifyContent: 'center' }}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          fill={index < rating ? "#f9dd17" : "transparent"}
          color={index < rating ? "#f9dd17" : "#e3e7ee"}
          strokeWidth={2}
        />
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <div
      style={{
        backgroundColor: '#25344b',
        borderRadius: '20px',
        padding: '40px 30px',
        border: '1px solid rgba(227, 231, 238, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Rating Badge */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f9dd17',
          color: '#04213c',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        {testimonial.rating.toFixed(1)}
      </div>

      {/* Stars */}
      <div style={{ marginTop: '40px' }}>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <div style={{ flex: 1, marginBottom: '30px' }}>
        <p
          style={{
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            fontStyle: 'italic',
            margin: '0',
            textAlign: 'center'
          }}
        >
          "{testimonial.quote}"
        </p>
      </div>

      {/* Client Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={testimonial.clientImage}
          alt={testimonial.clientName}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #f9dd17'
          }}
        />
        <div>
          <h4
            style={{
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '600',
              margin: '0 0 4px 0'
            }}
          >
            {testimonial.clientName}
          </h4>
          <p
            style={{
              color: '#e3e7ee',
              fontSize: '0.9rem',
              margin: '0',
              opacity: '0.8'
            }}
          >
            {testimonial.clientTitle}
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, transparent 30%, rgba(249, 221, 23, 0.03) 50%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: '#04213c',
        minHeight: '100vh',
        padding: '60px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Testimonials Section */}
        <div style={{ marginBottom: '60px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '3.2rem',
                fontWeight: 'bold',
                color: '#fff',
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em'
              }}
            >
              What Our Clients <span style={{ color: '#f9dd17' }}>Say</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#e3e7ee',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                opacity: '0.9'
              }}
            >
              Discover why our clients choose us for their luxury transportation needs
            </p>
          </div>

          {/* Testimonials Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              alignItems: 'stretch'
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div style={{ textAlign: 'center' }}>
          {/* CTA Header */}
          <div style={{ marginBottom: '50px' }}>
            <h2
              style={{
                fontSize: '3.2rem',
                fontWeight: 'bold',
                color: '#fff',
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em'
              }}
            >
              Step Into the World of <span style={{ color: '#f9dd17' }}>Luxury?</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#e3e7ee',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                opacity: '0.9'
              }}
            >
              Experience unmatched comfort and professional service. Book your premium ride today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {/* Book Now Button */}
            <button
              style={{
                backgroundColor: hoveredBookBtn ? '#f5d300' : '#f9dd17',
                color: '#04213c',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredBookBtn ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredBookBtn ? '0 8px 25px rgba(249, 221, 23, 0.3)' : 'none'
              }}
              onMouseEnter={() => setHoveredBookBtn(true)}
              onMouseLeave={() => setHoveredBookBtn(false)}
            >
              Book Now
            </button>

            {/* Learn More Button */}
            <button
              style={{
                backgroundColor: hoveredLearnBtn ? '#f9dd17' : 'transparent',
                color: hoveredLearnBtn ? '#04213c' : '#f9dd17',
                border: '2px solid #f9dd17',
                padding: '16px 40px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredLearnBtn ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={() => setHoveredLearnBtn(true)}
              onMouseLeave={() => setHoveredLearnBtn(false)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;