import img1 from '../assets/img/safe2.jpg';
import img2 from '../assets/img/safe2.jpg';

const Blog = () => {
  const posts = [
    {
      id: 1,
      imgSrc: img1,
      category: "Moving Company",
      title: "Sea Freight Explained: Practical Tips for Importers & Exporters in the UAE",
      desc: "Products can look right at first glance, but more below the surface than meets the eye. As global trade continues to grow.....",
      link: "https://www.seafreightforhouseholditems.ae/blog/practical-tips-for-importers-and-exporters-in-the-uae"
    },
    {
      id: 2,
      imgSrc: img2,
      category: "Moving Company",
      title: "How to get Essential Tips for Sea Freight of Household Services with movers in Dubai?",
      desc: "Get expert tips on sea freight for household items with movers in Dubai. Reliable movers, efficient packing & logistics.....",
      link: "https://www.seafreightforhouseholditems.ae/blog/essential-tips-for-sea-freight"
    }
  ];

  const sectionStyle = {
    padding: "60px 20px",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333"
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "40px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "left",
    transition: "transform 0.3s ease",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px"
  };

  const postTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#222",
    marginBottom: "10px"
  };

  const descStyle = {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.5",
    textAlign:'justify'
  };

  const linkStyle = {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "8px",
      // Dark navy
    backgroundColor: "#1A3C27",
    color: "#fff",
    fontWeight: "500",
    textDecoration: "none",
    transition: "background-color 0.3s ease"
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={titleStyle}>Recent Blog Posts<br/><br/></h2>
      </div>

      <div style={gridStyle}>
        {posts.map((post) => (
          <div key={post.id} style={cardStyle}>
            <img src={post.imgSrc} alt={post.title} style={imgStyle} />
            <h3 style={postTitleStyle}>{post.title}</h3>
            <p style={descStyle}>{post.desc}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
