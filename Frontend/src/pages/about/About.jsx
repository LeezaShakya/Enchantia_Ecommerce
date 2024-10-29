import React from 'react'
import about1 from "../../assets/images/about1.png"
import necklace from "../../assets/images/necklace.png"
import jewelry from "../../assets/images/jewelry.png"
import diamond from "../../assets/images/diamond.png"
import logo from "../../assets/images/logo.png"
import Navbar from '../../components/navbar/Navbar'

const About = () => {
  return (
    <div className='container-fluid main-body'>
      <section>
        <div className='banner '>
          <div className='overlay'>
            <div className='uk-main'>
              <h1 className='primary-heading'>About Us</h1>
              <p className='banner-secondary' >Home / About Us</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us container-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={about1} alt="" class="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-12 about-intro py-5 px-3">
              <h5 className="section-subheading">Enchantia</h5>
              <h1 className="section-heading">JEWELRY <br /> STORE</h1>
              <p className="para mt-3">An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly.An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly.</p>
              
              {/* <div class="d-flex flex-row mb-3  justify-content-center">
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={necklaceblack} alt="" className="banner-icon" /></div>
                  <div className="ms-2"> High-end <br /> Jewelry</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={jewelryblack} alt="" className="banner-icon" /></div>
                  <div className="ms-2">High <br /> Quality</div>
                </div>
                <div class="p-2 d-flex justify-content-between">
                  <div><img src={diamondblack} alt="" className="banner-icon" /></div>
                  <div className="ms-2">Expressive <br /> Design</div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
      <section className="craftmanship container-padding">
        <div className='container '>
          <div className='row'>
            <div className='col-md-8 col-sm-12'>
              <p className="section-subheading">Creativity</p>
              <p className="section-heading"> Take a look to the Creative ides</p>
              <p className='para'>From inspiration brief to collection launch, Swarovski’s creative process is uniquely prolific. With a focus on trend curation, design, and meaningful branding, every piece tells a story and embodies over 125 years of mastered craftsmanship. The continuous evolution of material and technique makes Swarovski the leader of crystal cut creations. <br /> <br />
                From inspiration brief to collection launch, Swarovski’s creative process is uniquely prolific. With a focus on trend curation, design, and meaningful branding, every piece tells a story and embodies over 125 years of mastered craftsmanship. The continuous evolution of material and technique makes Swarovski the leader of crystal cut creations.  <br /> <br />
                Oh children provided to mr elegance marriage strongly.Son law garden chatty temper. Oh children provided to mr elegance marriage strongly.An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing.</p>
            </div>
            <div className='col-md-4 col-sm-12'><img src="https://asset.swarovski.com/images/c_crop,g_xy_center,w_2473,h_3297,x_1957,y_1649/dpr_auto,f_auto,q_auto,c_lfill,w_768,h_1024/swa-cms/B2C_ABOUTUS_VISUAL-HERITAGE-ATELIER-SWAROVSKI-COLLECTION-2010_SL_GL/.jpg" alt="" className='img-fluid' /></div>
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
                <button type="button" class="btn btn-about mb-6" data-mdb-ripple-color="dark">Schedule now</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='fixed-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 text'>
              <p className='primary-heading'>Elegant and Everlasting</p>
              <hr />
              <p className='para fixed-font' >When it comes to engagement rings, it’s all in the details. Explore these elegant settings that feature a graceful touch. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae cupiditate id fuga exercitationem rerum repudiandae error accusamus non temporibus quas tempora dolorum nam cum ex alias, culpa voluptates quam. Dicta!</p>
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
            </div>
            
          </div>
        </div>
      </section>
      <section className="footer-section container-padding">
        <div className=" container text-center">
          <div className="row">
            <div className="col-12 text-center">
              <div><img src={logo} height="90px" width="200px" alt="MDB Logo"loading="lazy"/></div>
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
      </section>
    </div>
  )
}

export default About