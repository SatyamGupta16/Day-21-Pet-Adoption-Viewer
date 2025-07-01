"use client";
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from '../component/home/homeheader';
import Login from './login/page';
import Footer from '@/component/footer';
import Register from '@/app/register/page';
import Dashboard from '../component/dashboard/page';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [showRegister, setShowRegister] = useState(false);
 useEffect(() => {
 const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
 setIsLoggedIn(loggedIn);
 }, []);
 const logout = () => {
 localStorage.removeItem('isLoggedIn');
 setIsLoggedIn(false);
 };
 if (isLoggedIn) {
 return <Dashboard />;
 }

  return (
    <div>
      <HomeHeader />
      <main>
        {/* <!--? Slider Area Start--> */}
        <div className="slider-area">
          <div className="slider-active dot-style">
            <div className="single-slider d-flex align-items-center slider-height">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7 col-lg-8 col-md-10 ">
                    {/* <!-- Video icon --> */}
                    <div className="video-icon">
                      <a
                        className="popup-video btn-icon" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                        data-animation="bounceIn" data-delay=".4s" target="_blank"
                        rel="noopener noreferrer">
                        <i className="fas fa-play"></i>
                      </a>
                    </div>

                    <div className="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".3s">We help to groom your pet</span>
                      <h1 data-animation="fadeInUp" data-delay=".3s">We Care For Your Pets.</h1>
                      <p data-animation="fadeInUp" data-delay=".6s">With expert care and love, we ensure your pet gets the best grooming and pampering experience.</p>
                      <a href="#" className="hero-btn" data-animation="fadeInLeft" data-delay=".3s">Contact Now<i className="ti-arrow-right"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slider Social --> */}
          <div className="button-text d-none d-md-block">
            <span>Screll</span>
          </div>
        </div>
        {/* <!-- Slider Area End -->
        <!--? Our Services Start --> */}
        <div className="our-services section-padding30">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle text-center mb-70">
                  <span>Our Professional Services</span>
                  <h2>Best Pet Care Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-animal-kingdom"></span>
                  </div>
                  <div className="services-cap">
                    <h5><a href="#">Pet Boarding</a></h5>
                    <p>Safe and comfortable stay for your pets while you're away. We provide 24/7 care, feeding, and fun activities to make them feel at home.</p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-animals"></span>
                  </div>
                  <div className="services-cap">
                    <h5><a href="#">Pet Treatment</a></h5>
                    <p>From regular checkups to emergency care, our experienced vets ensure your pet's health and happiness with expert treatment services.</p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-animals-1"></span>
                  </div>
                  <div className="services-cap">
                    <h5><a href="#">Vaccinations</a></h5>
                    <p>Protect your pets from diseases with timely vaccinations. We offer all essential shots with expert handling and care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Our Services End -->
        <!--? About Area Start--> */}
        <div className="about-area fix">
          {/* <!--Right Contents  --> */}
          <div className="about-img">
            <div className="info-man text-center">
              <div className="head-cap">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="28px"
  height="39px"
>
  <path
    fillRule="evenodd"
    fill="rgb(255, 255, 255)"
    d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
  />
</svg>

                <h3>354</h3>
              </div>
              <p>Success<br />Treatment</p>
            </div>
            <div className="info-man info-man2 text-center">
              <div className="head-cap">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="28px"
  height="39px"
>
  <path
    fillRule="evenodd"
    fill="rgb(255, 255, 255)"
    d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
  />
</svg>

                <h3>354</h3>
              </div>
              <p>Success<br/>Treatment</p>
            </div>
          </div>
          {/* <!-- left Contents --> */}
          <div className="about-details">
            <div className="right-caption">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle mb-50">
                <h2>We Are Committed to Providing the<br/>Best Pet Care</h2>
              </div>
              <div className="about-more">
                <p className="pera-top">At PetCare, your pet’s comfort, health, and happiness are our top priorities. We deliver trusted and compassionate care tailored to every furry friend.
</p>
                <p className="mb-65 pera-bottom">From grooming to medical treatment, our expert team is here to support your pet's well-being with world-class facilities and love.</p>
                <a href="#" className="btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About Area End-->
        <!--? Gallery Area Start --> */}
        <div className="gallery-area section-padding30">
          <div className="container fix">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle text-center mb-70">
                  <span>Our Recent Photos</span>
                  <h2>Pets Photo Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  {/* <!-- <a href="assets/img/gallery/gallery1.png" className="img-pop-up">View Project</a> --> */}
                  <div className="gallery-img size-img" style={{ backgroundImage: "url('assets/img/gallery/gallery1.png')" }}>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6">
  <div className="single-gallery mb-30">
    <div className="gallery-img size-img" style={{ backgroundImage: "url('assets/img/gallery/gallery2.png')" }}>
    </div>
  </div>
