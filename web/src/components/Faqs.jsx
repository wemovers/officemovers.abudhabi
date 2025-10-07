import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const bgColor = "#1A3C27";        // 🌿 Deep Forest Green
  const accentColor = "#27AE60";    // 💚 Vibrant Green
  const secondaryColor = "#2ECC71"; // 🟢 Fresh Green (hover)
  const contrastColor = "#F39C12";  // 🟠 Contrast Orange
  const textColor = "#ECF0F1";      // ⚪ Light Gray
  const borderColor = "#2D5E3F";    // 📗 Medium Green Border

  const faqs = [
    {
      question: "How do I book a move with WeMovers?",
      answer:
        "Booking with WeMovers is easy! Simply visit our booking page, choose your moving service type, and fill out the required details. Our team will confirm your booking shortly.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes, we provide high-quality, eco-friendly packing materials to ensure the safety of your belongings during transit. You can also request customized packing options.",
    },
    {
      question: "Can I track my moving vehicle?",
      answer:
        "Absolutely! We offer real-time GPS tracking for your moving vehicle so you can monitor your items every step of the way.",
    },
    {
      question: "Are my items insured during the move?",
      answer:
        "Yes, WeMovers provides full insurance coverage options to protect your items against damage or loss during relocation.",
    },
    {
      question: "Do you handle office and commercial relocations?",
      answer:
        "We specialize in both residential and commercial relocations. Our professional team ensures smooth, organized office moves with minimal downtime.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            color: contrastColor,
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "50px",
            color: textColor,
            opacity: 0.9,
          }}
        >
          Everything you need to know before moving with{" "}
          <b style={{ color: secondaryColor }}>WeMovers</b>.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1F4B32",
              border: `1px solid ${borderColor}`,
              borderRadius: "12px",
              marginBottom: "18px",
              textAlign: "left",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow:
                openIndex === index
                  ? `0 0 20px rgba(243, 156, 18, 0.4)`
                  : "none",
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                padding: "18px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor:
                  openIndex === index ? accentColor : "#1F4B32",
                color: openIndex === index ? bgColor : textColor,
                transition: "background-color 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </div>

            {openIndex === index && (
              <div
                style={{
                  backgroundColor: "#204F35",
                  padding: "18px 25px",
                  borderTop: `1px solid ${borderColor}`,
                  color: textColor,
                  fontSize: "1rem",
                  lineHeight: "1.7",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
