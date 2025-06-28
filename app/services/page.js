import Header from '../../component/header';
import Footer from '../../component/footer';

export default function Service() {
  return (
    <>
      <Header title="Services" />

      <div className="our-services section-padding30">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-70">
                <span>Our Professional Services</span>
                <h2>Best Pet Care Services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { icon: "flaticon-animal-kingdom", title: "Pet Boarding" },
              { icon: "flaticon-animals", title: "Pet Treatment" },
              { icon: "flaticon-animals-1", title: "Vaccinations" },
              { icon: "flaticon-animals", title: "Pet Treatment" },
              { icon: "flaticon-animals-1", title: "Vaccinations" },
              { icon: "flaticon-animal-kingdom", title: "Pet Boarding" }
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className={service.icon}></span>
                  </div>
                  <div className="services-cap">
                    <h5><a href="#">{service.title}</a></h5>
                    <p>Safe and comfortable stay for your pets while you're away. We provide 24/7 care, feeding, and fun activities to make them feel at home.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div
        className="contact-animal-owner section-bg"
        style={{ backgroundImage: "url('/assets/img/gallery/section_bg04.png')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact_text text-center">
                <div className="section_title text-center">
                  <h3>Any time you can call us!</h3>
                  <p>Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.</p>
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