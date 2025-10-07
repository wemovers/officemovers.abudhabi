import React from "react";
import { FaHandshake, FaUsers, FaShieldAlt, FaGlobe } from "react-icons/fa";

const TrustBrandConnection = () => {
  const bgColor = '#1A3C27';        // 🌿 Deep Forest Green
  const accentColor = '#27AE60';    // 💚 Vibrant Green
  const secondaryColor = '#2ECC71'; // 🟢 Fresh Green (hover)
  const contrastColor = '#F39C12';  // 🟠 Contrast Orange
  const textColor = '#ECF0F1';      // ⚪ Light Gray
  const borderColor = '#2D5E3F';    // 📗 Medium Green Border

  const trustData = [
    {
      icon: <FaHandshake size={40} />,
      title: "Trusted Partnerships",
      desc: "We build long-term partnerships based on transparency, integrity, and commitment.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Thousands of Happy Clients",
      desc: "Our customers trust us to deliver quality service and consistent support every time.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Reliable & Secure",
      desc: "We ensure safety, security, and accountability in every project we handle.",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Reach",
      desc: "Our worldwide network connects businesses and clients with seamless solutions.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* 🌟 Section Header */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: contrastColor,
            marginBottom: "20px",
          }}
        >
          Why Brands Trust Us
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto 60px",
            color: textColor,
            opacity: "0.9",
          }}
        >
          We create strong brand connections by delivering quality, building trust,
          and going beyond expectations — every single time.
        </p>

        {/* 💚 Trust Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {trustData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1E4A33",
                border: `1px solid ${borderColor}`,
                borderRadius: "16px",
                padding: "40px 25px",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
              className="hover:scale-105 hover:shadow-lg"
            >
              <div
                style={{
                  color: accentColor,
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#dfe6e9",
                  opacity: "0.85",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBrandConnection;
