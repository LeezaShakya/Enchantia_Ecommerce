import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const List = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${searchQuery}`)
  }

  return (
    // <div className='container-padding'>
    //     <Link to={'/necklace'}><button className='btn btn-info'>Necklace</button></Link><br /> <br />
    //     <Link to={'/earing'}><button className='btn btn-info'>Earing</button></Link><br /> <br />
    //     <Link to={'/bracelet'}><button className='btn btn-info'>Bracelet</button></Link><br /> <br />
    //     <Link to={'/ring'}><button className='btn btn-info'>Ring</button></Link><br /> <br />
    // </div>
    <div className='container-fluid main-body list-page'>
      <section className="banner"></section>
      <section className='container-padding'>
        <div class="container">
          <div class="row">
            <div className='col-md-3  px-4'>
              <div className="row p-0">
                {/* search button */}
                <form action="">
                  <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="form-control mb-4 theme-input" placeholder="Search Here.." />
                  <button onClick={handleSearch} type="submit" hidden>Search</button>
                </form>
              </div>
              <div className="row mb-4">
                <h4>Categories</h4>
                <div className="dividor"></div>
                <form action="">
                  <div>
                    <input type="checkbox" id="braclet" name="braclet" className="checkbox-style" />
                    <label for="braclet" className="ms-3">  Braclet</label>
                  </div>
                  <div>
                    <input type="checkbox" id="necklace" name="necklace" />
                    <label for="necklace" className="ms-3">  Necklace</label>
                  </div>
                  <div>
                    <input type="checkbox" id="earing" name="earing" />
                    <label for="earing" className="ms-3">  Earing</label>
                  </div>
                  <div>
                    <input type="checkbox" id="ring" name="ring" />
                    <label for="ring" className="ms-3">  Ring</label>
                  </div>
                </form>
              </div>
              <div className="row mb-4">
                <h4>Filter</h4>
                <div className="dividor"></div>
                <p> Price: $10.00 - $20.22</p>
                <div class="range">
                  <input type="range" class="form-range" id="customRange1" />
                </div>
              </div>
              <div className="row mb-4">
                <h4>Latest Products</h4>
                <div className="dividor"></div>
                <div className="mb-2">
                  <div class="seller-img float-start">
                    <img src="https://res.cloudinary.com/dlmxnrlqz/image/upload/v1686275983/enchantia/p7yyxaeacit3s0cpgyjt.jpg" alt="" />
                  </div>
                  <div class="seller-text float-end">
                    <h6 className="mb-0 mt-3">Pure Shine Gold</h6>
                    <p>$120.00</p>
                  </div>
                </div>
                <div className="mb-2">
                  <div class="seller-img float-start">
                    <img src="https://res.cloudinary.com/dlmxnrlqz/image/upload/v1686275983/enchantia/p7yyxaeacit3s0cpgyjt.jpg" alt="" />
                  </div>
                  <div class="seller-text float-end">
                    <h6 className="mb-0 mt-3">Pure Shine Gold</h6>
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-9 '>
              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <div className=" ">
                  <div className="product-image">
                    <div class="content">
                      <Link href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                        <div class="content-overlay"></div>
                        <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5656635_ms2/florere-stud-earrings--flower--pink--gold-tone-plated-swarovski-5656635.jpg" alt="" class="img-fluid" />
                        <div class="content-details fadeIn-left">
                          <h3>Earing</h3>
                          <button type="button" class="btn btn-top" data-mdb-ripple-color="dark">Learn More</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="product-description p-3">
                    <p className="section-subheading mb-1">Ring</p>
                    <p className="mb-0 best-seller-heading">Rhodium Plated</p>
                    <p className="mb-0 mt-2">NPR. 20,000</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="product-image">
                    <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5655713_png/attract-trilogy-ring--round-cut--white--rhodium-plated-swarovski-5655713.png" className="img-fluid" alt="" />
                  </div>
                  <div className="product-description">
                    <p className="section-subheading mb-1">Ring</p>
                    <p className="mb-0 best-seller-heading">Rhodium Plated</p>
                    <p className="mb-0 mt-2">NPR. 20,000</p>
                  </div>
                </div>
                <div className="">
                  <div className="product-image">
                    <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5655713_png/attract-trilogy-ring--round-cut--white--rhodium-plated-swarovski-5655713.png" className="img-fluid" alt="" />
                  </div>
                  <div className="product-description">
                    <p className="section-subheading mb-1">Ring</p>
                    <p className="mb-0 best-seller-heading">Rhodium Plated</p>
                    <p className="mb-0 mt-2">NPR. 20,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default List