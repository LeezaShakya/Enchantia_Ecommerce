import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getSingleEaringApi, updateEaringApi } from '../../../apis/Api';

const EaringEdit = () => {

    //get id from paras
    const { id } = useParams();
    //get single earing
    const [earing, setEaring] = useState('');

    useEffect(() => {
        getSingleEaringApi(id).then((res) => {
            setEaring(res.data);
            setEaringName(res.data.earname);
            setEaringPrice(res.data.earprice);
            setEaringCategory(res.data.earcategory);
            setEaringDescription(res.data.eardescription);
            setEaringImagea(res.data.earimagea);
        }).catch((err) => {
            console.log(err);
        })
    }, [id])

    const [earingName, setEaringName] = useState("");
    const [earingPrice, setEaringPrice] = useState("");
    const [earingCategory, setEaringCategory] = useState("");
    const [earingDescription, setEaringDescription] = useState("");
    const [earingImagea, setEaringImagea] = useState("");

    // for image preview
    const [previewImagea, setPreviewImagea] = useState("");

    // for image setting and preview
    const handleImageUpload = (event) => {
        setEaringImagea(event.target.files[0]);

        // // Read the image file using FileReader
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImagea(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleUpdate = () => {
        const formData = new FormData()
        formData.append('earingName', earingName)
        formData.append('earingPrice', earingPrice)
        formData.append('earingCategory', earingCategory)
        formData.append('earingDescription', earingDescription)
        formData.append('earingImage', earingImagea)

        // calling the api
        updateEaringApi(id, formData).then(res => {
            toast.success("Product updated Sucessfully ")
        }).catch(err => {
            console.log(err)
            toast.error("Product update failed!!")
        })
    };
    return (
        <div className="container container-padding mt-2">
            <h3 className='text-danger'>Updating for {earing.earname}</h3>
            <form className='w-50'>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => setEaringName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Name"
                        value={earingName}
                    />

                    <label for="formFile" class="form-label mt-2">
                        Product Price
                    </label>
                    <input
                        onChange={(e) => setEaringPrice(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Price"
                        value={earingPrice}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Category
                    </label>
                    <input
                        onChange={(e) => setEaringCategory(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Category"
                        value={earingCategory}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={(e) => setEaringDescription(e.target.value)}
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        value={earingDescription}
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
                    <img src={earingImagea} alt="" width={'250px'} height={'200px'} className="object-fit:cover" />

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

export default EaringEdit