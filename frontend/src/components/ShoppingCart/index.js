import { useState } from "react"
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import './ShoppingCart.css'


export function ShoppingCart() {
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.product);

    let content1;
    if(cart){
        const cartItems = Object.values(cart)
            .map(item =>{
                return {
                    ...item,
                    ...products[item.id]
                }
            })
        content1 =( 
                cartItems.map(item => {
                    return <li key={item.id}><CartItem id={item.id} product={item} /></li>
                })
        )
    }
    else if(!cart){
        content1 = (
            'your cart is empty'
        )
    }

    let content;
    if(show){
        content = (
            <div className='shopping-cart' onBlur={()=> setShow(false)}>
                <h2>items</h2>
                <ul>
                    {content1}
                </ul>
                <button onClick={() => setShow(false)}>continue shopping</button>
                <button>checkout</button>
            </div>
        )
    }
    else if(!show){
        content = (
            <button onClick={()=> setShow(true)}> cart</button>
        )
    }
    return (
        <div>
            {content}
        </div>
     
    )
}