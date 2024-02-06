import React, { useState } from 'react'
const AddProducts = () => {
    
    const [data, setData] = useState({ name: "", email: "", password: "", confrimPassword: "" })

    const handleForm = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "" || data.password === "" || data.confrimPassword === "") {
            alert('somthing is missing');
            return;
        }
        console.log(data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    return (
        <div className='container form-container flex flex-col gap'>
            <div className='heading'>
                <h3>Add Products</h3>
            </div>
            <form className='flex flex-col gap item-center' onSubmit={handleForm}>
                <div className='form-control flex-col flex'>
                    <label htmlFor="name">Product Title</label>
                    <input type="text" placeholder='Name' name='name' onChange={handleInputChange} />
                </div>

                <div className='form-control flex-col flex'>
                    <label htmlFor="email">Price</label>
                    <input type="number" placeholder='Product Price' name='price' onChange={handleInputChange} />
                </div>

                <div className='form-control flex-col flex'>
                    <label htmlFor="password">Product Image</label>
                    <input type="text" placeholder='Product Image' name='image' onChange={handleInputChange} />
                </div>

                <div className='form-control flex-col flex'>
                    <label htmlFor="confrim-password">Category</label>
                    <input type="text" placeholder='Product Category' name='Category' onChange={handleInputChange} />
                </div>

                <div className='form-control flex-col flex'>
                    <label htmlFor="confrim-password">Description</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className='form-control flex  item-center space-between'>
                    <input type="submit" value={"Add Product"} />
                </div>
            </form>
        </div>
    )
}

export default AddProducts