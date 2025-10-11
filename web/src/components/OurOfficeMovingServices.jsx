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
      icon: <FaBoxOpen />,
      title: "Moving our company to Abu Dhabi has made things easier and less stressful",
      desc: "One of the most difficult changes in life is definitely moving. It can be overwhelming to move, pack, and clean all your assets. We guarantee that our knowledgeable personnel will properly manage and secure your property because we are the best offices in Abu Dhabi. So that you don't have to worry about anything, our team of professionals will ensure that all documents, data, computers, and other equipment are packed correctly.",
    },
    {
      icon: <FaPeopleCarry />,
      title: "We keep information secure",
      desc: "We have moved a lot of business to Dubai and Abu Dhabi over the years. We take security seriously. That is why we have defined security measures for our team of moving and packages in Dubai to help us control all tasks safely. Our movements and packages in Abu Dhabi keep your sensitive information safe. Thus, it is not a concern for you. Whether it is a soft copy or a physical copy, we transmit all kinds of data.",
    },
    {
      icon: <FaTruckMoving />,
      title: "We pack valuable equipment carefully",
      desc: "Moving valuable equipment to another place can be risky and expensive. Being the best offices in Abu Dhabi, we know this very well. That is why our team, with trained professionals, takes care of your assets carefully. Also, offer quality transport services to ensure that nothing is damaged during the move. Our office relocation in Abu Dhabi has worked hard to serve our star's reputation in commercial moving. You can totally trust that we take care of your property. Our office relocation in Abu Dhabi is an expert in packing your valuables, preparing them for transport, and ensuring safe arrival at the destination.",
    },
    {
      icon: <FaCouch />,
      title: "Trust the experience of our office migration in Abu Dhabi",
      desc: "We have transferred companies of all sizes from start-ups to wealth. And with each move, our team of office relocation in Abu Dhabi becomes more creative and more efficient. We know what works and what doesn't. We take into account every step of your business and learn from your experiences. So whether you move the headquarters or prepare for a large-scale office extension, you can be assured that Wemovers will have your back. We also constantly examine ways of commuting more easily, time-saving, and cost-effective. Plus, to minimize shutdowns to focus on the company's core business, or enjoy the place to call home.",
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
          Office Moving Services
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: textColor,
            marginBottom: "50px",
            opacity: 0.9,
          }}
        >
          Professional packing and moving services are offered throughout the United Arab Emirates by Office Furniture Movers.  We promise safe, efficient, and reliable relocation for housing, offices, and businesses.

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
                  textAlign:"justify"
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOfficeMovingServices;
