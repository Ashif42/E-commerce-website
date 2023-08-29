import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="bgcolor text-white text-center py-3">
        <div></div><br /><br />
        <h3>Thanks for visiting the website</h3><br /><br />
      <p>&copy; 2023 Bizz Enterprizes. All rights reserved.</p>
      <button className="btn btn-secondary go-to-top-btn" onClick={scrollToTop}>
        Go to Top
      </button>
    </footer>
  );
}

export default Footer;
