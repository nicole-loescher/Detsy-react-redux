import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateProduct } from '../../store/product'
import './EditProduct.css'


export function EditProduct({ product, hideForm, deleteProduct }){
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [imgPath, setImgPath] = useState(product.imgPath);
    const dispatch = useDispatch();
    
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
    const [category_id, setCategory_id] = useState(product.category_id);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            id,
            name,
            price,
            description,
            imgPath,
            category_id
        };
        const updatedProduct = await dispatch(updateProduct(payload));
        if(updatedProduct){
            hideForm();
            return updatedProduct
        }
    }
    const onCancel = (e) => {
        e.preventDefault();
        hideForm();
    }
   const id = product.id

    return(
        <div>
            <form className='product-edit__form' onSubmit={onSubmit}>
                <input
                    placeholder='Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                >
                </input>
                <input
                    placeholder='Enter image URL'
                    value={imgPath}
                    onChange={(e) => setImgPath(e.target.value)}
                    type='text'
                >
                </input>
                <input
                    placeholder='Product Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type='number'
                >
                </input>
                <select
                    onChange={e => setCategory_id(e.target.value)}>
                    {categoriesArr.map(category => {
                        return (
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
                    placeholder='Product Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type='text'
                >
                </textarea>
                <button className='product-edit__submit'>Submit</button>
            </form>
                <button onClick={deleteProduct} className='product-edit__submit'>Delete</button>
                <button onClick={onCancel} className='product-edit__submit'>Cancel</button>
        </div>
    )
    
}