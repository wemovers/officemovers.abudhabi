import React from 'react';
import { FaWhatsapp, FaFacebookF, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const bgColor = '#1A3C27';        // 🌿 Deep Forest Green
  const accentColor = '#27AE60';    // 💚 Vibrant Green
  const secondaryColor = '#2ECC71'; // 🟢 Fresh Green (hover)
  const contrastColor = '#F39C12';  // 🟠 Contrast Orange
  const textColor = '#ECF0F1';      // ⚪ Light Gray
  const borderColor = '#2D5E3F';    // 📗 Medium Green Border

  const linkStyle = {
    color: textColor,
    textDecoration: 'none',
    fontWeight: '500',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s ease',
    fontSize: '0.95rem',
    opacity: '0.9',
  };

  const headingStyle = {
    color: contrastColor, // Using orange for contrast
    fontWeight: '700',
    fontSize: '1.2rem',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const iconStyle = {
    marginRight: '16px',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, color 0.25s ease',
    color: accentColor,
    fontSize: '24px',
  };

  return (
    <footer
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '60px 40px 40px',
        fontFamily: 'sans-serif',
        borderTop: `4px solid ${contrastColor}`,
      }}
    >
      {/* ✅ Main Horizontal Footer Content */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Company Info */}
        <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
          <h4 style={{ ...headingStyle, fontSize: '1.8rem', color: secondaryColor }}>WeMovers</h4>
          <p style={{ lineHeight: '1.6', opacity: '0.9' }}>Mussaffah M-33 P.O. Box: 9809 Store No 2</p>
          <p style={{ opacity: '0.9' }}><strong style={{ color: contrastColor }}>Phone:</strong> +971 50 303 1084</p>
          <p style={{ opacity: '0.9' }}><strong style={{ color: contrastColor }}>Email:</strong> info@wemovers.ae</p>
        </div>

        {/* Useful Links */}
        <div style={{ flex: '1 1 180px', minWidth: '180px' }}>
          <h5 style={headingStyle}>Useful Links</h5>
          {['Mission', 'Service', 'Contact', 'Why Us', 'FAQs'].map((item, idx) => (
            <a
              key={idx}
              href={`/#${item.toLowerCase().replace(' ', '')}`}
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = secondaryColor)}
              onMouseOut={(e) => (e.target.style.color = textColor)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Courier Services */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h5 style={headingStyle}>Courier Services</h5>
          {[
            'Courier Service to UK',
            'Courier Service to Canada',
            'Courier Service to USA',
            'Courier Service to Europe',
            'Courier Service to Australia',
          ].map((text, idx) => (
            <a
              key={idx}
              href={`https://www.wemovers.ae/${text.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = secondaryColor)}
              onMouseOut={(e) => (e.target.style.color = textColor)}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Movers */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h5 style={headingStyle}>Movers</h5>
          {[
            { text: 'Movers in Dubai', url: '/movers-in-dubai' },
            { text: 'Movers in UAE', url: '/movers-in-uae' },
            { text: 'Movers in Abu Dhabi', url: '/movers-in-abudhabi' },
          ].map(({ text, url }, idx) => (
            <a
              key={idx}
              href={`https://www.wemovers.ae${url}`}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = secondaryColor)}
              onMouseOut={(e) => (e.target.style.color = textColor)}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Services */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h5 style={headingStyle}>Services</h5>
          {[
            'Home Relocation',
            'International Relocation',
            'Global Freight',
            'Short-Term Storage',
            'Long-Term Storage',
          ].map((text, idx) => (
            <a
              key={idx}
              href={`https://www.wemovers.ae/services/${text.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = secondaryColor)}
              onMouseOut={(e) => (e.target.style.color = textColor)}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h5 style={headingStyle}>Follow Us</h5>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { icon: <FaWhatsapp />, link: "https://wa.me/971509359181" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/wemoversae" },
              { icon: <FaGoogle />, link: "https://www.wemovers.ae" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/wemoversae" },
              { icon: <FaYoutube />, link: "https://www.youtube.com/@wemoversuae" },
            ].map(({ icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={iconStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = contrastColor;
                  e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = accentColor;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {icon}
            </a>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ borderColor: borderColor, margin: '50px 0 30px' }} />

      {/* ✅ Search By Location */}
      <div>
        <h5 style={{ ...headingStyle, textAlign: 'center', marginBottom: '25px' }}>Search by Location</h5>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            textAlign: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {[
            'saudia-arabia', 'bahrain', 'kuwait', 'oman', 'europe', 'canada',
            'qatar', 'uk', 'usa', 'ireland', 'malaysia', 'australia',
            'india', 'spain', 'newzealand'
          ].map((loc, idx) => (
            <a
              key={idx}
              href={`https://www.wemovers.ae/relocation-to-${loc}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                textDecoration: 'underline',
                fontSize: '0.9rem',
                padding: '4px 0',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                borderRadius: '4px',
                margin: '2px',
              }}
              onMouseOver={(e) => {
                e.target.style.color = contrastColor;
                e.target.style.backgroundColor = 'rgba(243, 156, 18, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = textColor;
                e.target.style.backgroundColor = 'rgba(39, 174, 96, 0.1)';
              }}
            >
              Relocation to {loc.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#BDC3C7',
          paddingTop: '25px',
          marginTop: '40px',
          borderTop: `1px solid ${borderColor}`,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '15px',
          borderRadius: '4px',
        }}
      >
        © {new Date().getFullYear()} WeMovers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;