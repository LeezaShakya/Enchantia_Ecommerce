import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getSingleRingApi, updateRingApi } from '../../../apis/Api';

const RingEdit = () => {

    //get id from paras
    const { id } = useParams();
    //get single ring
    const [ring, setRing] = useState('');

    useEffect(() => {
        getSingleRingApi(id).then((res) => {
            setRing(res.data);
            setRingName(res.data.ringname);
            setRingPrice(res.data.ringprice);
            setRingCategory(res.data.ringcategory);
            setRingDescription(res.data.ringdescription);
            setRingImagea(res.data.ringimagea);
        }).catch((err) => {
            console.log(err);
        })
    }, [id])

    const [ringName, setRingName] = useState("");
    const [ringPrice, setRingPrice] = useState("");
    const [ringCategory, setRingCategory] = useState("");
    const [ringDescription, setRingDescription] = useState("");
    const [ringImagea, setRingImagea] = useState("");

    // for image preview
    const [previewImagea, setPreviewImagea] = useState("");

    // for image setting and preview
    const handleImageUpload = (event) => {
        setRingImagea(event.target.files[0]);

        // // Read the image file using FileReader
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImagea(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleUpdate = () => {
        const formData = new FormData()
        formData.append('ringName', ringName)
        formData.append('ringPrice', ringPrice)
        formData.append('ringCategory', ringCategory)
        formData.append('ringDescription', ringDescription)
        formData.append('ringImagea', ringImagea)

        // calling the api
        updateRingApi(id, formData).then(res => {
            toast.success("Product updated Sucessfully ")
        }).catch(err => {
            console.log(err)
            toast.error("Product update failed!!")
        })
    };
    return (
        <div className="container container-padding mt-2">
            <h3 className='text-danger'>Updating for {ring.ringname}</h3>
            <form className='w-50'>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => setRingName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Name"
                        value={ringName}
                    />

                    <label for="formFile" class="form-label mt-2">
                        Product Price
                    </label>
                    <input
                        onChange={(e) => setRingPrice(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Price"
                        value={ringPrice}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Category
                    </label>
                    <input
                        onChange={(e) => setRingCategory(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Category"
                        value={ringCategory}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={(e) => setRingDescription(e.target.value)}
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        value={ringDescription}
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
                    <img src={ringImagea} alt="" width={'250px'} height={'200px'} className="object-fit:cover" />

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

export default RingEdit