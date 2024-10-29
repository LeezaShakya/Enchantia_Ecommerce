import React, { useEffect, useState } from "react";
//import { testApi } from "../../apis/Api";
import { getAllProductsApi } from '../../apis/Api'
import { Link, useNavigate } from "react-router-dom";
import necklace from "../../assets/images/necklace.png"
import jewelry from "../../assets/images/jewelry.png"
import diamond from "../../assets/images/diamond.png"
import discount from "../../assets/images/discount.png"
import discount2 from "../../assets/images/discount2.png"
import discount3 from "../../assets/images/discount3.png"
import about1 from "../../assets/images/about1.png"
import logo from "../../assets/images/logo.png"
// import testapi

const Homepage = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getAllProductsApi().then(res => {
      setProducts(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (

    <div className="container-fluid main-body">


      <div id="carouselBasicExample" class="carousel slide carousel-fade " data-mdb-ride="carousel">

        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>


        <div class="carousel-inner">

          <div class="carousel-item active ">
            <img src="https://img.freepik.com/free-photo/interested-young-woman-jewelry-doing-her-skincare-routine_197531-12933.jpg?w=740&t=st=1685703213~exp=1685703813~hmac=4ffad145c8c01d76c9643b7adfa843712bf2c7b3d11070f2cd15adf5b7527420" class="d-block w-100" alt="Sunset Over the City" />
            <div class=" container mask  d-md-block carorusel-overlay ">
              <h5 className="secondary-heading">Winter Collection 2023</h5>
              <p className="primary-heading">Jewelry with a <br /> Mordern twist</p>
              <div class="d-flex flex-row mb-3">
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={necklace} alt="" className="banner-icon" /></div>
                  <div className="ms-2"> High-end <br /> Jewelry</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={jewelry} alt="" className="banner-icon" /></div>
                  <div className="ms-2">High <br /> Quality</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={diamond} alt="" className="banner-icon" /></div>
                  <div className="ms-2">Expressive <br /> Design</div>
                </div>
              </div>
              <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Discover Now</button>
            </div>
          </div>
          <div class="carousel-item  ">
            <img src="https://img.freepik.com/free-photo/interested-young-woman-jewelry-doing-her-skincare-routine_197531-12933.jpg?w=740&t=st=1685703213~exp=1685703813~hmac=4ffad145c8c01d76c9643b7adfa843712bf2c7b3d11070f2cd15adf5b7527420" class="d-block w-100" alt="Sunset Over the City" />
            <div class=" container mask  d-md-block carorusel-overlay ">
              <h5 className="secondary-heading">Winter Collection 2023</h5>
              <p className="primary-heading">Jewelry with a <br /> Mordern twist</p>
              <div class="d-flex flex-row mb-3">
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={necklace} alt="" className="banner-icon" /></div>
                  <div className="ms-2"> High-end <br /> Jewelry</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={jewelry} alt="" className="banner-icon" /></div>
                  <div className="ms-2">High <br /> Quality</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={diamond} alt="" className="banner-icon" /></div>
                  <div className="ms-2">Expressive <br /> Design</div>
                </div>
              </div>
              <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Discover Now</button>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="https://weblearnbd.net/tphtml/shofy-prv/shofy/assets/img/slider/3/slider-1.jpg" class="d-block w-100" alt="Sunset Over the City" />
            <div class=" container mask  d-md-block carorusel-overlay ">
              <h5 className="secondary-heading">Winter Collection 2023</h5>
              <p className="primary-heading">Jewelry with a <br /> Mordern twist</p>
              <div class="d-flex flex-row mb-3">
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={necklace} alt="" className="banner-icon" /></div>
                  <div className="ms-2"> High-end <br /> Jewelry</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={jewelry} alt="" className="banner-icon" /></div>
                  <div className="ms-2">High <br /> Quality</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={diamond} alt="" className="banner-icon" /></div>
                  <div className="ms-2">Expressive <br /> Design</div>
                </div>
              </div>
              <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Discover Now</button>
            </div>
          </div>
        </div>



        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev" className="invisible">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next" className="invisible">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />



      <section className="about-us container-padding">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12">
              <img src={about1} alt="" class="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-12 about-intro py-5 px-3">
              <h5 className="section-subheading">Enchantia</h5>
              <h1 className="section-heading">JEWELRY <br /> STORE</h1>
              <p className="para">An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly.</p>
              <Link to={'/about'} onClick={scrollToTop}><button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Discover All</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="category-section container-padding">
        <div className=" container ">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h5 className="section-subheading">Product Collection</h5>
              <h5 className="section-heading1 ">Discover our products</h5>
            </div>
            <div className="col-sm-12 col-md-6">
              <Link to={'/list'} onClick={scrollToTop}><button type="button" class="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Discover Now</button></Link>
            </div>
          </div>
        </div>
        <div className="container mt-5 ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0 ">
            <div className=" category-img">
              <div class="content">
                <Link to={'/necklace'}>
                  <div class="content-overlay"></div>
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5662493_ms1/gema-pendant--mixed-cuts--flower--pink--rhodium-plated-swarovski-5662493.jpg" alt="" class="img-fluid" />
                  <div class="content-details fadeIn-left">
                    <h3>Necklace</h3>
                    <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Learn More</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" category-img">
              <div class="content">
                <Link to={'/earing'}>
                  <div class="content-overlay"></div>
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5656635_ms2/florere-stud-earrings--flower--pink--gold-tone-plated-swarovski-5656635.jpg" alt="" class="img-fluid" />
                  <div class="content-details fadeIn-left">
                    <h3>Earing</h3>
                    <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Learn More</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" category-img">
              <div class="content">
                <Link to={'/ring'}>
                  <div class="content-overlay"></div>
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5658396_ms3/gema-bracelet--mixed-cuts--flower--pink--rhodium-plated-swarovski-5658396.jpg" alt="" class="img-fluid" />
                  <div class="content-details fadeIn-left">
                    <h3>Ring</h3>
                    <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Learn More</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" category-img">
              <div class="content">
                <Link to={'/bracelet'}>
                  <div class="content-overlay"></div>
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5652138_ms2/dulcis-bracelet--candy--multicolored--gold-tone-plated-swarovski-5652138.jpg" alt="" class="img-fluid  " />
                  <div class="content-details fadeIn-left">
                    <h3>Braclet</h3>
                    <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Learn More</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="best-seller-section container-padding">
        <div className=" container">
          <h5 className="section-subheading">Best Seller</h5>
          <h5 className="section-heading1">Enjoy the best Seller product this week</h5>
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {
              products.map((product) => {
                return (
                  <Link to={`/products/details/${product._id}`} onClick={scrollToTop}>
                    <div className="best-seller-product">
                      <div className="text-center py-4">
                        <div className="product-image">
                          <img src={product.imagea} className="img-fluid" alt="" />
                        </div>
                        <div className="product-description">
                          <p className="section-subheading mb-1">{product.category}</p>
                          <p className="mb-0 best-seller-heading">{product.name}</p>
                          <p className="best-seller-sub-heading">{product.description}</p>
                          <hr />
                          <p className="mb-0 best-seller-heading">NPR. {product.price}</p>
                          <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">View More</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="discount-offer-section container-padding">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row "><img src={discount} alt="" className="img-fluid discount-img" /></div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12">
              <div className="row mb-1"><img src={discount2} alt="" className="img-fluid discount-img1" /></div>
              <div className="row mt-1"><img src={discount3} alt="" className="img-fluid discount-img1" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-section container-padding">
        <div className=" container ">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <h5 className="section-subheading">Only at Enchantia</h5>
              <h5 className="section-heading1 ">Strive to make your experience brilliant </h5>
            </div>
            <div className="col-sm-12 col-md-5">
              <button type="button" class="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Contact us</button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="special-img">
                <img src="https://asset.swarovski.com/images/c_crop,g_xy_center,w_3350,h_4465,x_3186,y_2235/dpr_auto,f_auto,q_auto,c_lfill,w_484,h_644/swa-cms/B2C_BRAND_VISUAL_IW-PARIS-PARLY2_SL_GL/.jpg" alt="" className="img-fluid" />
              </div>
              <div className="special-text mt-3">
                <p className="section-subheading">Visit Our Show Room</p>
                <div className="divisor"></div>
                <p className="para">Meet our personal jewelers, explore bestselling styles, pick up an online order, arrange to preview something from our online collection and so much more.</p>
                <button type="button" class="btn btn-about mb-6" data-mdb-ripple-color="dark">Visit Us now</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="special-img">
                <img src="https://asset.swarovski.com/images/c_crop,g_xy_center,w_6372,h_8495,x_3186,y_4248/dpr_auto,f_auto,q_auto,c_lfill,w_768,h_1024/swa-cms/SS22_BRAND_VISUAL-BODYP-EAR-2_OF_GL_300DPI_RGB/5641406-5614090-5614932-5614296.jpg" alt="" className="img-fluid" />
              </div>

              <div className="special-text mt-3">
                <p className="section-subheading">SCHEDULE AN APPOINTMENT</p>
                <div className="divisor"></div>
                <p className="para">Book a fun and interactive appointment with a diamond expert and get up-close views of diamond and jewelry options from the comfort of your own home.</p>
                <button type="button" class="btn btn-about mb-6" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                  Schedule now
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Book an appointment</h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div className='row'>
                          <div className='col-md-6 '>FirstName <br />
                            <input type="text" id="fname" name="fname" value="" className='form-input' />
                          </div>
                          <div className='col-md-6'>LastName <br />
                            <input type="name" id="email" name="email" value="" className='form-input' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-6 '>Phone <br />
                            <input type="number"  value="" className='form-input' />
                          </div>
                          <div className='col-md-6'>Email <br />
                            <input type="email" id="email" name="email" value="" className='form-input' />
                          </div>
                        </div>
                        <div className="row ">
                          <div className='col-md-12'>
                          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                          </div>
                        </div>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-about">CONIFIRM</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="footer-section container-padding">
        <div className=" container text-center">
          <div className="row">
            <div className="col-12 text-center">
              <div><img src={logo} height="90px" width="200px" alt="MDB Logo" loading="lazy" /></div>
              <hr />
              <section class="mb-4">

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-facebook-f"></i
                ></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-twitter"></i
                ></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-google"></i
                ></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i
                ></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-linkedin-in"></i
                ></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-github"></i
                ></a>
              </section>
              <div className="mt-4">
                New Baneshwor, kathmandu | enchantia@gmail.com| 98686549746
              </div>
            </div>
          </div>

        </div>
      </section> */}
      
    </div>
  );
};

export default Homepage;
