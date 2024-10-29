import React, { useState } from 'react'
import about1 from "../../assets/images/about1.png"
import necklace from "../../assets/images/necklace.png"
import jewelry from "../../assets/images/jewelry.png"
import diamond from "../../assets/images/diamond.png"

const Contact = () => {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  return (
    <div className='container-fluid main-body'>
      <section>
        <div className='banner '>
          <div className='overlay'>
            <div className='uk-main'>
              <h1 className='primary-heading'>Contact Us</h1>
              <p className='banner-secondary' >Home / Contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container contact-page container-padding'>
          <div className='row'>
            <div className='col-md-8 '>
              <h1 className='section-heading1 mb-4'>Get in touch</h1>
              <div class="divisor"></div>
              <form action="">
                <div className="container" >
                  <div className='row'>
                    <div className="form-group">

                    </div>
                    <div className='col-md-4 '>Name <br />
                      <input type="text" name="name" id="" className="form-control form-input" placeholder="" />
                    </div>
                    <div className='col-md-4'>Email <br />
                      <input type="email" name="email" id="" className="form-control form-input" placeholder="" />
                    </div>
                    <div className='col-md-4'>Phone <br />
                      <input type="number" name="phone" id="" className="form-control form-input" placeholder="" />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <textarea cols="40" rows="4" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Comment or Message *" name="textarea-982" className='form-input-textarea'></textarea>
                      <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-4 p-5 contact-block'>
              <div className='contact-detail'>
                <div>
                  <h4 class>Address</h4>
                  <p>14 LE Gounlburn St, Sydney 1198NSA.</p>
                  <div class="divisor"></div>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>(+089) 19918989</p>
                  <div class="divisor"></div>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@enchantia.com</p>
                  <div class="divisor"></div>
                </div>
                <div>
                  <h4>Follow us</h4>
                  <p>info@enchantia.com</p>
                  <div class="divisor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='map'>
        <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdomt=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="London Eye, London, United Kingdom" className='map'></iframe>
      </section>
    </div>
  )
}

export default Contact