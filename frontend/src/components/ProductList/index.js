
import { useSelector } from 'react-redux';
import { ProductDetail } from '../ProductDetail';


export function ProductList() {
    const products = useSelector(state => state.product)
    const productArr = Object.values(products)

    return (
        <div>
            <h2>Out picks for you</h2>
            {productArr.map(product => (
                <ProductDetail key={product.id} product={product} />
            ))}
        </div>
    )
}