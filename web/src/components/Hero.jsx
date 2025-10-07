import React, { useState, useEffect } from 'react';
import { Play, Ship, Shield, Clock, DollarSign } from 'lucide-react';

const Hero = () => {
  const primary = "#1A3C27";
  const hover = "#F39C12";
  const active = "#2ECC71";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Ship, text: "Secure Shipment" },
    { icon: Shield, text: "Customs Clearance" },
    { icon: Clock, text: "Timely Delivery" },
    { icon: DollarSign, text: "Affordable Rates" }
  ];

  return (
    <main style={{ 
      position: "relative", 
      width: "100%", 
      minHeight: "100vh", 
      overflow: "hidden",
      background: "linear-gradient(135deg, #1A3C27 0%, #27AE60 50%, #1A3C27 100%)"
    }}>
      {/* Animated Geometric Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.1,
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3})`,
              borderRadius: Math.random() > 0.5 ? "50%" : "8px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <section
        id="hero"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "60px 20px",
          textAlign: "center",
          color: "#fff"
        }}
      >
        {/* Main Heading with Animation */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
          marginBottom: "40px"
        }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 800,
              background: "linear-gradient(45deg, #6B9A6E, #FECC6A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
              lineHeight: 1.1
            }}
          >
            Office Movers
          </h1>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#fff",
              marginBottom: "30px"
            }}
          >
            in Abu Dhabi
          </h2>
        </div>

        {/* Features Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto 50px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out 0.3s"
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "25px 20px",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <feature.icon 
                size={40} 
                color={primary}
                style={{ marginBottom: "15px" }}
              />
              <p style={{ 
                color: "#fff", 
                fontSize: "1rem",
                fontWeight: 500,
                margin: 0
              }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "800px",
            margin: "0 auto 50px",
            color: "#f5f5f5",
            lineHeight: 1.7,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.6s",
            textAlign:"justify"
          }}
        >
          Move your household items accurately and affordably with our dependable sea freight services in Dubai. We handle shipment, customs clearance, paperwork, and packing with care. Whether you're moving locally or internationally, our expert team ensures smooth and efficient cargo delivery.
        </p>
{/* CTA Button and Play Button */}
<div style={{
  display: "flex",
  gap: "30px",
  alignItems: "center",
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(20px)",
  transition: "all 0.8s ease-out 0.9s"
}}>
  {/* CTA Button */}
  <a
    href="https://www.wemovers.ae/contact"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: primary,
      color: "#fff",
      textDecoration: "none",
      border: "none",
      padding: "18px 40px",
      fontSize: "1.1rem",
      fontWeight: 600,
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: `0 4px 20px ${primary}40`,
      display: "inline-block"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = hover;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 6px 25px ${hover}60`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = primary;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = `0 4px 20px ${primary}40`;
    }}
    onMouseDown={(e) => {
      e.currentTarget.style.background = active;
    }}
  >
    Get Free Quote
  </a>

  {/* Play Button */}
  <a
    href="https://www.youtube.com/@wemoversuae"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#fff",
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: 500,
      padding: "15px 25px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "50px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: primary,
        transition: "all 0.3s ease"
      }}
    >
      <Play size={20} fill="#fff" color="#fff" />
    </div>
    Watch Demo
  </a>
</div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
        }
      `}</style>
    </main>
  );
};

export default Hero;