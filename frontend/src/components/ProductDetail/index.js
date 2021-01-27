import './ProductDetail.css';

export function ProductDetail({ product }) {

    return (
        <div className='product' key={`${product.id}.${product.name}`}>
            <img alt='product' className='product__img' src={product.imgPath} />
            <h2 className='product__title'>{product.name}</h2>
            <h3 className='product__price'>${product.price}</h3>
            <p className='product__details'>{product.description}</p>
            <button className='product__add'>Add to cart</button>
        </div>
    )
}