import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1199);
  const [hoveredLink, setHoveredLink] = useState(null);

  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog';

  useEffect(() => {
    setIsMobileNavActive(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1199);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileNavActive && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileNavActive, isMobile]);

  const toggleMobileNav = () => setIsMobileNavActive(!isMobileNavActive);
  const closeMenu = () => {
    if (isMobile) setIsMobileNavActive(false);
  };

  // === COLORS ===
  const primaryColor = "#1A3C27";
  const accent1 = "#27AE60";
  const accent2 = "#2ECC71";

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1020,
    backgroundColor: '#fff',
    boxShadow: `0 2px 8px ${primaryColor}33`,
    padding: '20px 0',
    transition: 'all 0.5s',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 20px',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1021,
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
  };

  const navmenuStyle = {
    display: isMobile ? (isMobileNavActive ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
    listStyle: 'none',
    padding: isMobile ? '100px 20px 40px' : 0,
    margin: 0,
    backgroundColor: isMobile ? '#fff' : 'transparent',
    position: isMobile ? 'fixed' : 'static',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9990,
    overflowY: isMobile ? 'auto' : 'visible',
    textAlign: isMobile ? 'center' : 'left',
    gap: isMobile ? '24px' : '0',
  };

  const navItemStyle = {
    padding: '10px 20px',
    color: primaryColor,
    fontWeight: 500,
    fontSize: '18px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const activeLinkStyle = {
    color: accent1,
    borderBottom: `2px solid ${accent1}`,
  };

  const hoverLinkStyle = {
    color: accent2,
  };

  const toggleIconStyle = {
    fontSize: '30px',
    cursor: 'pointer',
    color: primaryColor,
    display: 'block',
    zIndex: 1022,
    position: 'relative',
  };

  const btnStyle = {
    color: '#fff',
    backgroundColor: primaryColor,
    fontSize: '16px',
    padding: '10px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: '0.3s',
    whiteSpace: 'nowrap',
    marginTop: isMobile ? '40px' : '0',
  };

  const logoImgStyle = {
    height: 'auto',
    width: 'clamp(180px, 25vw, 255px)',
    maxWidth: '100%',
  };

  const renderNavLink = (to, label, isActive) => (
    <li key={label}>
      <Link
        to={to}
        smooth
        onClick={closeMenu}
        style={{
          ...navItemStyle,
          ...(isActive ? activeLinkStyle : {}),
          ...(hoveredLink === label ? hoverLinkStyle : {}),
        }}
        onMouseEnter={() => setHoveredLink(label)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle} onClick={closeMenu}>
          <img src={logo} alt="WeMovers Logo" style={logoImgStyle} />
        </Link>

        {isMobile && (
          <i
            className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            style={toggleIconStyle}
            onClick={toggleMobileNav}
          ></i>
        )}

        <ul style={navmenuStyle}>
          {renderNavLink('/', 'Home', isHome)}
          {renderNavLink('/#trust-brand-connection', 'Trust Brand')}
          {renderNavLink('/#safe-packing-and-moving', 'Packing&Moving')}
          {renderNavLink('/#reach-out-to-us', 'Reach Us')}
          {renderNavLink('/#moving-services', 'Services')}
          {renderNavLink('/#get-quote', 'Contact')}
          {renderNavLink('/#faqs', 'FAQs')}
          {renderNavLink('/blogs', 'Blogs', isBlog)}

          {isMobile && (
            <li>
              <a href="https://www.wemovers.ae/contact" style={btnStyle} onClick={closeMenu}>
                Free Quote
              </a>
            </li>
          )}
        </ul>

        {!isMobile && (
          <a href="https://www.wemovers.ae/contact" style={btnStyle}>
            Free Quote
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
