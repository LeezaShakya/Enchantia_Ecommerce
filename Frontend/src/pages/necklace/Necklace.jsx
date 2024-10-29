import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addNecklaceApi, deleteNecklaceApi, getAllNecklacesApi } from '../../apis/Api'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import shop from "../../assets/images/shopping.png";
import like from "../../assets/images/like.png";

const Necklace = () => {

    const [necklaceName, setNecklaceName] = useState('')
    const [necklacePrice, setNecklacePrice] = useState('')
    const [necklaceCategory, setNecklaceCategory] = useState('')
    const [necklaceDescription, setNecklaceDescription] = useState('')
    const [necklaceDetailDescription, setNecklaceDetailDescription] = useState('')
    //for response data
    const [necklaces, setNecklaces] = useState([])

    const [necklaceImagea, setNecklaceImagea] = useState(null)
    //const [necklaceImageb, setNecklaceImageb] = useState(null)
    //const [necklaceImagec, setNecklaceImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setNecklaceImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setNecklaceImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setNecklaceImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setNecklaceImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('necklaceName', necklaceName)
        formData.append('necklacePrice', necklacePrice)
        formData.append('necklaceCategory', necklaceCategory)
        formData.append('necklaceDescription', necklaceDescription)
        formData.append('necklaceDetailDescription', necklaceDetailDescription)
        formData.append('necklaceImagea', necklaceImagea)
        // formData.append('necklaceImageb', necklaceImageb)
        // formData.append('necklaceImagec', necklaceImagec)


        // calling the api
        addNecklaceApi(formData).then(res => {
            toast.success("Necklace Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Necklace add failed!!")
        })
    }

    useEffect(() => {
        getAllNecklacesApi().then(res => {
            setNecklaces(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteNecklaceApi(id).then(res => {
                toast.success("Necklace delete Sucessfully")
            }).catch(err => {
                toast.error("Necklace delete failed")
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
    const [necklace] = useState('');
    const [cartValue] = useState(1);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const cartItem = {
            id: necklace.id,
            name: necklace.necname,
            price: necklace.necprice,
            imagea: necklace.necimagea,
            category: necklace.neccategory,
            quantity: cartValue
        }


        dispatch(addToCart(cartItem));

    }
    return (
        <>
            <div className='container-fluid main-body list-page'>
                <section>
                    <div className='banner '>
                        <div className='overlay'>
                            <div className='uk-main'>
                                <h1 className='primary-heading'>Necklace</h1>
                                <p className='banner-secondary'  >Home / Neclace / List Page</p>
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
                                        necklaces.map((necklace) => {
                                            return (
                                                <Link to={`/necklaces/details/${necklace._id}`} className="col">
                                                    <div className=" ">
                                                        <div class="content1">

                                                            <div class="content-overlay1"></div>
                                                            <img src={necklace.necimagea} alt="" class="img-fluid" />
                                                            <div class="content-details1 fadeIn-left">
                                                                <button type="button" class="btn cart-btn me-3" data-mdb-ripple-color="dark" onClick={handleAddToCart}> <img src={shop} alt="" class="img-fluid" /></button>
                                                                <button type="button" class="btn cart-btn ms-3" data-mdb-ripple-color="dark"> <img src={like} alt="" class="img-fluid" /></button>
                                                            </div>

                                                        </div>
                                                        <div className="product-description mt-2 px-3">
                                                            <p className="section-subheading mb-1">{necklace.neccategory}</p>
                                                            <p className="mb-0 best-seller-heading">{necklace.necname}</p>
                                                            <p className="mb-0 mt-2">{necklace.necprice}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                <div className='row pagination-row'>
                                    <nav aria-label="...">
                                        <ul class="pagination pagination-circle d-flex justify-content-center  ">
                                            <li class="page-item">
                                                <a class="page-link">Previous</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item active" aria-current="page">
                                                <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>

                {
                    user.isAdmin ? (
                        <div className='container mt-5'>
                            <div className='d-flex justify-content-between'>
                                <h3>Necklaces</h3>
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

                                                        <label htmlFor="">Necklace Name</label>
                                                        <input
                                                            onChange={(e) => setNecklaceName(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Necklace name' />

                                                        <label className='mt-2' htmlFor="">Necklace Price</label>
                                                        <input
                                                            onChange={(e) => setNecklacePrice(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Necklace price' />

                                                        <label className='mt-2' htmlFor="">Necklace Category</label>
                                                        <input
                                                            onChange={(e) => setNecklaceCategory(e.target.value)}
                                                            type="text" class="form-control" placeholder='Enter Necklace category' />

                                                        <label className='mt-2' htmlFor="">Necklace Description</label>
                                                        <textarea
                                                            onChange={(e) => setNecklaceDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                                        <label className='mt-2' htmlFor="">Necklaces Detail Description</label>
                                                        <textarea
                                                            onChange={(e) => setNecklaceDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                                        <label className='mt-2' htmlFor="">Necklace Image1</label>
                                                        <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter Necklace image 1' />
                                                        {
                                                            // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                            previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                                        }
                                                        {/* <label className='mt-2' htmlFor="">Necklace Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter necklace image 2' />
                                            {
                                                // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Necklace Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter necklace image 3' />
                                            {
                                                // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
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
                                        <th scope="col">Necklace Image</th>
                                        <th scope="col">Necklace Name</th>
                                        <th scope="col">Necklace Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        necklaces.map(necklace => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={necklace.necimagea} alt="" height={40} />
                                                    </td>
                                                    <td>{necklace.necname}</td>
                                                    <td>{necklace.necprice}</td>
                                                    <td>{necklace.neccategory}</td>
                                                    <td>{necklace.necdescription}</td>
                                                    <td>

                                                        <div class="btn-group" role="group" aria-label="Basic example">
                                                            <Link to={`/admin/necklace/edit/${necklace._id}`} type="button" class="btn btn-success">Edit</Link>
                                                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(necklace._id)}>Delete</button>
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

export default Necklace