import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(true);
  };

  const handleCloseClick = () => {
    setMenu(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Logo />

          <div className="nav-btn" onClick={() => handleMenuClick()}>
            {/* <span
              className="material-symbols-outlined"
              onClick={() => handleMenuClick()}
            >
              menu
            </span> */}
            <RxHamburgerMenu />
          </div>

          <div className="flex-wrapper">
            <ul className="deskhrefp-nav">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/categories" className="nav-link">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/tags" className="nav-link">
                  Tags
                </Link>
              </li>
            </ul>
          </div>

          <div className={`mobile-nav ${menu ? "active" : ""}`}>
            <div className="mobile-nav-wrapper">
              <div
                className="nav-btn closeBtn"
                onClick={() => handleCloseClick()}
              >
                {/* <span className="material-symbols-outlined">close</span> */}
                <AiOutlineClose />
              </div>

              <div className="nav-links">
                <Link href="/" onClick={() => handleCloseClick()}>
                  Home
                </Link>
                <Link href="/categories" onClick={() => handleCloseClick()}>
                  Categories
                </Link>
                <Link href="/tags" onClick={() => handleCloseClick()}>
                  Tags
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;