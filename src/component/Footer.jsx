function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-grid">

          
          <div className="footer-brand">
            <h2>Hussain Restaurant</h2>
            <p>
              At Hussain Restaurant, food isn’t just a meal — it’s an experience. Join us and taste the passion in every bite.
            </p>
          </div>

       
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://informationes.netlify.app/" target="_blank">About Us</a></li>
              <li><a href="https://github.com/hussaindev2007-png" target="_blank">Contact</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Connected</h3>
            <p>Subscribe to get updates on new arrivals and special offers.</p>

            <div className="subscribe-form">
              <input type="email" placeholder="Your email" />
             <a href="#">
             
               <button>Subscribe</button>
              </a>
            </div>

            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Hussain Restaurant</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
