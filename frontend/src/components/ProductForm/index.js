import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as productActions from "../../store/product";

import './ProductForm.css';

export function ProductForm ({user}) {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState('');
    const [ imgPath, setImgPath ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const user_id = useSelector(state => {
        return state.session.user.id
    })
    
    const categoriesArr = [
        '1',
        'stone',
        'plastic',
        'metal',
        'hollow',
        'bone',
        'wood',
        'glass',
        'other'
    ]
    const [ category_id, setCategory_id ] = useState(categoriesArr[0]);

    const onSubmit = async(e) =>{
        e.preventDefault();
        setErrors([]);
        return dispatch(productActions.createProduct({ name, imgPath, price, category_id, user_id, description })).catch(
            res => {
                if (res.data && res.data.errors) setErrors(res.data.errors)
                else ( history.push('/'))
            }
        )
    }
    return (
        <div className='product-form'>
            <form className='product-form__form' onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, idx) => <li className='product-form__error' key={idx}>{error}</li>)}
                </ul>
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
                value={imgPath}
                onChange = {(e)=> setImgPath(e.target.value)}
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
                onChange= {e => setCategory_id(e.target.value)}>
                    {categoriesArr.map(category =>{
                    return(
                        <option
                            key={category}
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