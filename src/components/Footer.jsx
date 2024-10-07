import React from 'react';
import { Instagram, Linkedin } from 'react-bootstrap-icons';
import '../css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2 className='heading'>BE THE FIRST TO KNOW</h2>
          <hr className="line" />
          <p>Sign up for updates from mettā muse.</p>
        
         <div className="subscribe">
         <input type="email" placeholder="Enter your e-mail..." />
         <button>SUBSCRIBE</button>
         </div>
        
        
          
        </div>
        <div className="footer-section">
          <h2 className='heading'>CONTACT US</h2>
          <hr className="line" />
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <hr className="line" />
         
            <img src="./usa.jpeg" alt="usa" style={{width:"40px",height:"40px",borderRadius:"50%"}} />USD
            
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr/>
      <div className="footer-links">
        <div>
          <h2 className='heading'>METTA MUSE</h2>
          <hr className="line" />
          <ul>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact us</li>
            <li>EU Complain Docs</li>
          </ul>
        </div>
        <div>
          <h2 className='heading'>QUICK LINKS</h2>
          <hr className="line" />
          <ul style={{textIndent:"1px"}}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className='heading'>FOLLOW US</h2>
          <hr className="line" />
          <div className="social-icons">
            <a href="https://intagram.com" aria-label="Instagram">
              <Instagram size={30} />
            </a>
            <a href="htts://inkedin.com" aria-label="LinkedIn">
              <Linkedin size={30} />
            </a>
          </div>
          <h4>metta muse ACCEPTS</h4>
        <div style={{display:'flex',margin:"0px 20%"}} className='payments'>
        <img src="./gpay.png" alt="google pay" className='payment-options'/>
        <img src="./matercard.png" alt="master card" className='payment-options'/>
        <img src="./amex.png" alt="americal epress" className='payment-options' />
        <img src="./apple.png" alt="apple pay" className='payment-options'/>
        </div>
        </div>
      </div>
      <hr/>
      <center>
        Copyright @{new Date().getFullYear()} mettamuse .All rights reserved.
      </center>
    </footer>
  );
};

export default Footer;
