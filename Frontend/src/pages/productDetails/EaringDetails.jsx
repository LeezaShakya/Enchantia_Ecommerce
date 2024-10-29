import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleEaringApi } from '../../apis/Api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const EaringDetails = () => {



  //get isd from paras
  const { id } = useParams();
  //get single earing
  const [earing, setEaring] = useState('');

  useEffect(() => {
    getSingleEaringApi(id).then((res) => {
      setEaring(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [id]);

  // add and remove quantity
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
      id: earing.id,
      name: earing.earname,
      price: earing.earprice,
      imagea: earing.earimagea,
      category: earing.earcategory,
      quantity: cartValue
    }


    dispatch(addToCart(cartItem));

  }
  return (




    //  <div className='container mt-5'>
    //    <div className="d-flex">
    //        <img className='object-cover rounded-3' height={'500px'} width={'600px'} src={earing.image} alt="" />
    //         <div className='ms-3 mt-4'>
    //            <span className='fs-3 fw-bold'>
    //               {earing.name}
    //          </span>

    //       <p className='fs-4'>
    //              {earing.price}
    //         </p>
    //        <p className='fs-4'>
    //            {earing.category}
    //         </p>
    //        <p className='fs-4'>
    //           {earing.description}
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
                  <div className="carousel-item active earing-item">
                    <img src={earing.earimagea} className="d-block w-100" alt="..." />
                  </div>
                  {/* <div className="carousel-item earing-item">
                      <img src={earing.earimagea} className="d-block w-100"
                        alt="..." />
                    </div>
                    <div className="carousel-item earing-item">
                      <img src={earing.earimagea} className="d-block w-100" alt="..." />
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
            <div className='col-md-6 col-sm-12 earing-description'>
              <div>
                <p className='section-subheading'>{earing.earcategory} </p>
                <p className='primary-heading-low'>{earing.earname}</p>
                <p className='best-seller-heading'>{earing.eardescription}</p>
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
                <div className="tp-earing-details-rating">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="tp-earing-details-reviews ms-2">
                  <span>(36 Reviews)</span>
                </div>
              </div>

              <div>
                <p className='para mt-4'>{earing.eardetaildescription}</p>
                <p className='best-seller-heading'>{earing.earprice}</p>
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
              <div className="tp-earing-details-social mt-4">
                <span className='para'>Share: </span>
                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link href="#"><i className="fa-brands fa-vimeo-v"></i></Link>
                <ul className='earing para mt-3'>
                  <li>30 days easy returns</li>
                  <li>Order yours before 2.30pm for same day dispatch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}


export default EaringDetails