</div>

              <div className="col-lg-8 col-md-6 col-sm-6">
  <div className="single-gallery mb-30">
    <div
      className="gallery-img size-img"
      style={{ backgroundImage: "url('assets/img/gallery/gallery3.png')" }}
    ></div>
  </div>
</div>

              <div className="col-lg-4 col-md-6 col-sm-6">
  <div className="single-gallery mb-30">
    <div className="gallery-img size-img" style={{ backgroundImage: "url('assets/img/gallery/gallery4.png')" }}>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
        {/* <!-- Gallery Area End -->
        <!--? Contact form Start --> */}
        <div className="contact-form-main pb-top">
          <div className="container">
            <div className="row justify-content-md-end">
              <div className="col-xl-7 col-lg-7">
                <div className="form-wrapper">
                  {/* <!--Section Tittle  --> */}
                  <div className="form-tittle">
                    <div className="row ">
                      <div className="col-xl-12">
                        <div className="section-tittle section-tittle2 mb-70">
                          <h2>World's Leading Law Consultency Agency !</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End Section Tittle  --> */}
                  <form id="contact-form" action="#" method="POST">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box user-icon mb-30">
                          <input type="text" name="name" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box email-icon mb-30">
                          <input type="text" name="email" placeholder="Phone"/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-30">
                        <div className="select-itms">
                          <select name="select" id="select2">
                            <option value="">Health Law</option>
                            <option value="">saiful islam</option>
                            <option value="">Arafath Miya</option>
                            <option value="">Shakil Miya</option>
                            <option value="">Tamim Sharker</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box subject-icon mb-30">
                          <input type="Email" name="subject" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-box message-icon mb-65">
                          <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        <div className="submit-info">
                          <button className="btn submit-btn2" type="submit">Submit Now</button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- shape-dog --> */}
                    <div className="shape-dog">
                      <img src="assets/img/gallery/shape1.png" alt=""/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- contact left Img--> */}
          <div className="from-left d-none d-lg-block">
            <img src="assets/img/gallery/contact_form.png" alt=""/>
          </div>
        </div>
        {/* <!-- Contact form End -->
        <!--? Team Start --> */}
        <div className="team-area section-padding30">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle text-center mb-70">
                  <span>Our Professional members </span>
                  <h2>Our Team Mambers</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- single Tem --> */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team1.png" alt=""/>
                  </div>
                  <div className="team-caption">
                    <span>Mike Janathon</span>
                    <h3><a href="#">Doctor</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team2.png" alt=""/>
                  </div>
                  <div className="team-caption">
                    <span>Mike J Smith</span>
                    <h3><a href="#">Doctor</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team3.png" alt=""/>
                  </div>
                  <div className="team-caption">
                    <span>Pule W Smith</span>
                    <h3><a href="#">Doctor</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End -->
        <!--? Blog start --> */}
        <div className="home_blog-area section-padding30">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle text-center mb-70">
                  <span>Oure recent news</span>
                  <h2>Our Recent Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog1.png" alt=""/>
                  </div>
                  <div className="blogs-cap">
                    <div className="date-info">
                      <span>Pet food</span>
                      <p>Nov 30, 2020</p>
                    </div>
                    <h4>Amazing Places To Visit In Summer</h4>
                    <a href="blog_details.html" className="read-more1">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog2.png" alt=""/>
                  </div>
                  <div className="blogs-cap">
                    <div className="date-info">
                      <span>Pet food</span>
                      <p>Nov 30, 2020</p>
                    </div>
                    <h4>Developing Creativithout Losing Visual</h4>
                    <a href="blog_details.html" className="read-more1">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blogs mb-30">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog3.png" alt=""/>
                  </div>
                  <div className="blogs-cap">
                    <div className="date-info">
                      <span>Pet food</span>
                      <p>Nov 30, 2020</p>
                    </div>
                    <h4>Winter Photography Tips from Glenn</h4>
                    <a href="blog_details.html" className="read-more1">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Blog End -->
        <!--? contact-animal-owner Start --> */}
        <div className="contact-animal-owner section-bg" style={{ backgroundImage: "url(/assets/img/gallery/section_bg04.png)" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact_text text-center">
                    <div className="section_title text-center">
                      <h3>Any time you can call us!</h3>
                      <p>
                        Because we know that even the best technology is only as good as the people behind it.
                        24/7 tech support.
                      </p>
                    </div>
                    <div className="contact_btn d-flex align-items-center justify-content-center">
                      <a href="contact.html" className="btn white-btn">Contact Us</a>
                      <p>Or<a href="#"> +91 87919-9****</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* <!-- contact-animal-owner End --> */}
      </main>

      <Footer />
    </div>
  );
}
