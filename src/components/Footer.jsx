import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const companyLinks = [
    { id: 1, label: "About Us", href: "#about" },
    { id: 2, label: "Our Fleet", href: "#fleet" },
    { id: 3, label: "Services", href: "#services" },
    { id: 4, label: "Careers", href: "#careers" }
  ];

  const serviceLinks = [
    { id: 1, label: "Airport Transfers", href: "#airport" },
    { id: 2, label: "Corporate Events", href: "#corporate" },
    { id: 3, label: "Wedding Services", href: "#weddings" },
    { id: 4, label: "City Tours", href: "#tours" }
  ];

  const supportLinks = [
    { id: 1, label: "Contact Us", href: "#contact" },
    { id: 2, label: "FAQ", href: "#faq" },
    { id: 3, label: "Booking Help", href: "#booking" },
    { id: 4, label: "Customer Support", href: "#support" }
  ];

  const socialLinks = [
    { id: 1, icon: Facebook, href: "#facebook", label: "Facebook" },
    { id: 2, icon: Twitter, href: "#twitter", label: "Twitter" },
    { id: 3, icon: Instagram, href: "#instagram", label: "Instagram" },
    { id: 4, icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ];

  const LinkItem = ({ link, category }) => (
    <li style={{ marginBottom: '12px' }}>
      <a
        href={link.href}
        style={{
          color: hoveredLink === `${category}-${link.id}` ? '#f9dd17' : '#e3e7ee',
          textDecoration: 'none',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'block'
        }}
        onMouseEnter={() => setHoveredLink(`${category}-${link.id}`)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {link.label}
      </a>
    </li>
  );

  const SocialIcon = ({ social }) => {
    const IconComponent = social.icon;
    return (
      <a
        href={social.href}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          backgroundColor: hoveredSocial === social.id ? '#f9dd17' : 'transparent',
          border: `2px solid ${hoveredSocial === social.id ? '#f9dd17' : '#e3e7ee'}`,
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setHoveredSocial(social.id)}
        onMouseLeave={() => setHoveredSocial(null)}
        aria-label={social.label}
      >
        <IconComponent
          size={20}
          color={hoveredSocial === social.id ? '#04213c' : '#e3e7ee'}
        />
      </a>
    );
  };

  return (
    <footer
      style={{
        backgroundColor: '#25344b',
        padding: '60px 20px 30px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
            marginBottom: '50px'
          }}
        >
          
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  backgroundColor: '#f9dd17',
                  borderRadius: '12px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px'
                }}
              >
                <span
                  style={{
                    color: '#04213c',
                    fontSize: '1.8rem',
                    fontWeight: 'bold'
                  }}
                >
                  G
                </span>
              </div>
              <h3
                style={{
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  margin: '0'
                }}
              >
                GOZOLT
              </h3>
            </div>

            {/* Company Description */}
            <p
              style={{
                color: '#e3e7ee',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '30px',
                opacity: '0.9'
              }}
            >
              Experience luxury transportation services with our premium fleet and professional chauffeurs. Your comfort and satisfaction are our top priorities.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} color="#f9dd17" />
                <span style={{ color: '#e3e7ee', fontSize: '0.95rem' }}>
                  123 Luxury Ave, Premium City, PC 12345
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#f9dd17" />
                <span style={{ color: '#e3e7ee', fontSize: '0.95rem' }}>
                  +1 (555) 123-4567
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#f9dd17" />
                <span style={{ color: '#e3e7ee', fontSize: '0.95rem' }}>
                  info@limorent.com
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {companyLinks.map((link) => (
                <LinkItem key={link.id} link={link} category="company" />
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {serviceLinks.map((link) => (
                <LinkItem key={link.id} link={link} category="services" />
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {supportLinks.map((link) => (
                <LinkItem key={link.id} link={link} category="support" />
              ))}
            </ul>
          </div>

        </div>

        {/* Social Media Icons */}
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'flex-start'
            }}
          >
            {socialLinks.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div
          style={{
            borderTop: '1px solid rgba(227, 231, 238, 0.2)',
            paddingTop: '30px'
          }}
        >
          {/* Copyright and Legal Links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <p
              style={{
                color: '#e3e7ee',
                fontSize: '0.9rem',
                margin: '0',
                opacity: '0.8'
              }}
            >
              © 2024 Limo Rent. All rights reserved.
            </p>
            
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <a
                href="#privacy"
                style={{
                  color: '#e3e7ee',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#f9dd17'}
                onMouseLeave={(e) => e.target.style.color = '#e3e7ee'}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                style={{
                  color: '#e3e7ee',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#f9dd17'}
                onMouseLeave={(e) => e.target.style.color = '#e3e7ee'}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;