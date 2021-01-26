import { useState } from "react";
import './ProductForm.css';

export function ProductForm ({user}) {
    const [ name, setName ] = useState();
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();
    const [ image, setImage ] = useState();

    return (
        <div className='product-form'>
            <form className='product-form__form'>
                <h2> Hello, {user.username} </h2>
                <p> Time to get selling!</p>
                <h2 className='product-form__title'> Enter your product for sale </h2>
                <input
                placeholder= 'Product Name'
                value={name}
                onChange = {(e)=> setName(e.target.value)}
                type='text'
                >
                </input>
                <input
                placeholder= 'Product Price'
                value={price}
                onChange = {(e)=> setPrice(e.target.value)}
                type='text'
                >
                </input>
                <textarea
                className='product-form__description'
                placeholder= 'Product Description'
                value={description}
                onChange = {(e)=> setDescription(e.target.value)}
                type='text'
                >
                </textarea>
                <input
                className='product-form__img'
                placeholder= 'Product Image'
                value={image}
                onChange = {(e)=> setImage(e.target.value)}
                type='file'
                >
                </input>
                <button className='product-form__submit'>Submit</button>
            </form>
        </div>
    )
}