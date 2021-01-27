import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../store/product";
import './ProductForm.css';

export function ProductForm ({user}) {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    
    const categoriesArr = [
        'stone',
        'plastic',
        'metal',
        'hollow',
        'bone',
        'wood',
        'glass',
        'other'
    ]
    const [ type, setType ] = useState(categoriesArr[0]);
    const onSubmit = async(e) =>{
        e.preventDefault();
        const newProduct = {
            name,
            price,
            description,
            type,
            image,
        }
        console.log(newProduct)
        const product = await dispatch(createProduct(newProduct))
        if(product){
        history.push(`/products/${product.id}`)
        }
    }
    return (
        <div className='product-form'>
            <form className='product-form__form' onSubmit={onSubmit}>
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
                placeholder='Enter image URL'
                // className='product-form__img'
                value={image}
                onChange = {(e)=> setImage(e.target.value)}
                type='text'
                >
                </input>
                <input
                placeholder= 'Product Price'
                value={price}
                onChange = {(e)=> setPrice(e.target.value)}
                type='number'
                >
                </input>
                <select
                onChange= {e => setType(e.target.value)}>
                    {categoriesArr.map(category =>{
                    return(
                        <option
                            key={category}
                            value={type}
                            >
                                {category}
                            </option>
                    )
                    })}
                </select>
                <textarea
                className='product-form__description'
                placeholder= 'Product Description'
                value={description}
                onChange = {(e)=> setDescription(e.target.value)}
                type='text'
                >
                </textarea>
                <button className='product-form__submit'>Submit</button>
            </form>
        </div>
    )
}