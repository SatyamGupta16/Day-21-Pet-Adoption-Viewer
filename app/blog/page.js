import Header from "../../component/header";
import Footer from "../../component/footer";

export default function BlogPage() {
  return (
    <>
      <Header title="Blog" />
      <div>
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <article className="blog_item" key={item}>
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src={`assets/img/blog/single_blog_${item}.png`}
                          alt={`Blog ${item}`}
                        />
                        <a href="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </a>
                      </div>
                      <div className="blog_details">
                        <a className="d-inline-block" href="single-blog.html">
                          <h2>Google inks pact for new 35-storey office</h2>
                        </a>
                        <p>
                          That dominion stars lights dominion divide years for
                          fourth have don't stars is that he earth it first
                          without heaven in place seed it second morning saying.
                        </p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="#">
                              <i className="fa fa-user"></i> Travel, Lifestyle
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-comments"></i> 03 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  ))}
                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                          <i className="ti-angle-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next">
                          <i className="ti-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  {/* Search Widget */}
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                          />
                          <div className="input-group-append">
                            <button className="btns" type="button">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>

                  {/* Category Widget */}
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      {[
                        ["Resaurant food", 37],
                        ["Travel news", 10],
                        ["Modern technology", 3],
                        ["Product", 11],
                        ["Inspiration", 21],
                        ["Health Care", 9],
                      ].map(([name, count], index) => (
                        <li key={index}>
                          <a href="#" className="d-flex">
                            <p>{name}</p>
                            <p>({count})</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* Recent Post Widget */}
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    {[1, 2, 3, 4].map((num, index) => (
                      <div className="media post_item" key={index}>
                        <img
                          src={`assets/img/post/post_${num}.png`}
                          alt={`Post ${num}`}
                        />
                        <div className="media-body">
                          <a href="single-blog.html">
                            <h3>
                              {
                                [
                                  "From life was you fish...",
                                  "The Amazing Hubble",
                                  "Astronomy Or Astrology",
                                  "Asteroids telescope",
                                ][index]
                              }
                            </h3>
                          </a>
                          <p>
                            {
                              [
                                "January 12, 2019",
                                "02 Hours ago",
                                "03 Hours ago",
                                "01 Hours ago",
                              ][index]
                            }
                          </p>
                        </div>
                      </div>
                    ))}
                  </aside>

                  {/* Tag Cloud */}
                  <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                      {[
                        "project",
                        "love",
                        "technology",
                        "travel",
                        "restaurant",
                        "life style",
                        "design",
                        "illustration",
                      ].map((tag, index) => (
                        <li key={index}>
                          <a href="#">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* Instagram Feeds */}
                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                      {[5, 6, 7, 8, 9, 10].map((num) => (
                        <li key={num}>
                          <a href="#">
                            <img
                              className="img-fluid"
                              src={`assets/img/post/post_${num}.png`}
                              alt={`Instagram ${num}`}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* Newsletter */}
                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
