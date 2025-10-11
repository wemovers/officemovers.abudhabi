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
      title: "On-time delivery",
      desc: "We value your time and business plan. Our employees stick to a strict timeline to ensure that each office migration is completed immediately and with as little disadvantage for your business as possible",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Quality",
      desc: "High-quality packaging with careful handling ",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Commercial warranty",
      desc: "Professional service guaranteed every step of the road ",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "UAE broad service",
      desc: "Offer service to all Emirates of equal quality",
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
            textAlign:"justify",
          }}
        >
          Leading brands have come to trust WeMovers because of our dedication to accuracy, dependability, and client satisfaction. Each step is carefully performed to guarantee topicality and safety. We are the preferred choice for all Abu Dhabi companies because of our skilled workforce, top modern machines, and open process.
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
                  textAlign:"justify",
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
