import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWarehouse, FaArrowRight, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const ReachOutToUs = () => {
  const bgColor = '#1A3C27';        // 🌿 Deep Forest Green
  const accentColor = '#27AE60';    // 💚 Vibrant Green
  const secondaryColor = '#2ECC71'; // 🟢 Fresh Green (hover)
  const contrastColor = '#F39C12';  // 🟠 Contrast Orange
  const textColor = '#ECF0F1';      // ⚪ Light Gray
  const borderColor = '#2D5E3F';    // 📗 Medium Green Border

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
      }}
      id="reach-out-to-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* 📨 Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: contrastColor,
            marginBottom: "20px",
          }}
        >
          Reach Out To Us
        </motion.h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto 50px",
            opacity: "0.9",
          }}
        >
          We’re here to assist you with all your moving and relocation needs. Contact us today for a consultation or more details about our services.
        </p>

        {/* 🏢 Contact Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {/* 📍 Head Office */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#1E4A33",
              border: `1px solid ${borderColor}`,
              borderRadius: "16px",
              padding: "35px 25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <FaMapMarkerAlt size={38} color={accentColor} style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>Head Office</h3>
            <p style={{ fontSize: "1rem", opacity: "0.85", lineHeight: "1.6" }}>
              Mussaffah M-33<br />
              P.O. Box: 9809<br />
              Store No 2
            </p>
          </motion.div>

          {/* 🏭 Warehouse */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#1E4A33",
              border: `1px solid ${borderColor}`,
              borderRadius: "16px",
              padding: "35px 25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <FaWarehouse size={38} color={accentColor} style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>Warehouse</h3>
            <p style={{ fontSize: "1rem", opacity: "0.85", lineHeight: "1.6" }}>
              Mussaffah M-33<br />
              Store No 3
            </p>
          </motion.div>

          {/* 📞 Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#1E4A33",
              border: `1px solid ${borderColor}`,
              borderRadius: "16px",
              padding: "35px 25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <FaPhoneAlt size={38} color={accentColor} style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>Contact</h3>
            <p style={{ fontSize: "1rem", opacity: "0.85", lineHeight: "1.6" }}>
              Tel: +971-50 935 9181<br />
              +971 50 303 1084<br />
              +971-2 558 5181
            </p>
            <p style={{ fontSize: "1rem", opacity: "0.85", marginTop: "10px" }}>
              Web: <a href="https://www.wemovers.ae" target="_blank" rel="noopener noreferrer" style={{ color: secondaryColor, textDecoration: "none" }}>wemovers.ae</a><br />
              Email: <a href="mailto:info@wemovers.ae" style={{ color: secondaryColor, textDecoration: "none" }}>info@wemovers.ae</a>
            </p>
          </motion.div>
        </div>

        {/* 🌐 CTA Button */}
        <motion.a
          href="https://www.wemovers.ae/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: accentColor,
            color: "#fff",
            padding: "14px 32px",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderRadius: "30px",
            textDecoration: "none",
            transition: "0.3s",
          }}
          className="hover:bg-green-500"
        >
          Contact Us Now <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default ReachOutToUs;
