import React from "react";
import safeImg1 from "../assets/img/safe1.webp"; // Replace with your actual image paths
import safeImg2 from "../assets/img/safe2.jpg";
import { Link } from "react-router-dom";


const SafePackingMoving = () => {
  const bgColor = "#1A3C27";        // 🌿 Deep Forest Green
  const accentColor = "#27AE60";    // 💚 Vibrant Green
  const secondaryColor = "#2ECC71"; // 🟢 Fresh Green (hover)
  const contrastColor = "#F39C12";  // 🟠 Contrast Orange
  const textColor = "#ECF0F1";      // ⚪ Light Gray
  const borderColor = "#2D5E3F";    // 📗 Medium Green Border

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {/* Left Image Section */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={safeImg1}
          alt="Safe Packing"
          style={{
            width: "90%",
            borderRadius: "16px",
            border: `3px solid ${borderColor}`,
            boxShadow: `0 0 25px rgba(39, 174, 96, 0.4)`,
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <img
          src={safeImg2}
          alt="Moving Truck"
          style={{
            width: "55%",
            position: "absolute",
            bottom: "-40px",
            right: "-30px",
            borderRadius: "12px",
            border: `2px solid ${contrastColor}`,
            boxShadow: `0 0 20px rgba(243, 156, 18, 0.5)`,
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Right Text Section */}
      <div
        style={{
          flex: "1 1 500px",
          textAlign: "left",
          maxWidth: "550px",
        }}
      >
        <h2
          style={{
            color: contrastColor,
            fontSize: "2.3rem",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
         Skilled professionals are obliged to secure mobility
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "20px",
            color: textColor,
            opacity: 0.95,
            textAlign:"justify"
          }}
        >
      At <a href="https://www.wemovers.ae/services/office-relocation\" class="clickable-link\" target="_blank\">Office Movers</a> in Abu Dhabi, our experienced team handles each move with precision and care. We specialize in secure packaging, even loading, and safe delivery in the UAE-something that does your job worry-free from start to finish.

        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: textColor,
            opacity: 0.9,
            textAlign:"justify"
          }}
        >
         At Office Movers, we believe that <a href="https://www.wemovers.ae/blog\" class="clickable-link\" target="_blank\">moving</a> should be a seamless and positive experience. We treat your office furniture as our own - and ensure that every single feature is handled with care, precision, and professionalism
        </p>
 <div style={{ textAlign: "center", marginTop: "40px" }}>
  <Link to="https://www.wemovers.ae" style={{ textDecoration: "none" }}>
    <button
      style={{
        backgroundColor: contrastColor,
        color: bgColor,
        padding: "14px 36px",
        border: "none",
        borderRadius: "10px",
        fontSize: "1.1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = secondaryColor;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = contrastColor;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      Learn More
    </button>
  </Link>
</div>


      </div>
    </section>
  );
};

export default SafePackingMoving;
