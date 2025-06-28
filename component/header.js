"use client";
import Link from "next/link";
const Header = (props) => {
  return (
    <>
      <main>
        <div className="slider-area2 slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center pt-50">
                  <h2>{props.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                    <img src="assets/img/logo/logo.png" alt="" />
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  {/* Main-menu */}
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-lg-block ">
                    <a href="#" className="header-btn">Login</a>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </>
  );
};

export default Header;