import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../apis/Api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductDetails = () => {



  //get isd from paras
  const { id } = useParams();
  //get single product
  const [product, setProduct] = useState('');

  useEffect(() => {
    getSingleProductApi(id).then((res) => {
      setProduct(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [id]);

  //add and remove quantity
  const [cartValue, setCartValue] = useState(1);

  const handleAddQuantity = () => {
    setCartValue(cartValue + 1);
  }

  const handleRemoveQuantity = () => {
    if (cartValue > 1) {
      setCartValue(cartValue - 1);
    }
  }
  // -------------------------------------
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imagea: product.imagea,
      category: product.category,
      quantity: cartValue
    }


    dispatch(addToCart(cartItem));

  }
  return (




    //  <div className='container mt-5'>
    //    <div className="d-flex">
    //        <img className='object-cover rounded-3' height={'500px'} width={'600px'} src={product.image} alt="" />
    //         <div className='ms-3 mt-4'>
    //            <span className='fs-3 fw-bold'>
    //               {product.name}
    //          </span>

    //       <p className='fs-4'>
    //              {product.price}
    //         </p>
    //        <p className='fs-4'>
    //            {product.category}
    //         </p>
    //        <p className='fs-4'>
    //           {product.description}
    //       </p>

    //           <button className='btn btn-primary'>Add to cart</button>

    //       </div>
    //    </div>
    //   </div>

    <div className='container-fluid main-body detail-page'>
      <section className='container-padding'>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 product-carousel'>

              <div id="carouselExampleIndicators" className="carousel slide carousel-fade carosel-height" data-mdb-ride="carousel">

                <div className="carousel-inner mb-5">
                  <div className="carousel-item active product-item">
                    <img src={product.imagea} className="d-block w-100" alt="..." />
                  </div>
                  {/* <div className="carousel-item product-item">
                      <img src={product.imagea} className="d-block w-100"
                        alt="..." />
                    </div>
                    <div className="carousel-item product-item">
                      <img src={product.imagea} className="d-block w-100" alt="..." />
                    </div> */}
                </div>
                <button className="carousel-control-prev left-arrow" type="button" data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next right-arrow" type="button" data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 product-description'>
              <div>
                <p className='section-subheading'>{product.category} </p>
                <p className='primary-heading-low'>{product.name}</p>
                <p className='best-seller-heading'>{product.description}</p>
              </div>
              <div class="btn-group mb-3" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-black" onClick={handleRemoveQuantity}>-</button>
                <input type="text" value={cartValue} />
                <button type="button" class="btn btn-outline-black" onClick={handleAddQuantity}>+</button>
              </div>
              <br />
              <br />
              <div className='d-flex flex-row'>
                <div>
                  <span className='stock'>In stock</span>
                </div>
                <div className="tp-product-details-rating">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="tp-product-details-reviews ms-2">
                  <span>(36 Reviews)</span>
                </div>
              </div>

              <div>
                <p className='para mt-4'>{product.detaildescription}</p>
                <p className='best-seller-heading'>{product.price}</p>
              </div>
              {/* <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-outline-black" onClick={handleRemoveQuantity}>-</button>
                  <input type="text" value={cartValue} />
                  <button type="button" className="btn btn-outline-black" onClick={handleAddQuantity}>+</button>
                </div>*/}
              <div className="d-flex flex-row mb-3">
                <div className='pe-3'><button type="button" className="btn btn-about mt-3 " data-mdb-ripple-color="dark" onClick={handleAddToCart}>Add to Cart</button></div>
                <div><button type="button" className="btn btn-about mt-3 " data-mdb-ripple-color="dark">Wishlist</button></div>
              </div>
              <div className="tp-product-details-social mt-4">
                <span className='para'>Share: </span>
                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link href="#"><i className="fa-brands fa-vimeo-v"></i></Link>
                <ul className='product para mt-3'>
                  <li>30 days easy returns</li>
                  <li>Order yours before 2.30pm for same day dispatch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' container-padding related-product best-seller-section pb-0'>
        <div className=" container ">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <h5 className="section-subheading">Related Product</h5>
              <h5 className="section-heading1 ">Explore all the similar products </h5>
            </div>
            <div className="col-sm-12 col-md-5">
              <button type="button" className="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Explore all</button>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5662493_png/gema-pendant--mixed-cuts--flower--pink--rhodium-plated-swarovski-5662493.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description ">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema pendant</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Flower, Pink, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" className="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5661344_png/fashion-swan-pendant--swan--white--rhodium-plated-swarovski-5661344.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Fashion Swan pendant</p>
                  <p className="best-seller-sub-heading">Swan, White, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" className="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5652822_png/gema-bracelet--mixed-cuts--green--gold-tone-plated-swarovski-5652822.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema bracelet</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Green, Gold-tone plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" className="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5658397_png/gema-drop-earrings--mixed-cuts--flower--pink--rhodium-plated-swarovski-5658397.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema drop earrings</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Flower, Pink, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" className="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category-section no-bg container-padding">
        <div className=" container ">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h5 className="section-subheading">Product Collection</h5>
              <h5 className="section-heading1 ">Discover our  products categories</h5>
            </div>
            <div className="col-sm-12 col-md-6">
              <Link to={'/list'}><button type="button" class="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Discover Now</button></Link>
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
    </div>
  )
}


export default ProductDetails
