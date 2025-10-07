import React from "react";
import { FaBuilding, FaBoxOpen, FaPeopleCarry, FaTruckMoving, FaCouch } from "react-icons/fa";

const OurOfficeMovingServices = () => {
  const bgColor = "#1A3C27";        // 🌿 Deep Forest Green
  const accentColor = "#27AE60";    // 💚 Vibrant Green
  const secondaryColor = "#2ECC71"; // 🟢 Fresh Green (hover)
  const contrastColor = "#F39C12";  // 🟠 Contrast Orange
  const textColor = "#ECF0F1";      // ⚪ Light Gray
  const borderColor = "#2D5E3F";    // 📗 Medium Green Border

  const services = [
    {
      icon: <FaBuilding />,
      title: "Corporate Relocation",
      desc: "We specialize in seamless corporate office moves — ensuring minimal downtime and safe transfer of equipment and documents.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Packing & Unpacking",
      desc: "Our professional team packs, labels, and unpacks your items with utmost care to keep everything organized and safe.",
    },
    {
      icon: <FaPeopleCarry />,
      title: "Furniture Disassembly",
      desc: "From cubicles to conference tables, we disassemble, move, and reassemble office furniture efficiently and safely.",
    },
    {
      icon: <FaTruckMoving />,
      title: "Secure Transportation",
      desc: "Our fleet of specialized moving trucks ensures secure and timely relocation of your office goods anywhere.",
    },
   
  ];

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: contrastColor,
            fontWeight: "bold",
          }}
        >
          Our Office Moving Services
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: textColor,
            marginBottom: "50px",
            opacity: 0.9,
          }}
        >
          Professional. Reliable. Eco-friendly. <br />
          Experience smooth and stress-free business relocations with WeMovers.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1F4B32",
                border: `1px solid ${borderColor}`,
                borderRadius: "16px",
                padding: "30px 20px",
                transition: "transform 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = accentColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1F4B32")
              }
            >
              <div
                style={{
                  fontSize: "2.8rem",
                  color: contrastColor,
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: textColor,
                  marginBottom: "12px",
                  fontWeight: "600",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#dfe6e9",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          style={{
            marginTop: "60px",
            backgroundColor: contrastColor,
            color: bgColor,
            padding: "14px 35px",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = secondaryColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = contrastColor)
          }
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default OurOfficeMovingServices;
