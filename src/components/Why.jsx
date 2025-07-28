import React from 'react';
import { Shield, Clock, Headphones, MapPin, Briefcase, Calendar } from 'lucide-react';

const Why = () => {
  const whyChooseFeatures = [
    {
      id: 1,
      icon: <Shield size={32} color="#04213c" strokeWidth={2} />,
      title: "World-Class Service",
      description: "Experience premium service with our professional chauffeurs and meticulously maintained fleet."
    },
    {
      id: 2,
      icon: <Clock size={32} color="#04213c" strokeWidth={2} />,
      title: "Punctuality & Reliability",
      description: "We value your time. Our drivers arrive promptly and ensure you reach your destination on schedule."
    },
    {
      id: 3,
      icon: <Headphones size={32} color="#04213c" strokeWidth={2} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with bookings, changes, or any special requirements."
    }
  ];

  const premiumServices = [
    {
      id: 1,
      icon: <MapPin size={32} color="#04213c" strokeWidth={2} />,
      title: "Airport Transfers",
      description: "Comfortable and reliable airport pickup and drop-off services with flight monitoring."
    },
    {
      id: 2,
      icon: <Briefcase size={32} color="#04213c" strokeWidth={2} />,
      title: "Corporate Events",
      description: "Professional transportation solutions for business meetings and corporate events."
    },
    {
      id: 3,
      icon: <Calendar size={32} color="#04213c" strokeWidth={2} />,
      title: "Special Occasions",
      description: "Make your weddings, proms, and celebrations memorable with our luxury vehicles."
    }
  ];

  const FeatureCard = ({ icon, title, description }) => (
    <div
      style={{
        backgroundColor: '#25344b',
        borderRadius: '16px',
        padding: '40px 30px',
        textAlign: 'center',
        border: '1px solid rgba(227, 231, 238, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
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
      {/* Icon Container */}
      <div
        style={{
          backgroundColor: '#f9dd17',
          borderRadius: '16px',
          width: '80px',
          height: '80px',
          margin: '0 auto 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          color: '#fff',
          fontSize: '1.4rem',
          fontWeight: '600',
          margin: '0 0 16px 0',
          lineHeight: '1.3'
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: '#e3e7ee',
          fontSize: '1rem',
          lineHeight: '1.6',
          margin: '0',
          opacity: '0.9'
        }}
      >
        {description}
      </p>

      {/* Subtle background decoration */}
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
        backgroundColor: '#25344b',
        minHeight: '100vh',
        padding: '60px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Why Choose Section */}
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
              Why Choose <span style={{ color: '#f9dd17' }}>Limo Rent</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#e3e7ee',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                opacity: '0.9'
              }}
            >
              We provide exceptional service that exceeds expectations
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            {whyChooseFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Premium Services Section */}
        <div>
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
              Our Premium <span style={{ color: '#f9dd17' }}>Services</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#e3e7ee',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                opacity: '0.9'
              }}
            >
              Comprehensive transportation solutions for every need
            </p>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            {premiumServices.map((service) => (
              <FeatureCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;