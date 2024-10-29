import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import black from "../../assets/images/black.png"


const Footerr = () => {
  return (
    <>
            <div>
                <section className="footer-section container-padding">
                    <div className=" container text-center">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div><img src={logo} height="90px" width="200px" alt="MDB Logo" loading="lazy" /></div>
                                <hr />
                                <section class="mb-4">

                                    <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-facebook-f"></i
                                    ></Link>


                                    <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-twitter"></i
                                    ></Link>


                                    <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-google"></i
                                    ></Link>


                                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-instagram"></i
                                    ></a>


                                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-linkedin-in"></i
                                    ></a>


                                    <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ><i class="fab fa-github"></i
                                    ></Link>
                                </section>
                                <div className="mt-4">
                                    New Baneshwor, kathmandu | enchantia@gmail.com| 98686549746
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
  )
}

export default Footerr