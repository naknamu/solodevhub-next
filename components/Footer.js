import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <Logo />

          <p className="footer-text">
            Let's level up your skills and achieve your goals together.
          </p>
        </div>

        <div className="wrapper">
          <p className="footer-title">Quick Links</p>
          <ul>
            <li>
              <Link href="#" className="footer-link">
                Advertise with us
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                About Us
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="wrapper">
          <p className="footer-title">Legal Stuff</p>

          <ul>
            <li>
              <Link href="legal-stuff/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="legal-stuff/terms-and-conditions" className="footer-link">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="legal-stuff/disclaimer" className="footer-link">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © Copyright 2023 SoloDevHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
