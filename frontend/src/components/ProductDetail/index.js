export function ProductDetail({ product }) {

    return (
        <div>
            <img src={product.imgSrc} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            
        </div>
    )
}