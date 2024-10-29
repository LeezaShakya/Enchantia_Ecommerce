import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getSingleNecklaceApi, updateNecklaceApi } from '../../../apis/Api';

const NecklaceEdit = () => {

    //get id from paras
    const { id } = useParams();
    //get single necklace
    const [necklace, setNecklace] = useState('');

    useEffect(() => {
        getSingleNecklaceApi(id).then((res) => {
            setNecklace(res.data);
            setNecklaceName(res.data.necname);
            setNecklacePrice(res.data.necprice);
            setNecklaceCategory(res.data.neccategory);
            setNecklaceDescription(res.data.necdescription);
            setNecklaceImagea(res.data.necimagea);
        }).catch((err) => {
            console.log(err);
        })
    }, [id])

    const [necklaceName, setNecklaceName] = useState("");
    const [necklacePrice, setNecklacePrice] = useState("");
    const [necklaceCategory, setNecklaceCategory] = useState("");
    const [necklaceDescription, setNecklaceDescription] = useState("");
    const [necklaceImagea, setNecklaceImagea] = useState("");

    // for image preview
    const [previewImagea, setPreviewImagea] = useState("");

    // for image setting and preview
    const handleImageUpload = (event) => {
        setNecklaceImagea(event.target.files[0]);

        // // Read the image file using FileReader
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImagea(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleUpdate = () => {
        const formData = new FormData()
        formData.append('necklaceName', necklaceName)
        formData.append('necklacePrice', necklacePrice)
        formData.append('necklaceCategory', necklaceCategory)
        formData.append('necklaceDescription', necklaceDescription)
        formData.append('necklaceImagea', necklaceImagea)

        // calling the api
        updateNecklaceApi(id, formData).then(res => {
            toast.success("Product updated Sucessfully ")
        }).catch(err => {
            console.log(err)
            toast.error("Product update failed!!")
        })
    };
    return (
        <div className="container container-padding mt-2">
            <h3 className='text-danger'>Updating for {necklace.neckname}</h3>
            <form className='w-50'>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => setNecklaceName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Name"
                        value={necklaceName}
                    />

                    <label for="formFile" class="form-label mt-2">
                        Product Price
                    </label>
                    <input
                        onChange={(e) => setNecklacePrice(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Price"
                        value={necklacePrice}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Category
                    </label>
                    <input
                        onChange={(e) => setNecklaceCategory(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Category"
                        value={necklaceCategory}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={(e) => setNecklaceDescription(e.target.value)}
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        value={necklaceDescription}
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
                    <img src={necklaceImagea} alt="" width={'250px'} height={'200px'} className="object-fit:cover" />

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

export default NecklaceEdit