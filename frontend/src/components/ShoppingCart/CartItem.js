
export function CartItem({ id, product }){
  
    return(
        <div>
            <img src={product.imgPath} className='cart__img' />
            <div className='cart_desc'>
                {product.name}
                ${product.price}
            </div>
        </div>
    )
}