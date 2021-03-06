import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from '../../store/product'
import './EditProduct.css'


export function EditProduct({ product, hideForm, deleteProduct }){
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [imgPath, setImgPath] = useState(product.imgPath);
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id)
    
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
        const id = product.id

        const payload ={
            user_id,
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

    return(
        <div className='product-edit'>
            <form className='product-edit__form' onSubmit={onSubmit}>
                <label>Product Name</label>
                    <input
                        placeholder='Product Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                    />
                <label>Product image</label>
                    <input
                        placeholder='Enter image URL'
                        value={imgPath}
                        onChange={(e) => setImgPath(e.target.value)}
                        type='text'
                    />
                <label>Product Price</label>
                    <input
                        placeholder='Product Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='money'
                    />
                <select
                    hidden
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
                <label>Description</label>
                    <textarea
                        className='product-form__description'
                        placeholder='Product Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                    />
                <button onClick={onSubmit} className='product-edit__submit'>Submit</button>
            </form>
                <button onClick={deleteProduct} className='product-edit__submit'>Delete</button>
                <button onClick={onCancel} className='product-edit__submit'>Cancel</button>
        </div>
    )
    
}