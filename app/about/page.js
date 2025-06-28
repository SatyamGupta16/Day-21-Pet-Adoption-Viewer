import Header from '../../component/header';
import Footer from '../../component/footer';

export default function AboutPage() {
    return (
        <>
            <Header title="About Us" />
            <div className="about-details section-padding30">
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-1 col-lg-8">
                            <div className="about-details-cap mb-50">
                                <h4>🐾Our Mission</h4>
                                <p>
                                    To provide compassionate, affordable, and reliable pet care services that ensure every pet feels loved, safe, and healthy. We strive to support pet owners through dedicated grooming, treatment, and adoption guidance.
                                </p>
                                </div>

                            <div className="about-details-cap mb-50">
                                <h4>🌟 Our Vision</h4>
                                <p>
                                    To become the most trusted and accessible platform for pet care and adoption, where every animal finds a caring home and every pet parent receives expert support throughout their journey.
                                </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area fix">
                <div className="about-img">
                    <div className="info-man text-center">
                        <div className="head-cap">
                            <h3>354</h3>
                        </div>
                        <p>Success<br />Treatment</p>
                    </div>
                    <div className="info-man info-man2 text-center">
                        <div className="head-cap">
                            <h3>354</h3>
                        </div>
                        <p>Success<br />Treatment</p>
                    </div>
                </div>

                <div className="about-details">
                    <div className="right-caption">
                        <div className="section-tittle mb-50">
                            <h2>We Are Committed to Providing the<br/>Best Pet Care</h2>
                        </div>
                        <div className="about-more">
                            <p className="pera-top">
                                At PetCare, your pet’s comfort, health, and happiness are our top priorities. We deliver trusted and compassionate care tailored to every furry friend.
                            </p>
                            <p className="mb-65 pera-bottom">
                                From grooming to medical treatment, our expert team is here to support your pet's well-being with world-class facilities and love.
                            </p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-area section-padding30">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="cl-xl-7 col-lg-8 col-md-10">
                            <div className="section-tittle text-center mb-70">
                                <span>Our Professional members</span>
                                <h2>Our Team Members</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {["team1", "team2", "team3"].map((img, idx) => (
                            <div key={idx} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={`/assets/img/gallery/${img}.png`} alt={`Team ${idx + 1}`} />
                                    </div>
                                    <div className="team-caption">
                                        <span>Doctor</span>
                                        <h3><a href="#">Member {idx + 1}</a></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-form-main pb-top">
                <div className="container">
                    <div className="row justify-content-md-end">
                        <div className="col-xl-7 col-lg-7">
                            <div className="form-wrapper">
                                <div className="form-tittle">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="section-tittle section-tittle2 mb-70">
                                                <h2>World's Leading Law Consultancy Agency!</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form id="contact-form" action="#" method="POST">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-30">
                                            <div className="select-itms">
                                                <select name="select" id="select2">
                                                    <option value="Health Law">Health Law</option>
                                                    <option value="Saiful Islam">Saiful Islam</option>
                                                    <option value="Arafath Miya">Arafath Miya</option>
                                                    <option value="Shakil Miya">Shakil Miya</option>
                                                    <option value="Tamim Sharker">Tamim Sharker</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box subject-icon mb-30">
                                                <input type="email" name="subject" placeholder="Email" />
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
                                    <div className="shape-dog">
                                        <img src="/assets/img/gallery/shape1.png" alt="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="from-left d-none d-lg-block">
                    <img src="/assets/img/gallery/contact_form.png" alt="" />
                </div>
            </div>

            <div className="home_blog-area section-padding30">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="cl-xl-7 col-lg-8 col-md-10">
                            <div className="section-tittle text-center mb-70">
                                <span>Our recent news</span>
                                <h2>Our Recent Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3].map(num => (
                            <div key={num} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-blogs mb-30">
                                    <div className="blog-img">
                                        <img src={`/assets/img/gallery/blog${num}.png`} alt={`Blog ${num}`} />
                                    </div>
                                    <div className="blogs-cap">
                                        <div className="date-info">
                                            <span>Pet food</span>
                                            <p>Nov 30, 2020</p>
                                        </div>
                                        <h4>Blog Title {num}</h4>
                                        <a href="blog_details.html" className="read-more1">Read more</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                                    <p>Or<a href="#"> +91 87919 9****</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
