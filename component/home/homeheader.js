"use client";
import Link from "next/link";

const HomeHeader = () => {
  const users = [
    { name: "Home", route: "" },
    { name: "About", route: "about" },
    { name: "Services", route: "services" },
    {
      name: "Blog", route: "blog" },
    { name: "Contact", route: "contact" }
  ];

  return (
    <>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="Website Logo" />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        {users.map((user) => (
                          <li key={user.route}>
                            <Link href={`/${user.route}`}>{user.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  {/* Contact Button */}
                  <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    <Link href="/login" className="header-btn">Login</Link>
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

export default HomeHeader;
