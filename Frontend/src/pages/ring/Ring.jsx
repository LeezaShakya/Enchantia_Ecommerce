import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addRingApi, deleteRingApi, getAllRingsApi } from '../../apis/Api'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import shop from "../../assets/images/shopping.png";
import like from "../../assets/images/like.png";

const Ring = () => {
    const [ringName, setRingName] = useState('')
    const [ringPrice, setRingPrice] = useState('')
    const [ringCategory, setRingCategory] = useState('')
    const [ringDescription, setRingDescription] = useState('')
    const [ringDetailDescription, setRingDetailDescription] = useState('')
    //for response data
    const [rings, setRings] = useState([])

    const [ringImagea, setRingImagea] = useState(null)
    //const [ringImageb, setRingImageb] = useState(null)
    //const [ringImagec, setRingImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setRingImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setRingImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setRingImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setRingImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('ringName', ringName)
        formData.append('ringPrice', ringPrice)
        formData.append('ringCategory', ringCategory)
        formData.append('ringDescription', ringDescription)
        formData.append('ringDetailDescription', ringDetailDescription)
        formData.append('ringImagea', ringImagea)
        // formData.append('ringImageb', ringImageb)
        // formData.append('ringImagec', ringImagec)


        // calling the api
        addRingApi(formData).then(res => {
            toast.success("Ring Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Ring add failed!!")
        })
    }

    useEffect(() => {
        getAllRingsApi().then(res => {
            setRings(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteRingApi(id).then(res => {
                toast.success("Ring delete Sucessfully")
            }).catch(err => {
                toast.error("Ring delete failed")
            })
        }
    }
    // Get user from local storage
    const userString = localStorage.getItem("user");
    let user;

    if (userString) {
        try {
            user = JSON.parse(userString);
        } catch (error) {
            console.error("Error parsing user JSON:", error);
        }
    }

    console.log(user);
         // search item
         const [searchQuery, setSearchQuery] = useState('')

         const navigate = useNavigate()
         const handleSearch = (e) => {
             e.preventDefault()
             navigate(`/search/${searchQuery}`)
         }
         // cart
           const [ring] = useState('');
           const [cartValue] = useState(1);
           const dispatch = useDispatch();
        const handleAddToCart = () => {
          const cartItem = {
            id: ring.id,
            name: ring.ringname,
            price: ring.ringprice,
            imagea: ring.ringimagea,
            category: ring.ringcategory,
            quantity: cartValue
          } 
           dispatch(addToCart(cartItem));
         }
    // return (
    //     <>
    //         <div className='container mt-5'>
    //             <section className="best-seller-section container-padding">
    //                 <div className=" container">
    //                     <h5 className="section-subheading">Best Seller</h5>
    //                     <h5 className="section-heading1">Enjoy the best Seller ring this week</h5>
    //                 </div>
    //                 <div className="container mt-5">
    //                     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    //                         {
    //                             rings.map((ring) => {
    //                                 return (
    //                                     <Link to={`/rings/details/${ring._id}`} className="col">

    //                                         <div className="best-seller-earing">
    //                                             <div className="text-center py-4">
    //                                                 <div className="ring-image">
    //                                                     <img src={ring.ringimagea} className="img-fluid" alt="" />
    //                                                 </div>
    //                                                 <div className="ring-description">
    //                                                     <p className="section-subheading mb-1">{ring.ringcategory}</p>
    //                                                     <p className="mb-0 best-seller-heading">{ring.ringname}</p>
    //                                                     <p className="best-seller-sub-heading">{ring.ringdescription}</p>
    //                                                     <hr />
    //                                                     <p className="mb-0 best-seller-heading">NRP. {ring.ringprice}</p>
    //                                                     <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </Link>
    //                                 )
    //                             })
    //                         }


    //                     </div>
    //                 </div>
    //             </section>
               
    //                     <>
    //                         <div className="admin">
    //                             <div className='d-flex justify-content-between'>
    //                                 <h3>Rings</h3>
    //                                 <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
    //                                     Add Product
    //                                 </button>

    return (
        <>
            <div className='container-fluid main-body list-page'>
                <section>
                    <div className='banner '>
                        <div className='overlay'>
                            <div className='uk-main'>
                                <h1 className='primary-heading'>Ring</h1>
                                <p className='banner-secondary'  >Home / Ring / List Page</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container-padding'>
                    <div class="container">
                        <div class="row">
                            <div className='col-md-3  p-4 hrllo'>
                                <div className="row p-0">
                                    {/* search button */}
                                    <form action="">
                                        <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="form-control mb-4 theme-input" placeholder="Search Here.." />
                                        <button onClick={handleSearch} type="submit" class="search" hidden>Search</button>
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
                            <div className='col-md-9 px-5'>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                                    {
                                       rings.map((ring) => {
                                            return (
                                                <Link to={`/rings/details/${ring._id}`} className="col">
                                                    <div className=" ">
                                                        <div class="content1">

                                                            <div class="content-overlay1"></div>
                                                            <img src={ring.ringimagea} alt="" class="img-fluid" />
                                                            <div class="content-details1 fadeIn-left">
                                                                <button type="button" class="btn cart-btn me-3" data-mdb-ripple-color="dark" onClick={handleAddToCart}> <img src={shop} alt="" class="img-fluid" /></button>
                                                                <button type="button" class="btn cart-btn ms-3" data-mdb-ripple-color="dark"> <img src={like} alt="" class="img-fluid" /></button>
                                                            </div>

                                                        </div>
                                                        <div className="product-description mt-2 px-3">
                                                            <p className="section-subheading mb-1">{ring.ringcategory}</p>
                                                            <p className="mb-0 best-seller-heading">{ring.ringname}</p>
                                                            <p className="mb-0 mt-2">{ring.ringprice}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
            {
                user.idAdmin ? (
                    <div className="container mt-5">
                        <div className='d-flex justify-content-between'>
                            <h3>Rings</h3>
                            <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                Add Product
                            </button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                                                <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="">
                                                    <div class="mb-3">

                                                        <label htmlFor="">Ring Name</label>
                                                        <input
                                                            onChange={(e) => setRingName(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Ring name' />

                                                        <label className='mt-2' htmlFor="">Ring Price</label>
                                                        <input
                                                            onChange={(e) => setRingPrice(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Ring price' />

                                                        <label className='mt-2' htmlFor="">Ring Category</label>
                                                        <input
                                                            onChange={(e) => setRingCategory(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Ring category' />

                                                        <label className='mt-2' htmlFor="">Ring Description</label>
                                                        <textarea
                                                            onChange={(e) => setRingDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                                        <label className='mt-2' htmlFor="">Rings Detail Description</label>
                                                        <textarea
                                                            onChange={(e) => setRingDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                                        <label className='mt-2' htmlFor="">Ring Image1</label>
                                                        <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter Ring image 1' />
                                                        {
                                                            // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                            previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                                        }
                                                        {/* <label className='mt-2' htmlFor="">Ring Image2</label>
                                                <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter ring image 2' />
                                                {
                                                    // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                    previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                                }
                                                <label className='mt-2' htmlFor="">Ring Image3</label>
                                                <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter ring image 3' />
                                                {
                                                    // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                    previewImagec && <img src={previewImagec} alt="" className='object-cover mb-3' height={'100px'} />
                                                } */}

                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" onClick={handleSummit}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table class="table mt-3">
                                <thead class="table-info">
                                    <tr>
                                        <th scope="col">Ring Image</th>
                                        <th scope="col">Ring Name</th>
                                        <th scope="col">Ring Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        rings.map(ring => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={ring.ringimagea} alt="" height={40} />
                                                    </td>
                                                    <td>{ring.ringname}</td>
                                                    <td>{ring.ringprice}</td>
                                                    <td>{ring.ringcategory}</td>
                                                    <td>{ring.ringdescription}</td>
                                                    <td>

                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <Link to={`/admin/ring/edit/${ring._id}`} type="button" class="btn btn-success">Edit</Link>
                                                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(ring._id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    
                    ) : null
                }


            </div>
        </>
    )
}

export default Ring