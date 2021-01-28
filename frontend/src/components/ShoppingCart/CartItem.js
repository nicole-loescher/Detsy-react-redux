
export function CartItem({ id, product }){
  
    return(
        <div>
            {product.name}
            <div>
                {product.price}
            </div>
        </div>
    )
}