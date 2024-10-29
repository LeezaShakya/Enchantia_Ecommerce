import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addProductApi, deleteProductApi, getAllProductsApi } from '../../../apis/Api'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productDetailDescription, setProductDetailDescription] = useState('')
    //for response data
    const [products, setProducts] = useState([])

    const [productImagea, setProductImagea] = useState(null)
    //const [productImageb, setProductImageb] = useState(null)
    //const [productImagec, setProductImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setProductImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setProductImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setProductImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setProductImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productDetailDescription', productDetailDescription)
        formData.append('productImagea', productImagea)
        // formData.append('productImageb', productImageb)
        // formData.append('productImagec', productImagec)


        // calling the api
        addProductApi(formData).then(res => {
            toast.success("Product Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Product add failed!!")
        })
    }

    useEffect(() => {
        getAllProductsApi().then(res => {
            setProducts(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Areyou sure you want to delete?")
        if (confirmDelete) {
            deleteProductApi(id).then(res => {
                toast.success("Product delete Sucessfully")
            }).catch(err => {
                toast.error("Product delete failed")
            })
        }
    }
    return (
        <>
            <div className='container container-padding mt-5'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb-3">

                                            <label htmlFor="">Product Name</label>
                                            <input
                                                onChange={(e) => setProductName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product name' />

                                            <label className='mt-2' htmlFor="">Product Price</label>
                                            <input
                                                onChange={(e) => setProductPrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product price' />

                                            <label className='mt-2' htmlFor="">Product Category</label>
                                            <input
                                                onChange={(e) => setProductCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product category' />

                                            <label className='mt-2' htmlFor="">Product Description</label>
                                            <textarea
                                                onChange={(e) => setProductDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Products Detail Description</label>
                                            <textarea
                                                onChange={(e) => setProductDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Product Image1</label>
                                            <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter product image 1' />
                                            {
                                                // productImage && <img src={productImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            {/* <label className='mt-2' htmlFor="">Product Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter product image 2' />
                                            {
                                                // productImage && <img src={productImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Product Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter product image 3' />
                                            {
                                                // productImage && <img src={productImage} alt="" className='object-cover mb-3' height={'100px'}/>
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
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={product.imagea} alt="" height={40} />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.description}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/product/edit/${product._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminDashboard