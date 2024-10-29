import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getSingleBraceletApi, updateBraceletApi } from '../../../apis/Api';

const BraceletEdit = () => {

    //get id from paras
    const {id} = useParams();
    //get single bracelet
    const [bracelet, setBracelet] = useState('');

    useEffect(() => {
        getSingleBraceletApi(id).then((res) => {
            setBracelet(res.data);
            setBraceletName(res.data.bracname);
            setBraceletPrice(res.data.bracprice);
            setBraceletCategory(res.data.braccategory);
            setBraceletDescription(res.data.bracdescription);
            setBraceletImagea(res.data.bracimagea);
        }).catch((err) => {
            console.log(err);
        })
    }, [id])

    const [braceletName, setBraceletName] = useState("");
    const [braceletPrice, setBraceletPrice] = useState("");
    const [braceletCategory, setBraceletCategory] = useState("");
    const [braceletDescription, setBraceletDescription] = useState("");
    const [braceletImagea, setBraceletImagea] = useState("");

    // for image preview
    const [previewImagea, setPreviewImagea] = useState("");

    // for image setting and preview
    const handleImageUpload = (event) => {
        setBraceletImagea(event.target.files[0]);

        // // Read the image file using FileReader
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImagea(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleUpdate = () =>{
        const formData = new FormData()
        formData.append('braceletName', braceletName)
        formData.append('braceletPrice', braceletPrice)
        formData.append('braceletCategory', braceletCategory)
        formData.append('braceletDescription', braceletDescription)
        formData.append('braceletImage', braceletImagea)

         // calling the api
       updateBraceletApi(id,formData).then(res => {
            toast.success("Bracelet updated Sucessfully ")
        }).catch(err => {
            console.log(err)
            toast.error("Bracelet update failed!!")
        })
    };
    return (
        <div className="container container-padding mt-2">
            <h3 className='text-danger'>Updating for {bracelet.bracname}</h3>
            <form className='w-50'>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => setBraceletName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Name"
                        value ={braceletName}
                    />

                    <label for="formFile" class="form-label mt-2">
                        Product Price
                    </label>
                    <input
                        onChange={(e) => setBraceletPrice(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Price"
                        value ={braceletPrice}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Category
                    </label>
                    <input
                        onChange={(e) => setBraceletCategory(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Category"
                        value ={braceletCategory}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={(e) => setBraceletDescription(e.target.value)}
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        value ={braceletDescription}
                    ></textarea>

                    <label for="formFile" class="form-label mt-2">
                        Product Image
                    </label>
                    <input
                        onChange={handleImageUpload}
                        type="file"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Image"
                    />
                    <p>Old product Image</p>
                    <img src={braceletImagea} alt=""  width={'250px'} height={'200px'} className="object-fit:cover"/>

                    {
                        previewImagea && <img src={previewImagea} alt="" className="mt-2 object-cover rounded-3" height={200} width={'100%'} />
                    }
                </div>

                <button type="button" class="btn btn-primary w-100" onClick={handleUpdate}>
                    Update Product
                </button>

            </form>

        </div>
    )
}

export default BraceletEdit