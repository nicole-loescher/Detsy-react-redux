import { fetch } from  './csrf';

const SET_PRODUCT = 'product/SET_PRODUCT';

const setProduct = (products) => ({
    type: SET_PRODUCT,
    products
});

export const getProduct = () => async dispatch =>{
    const res = await fetch(`/api/products`);

    return dispatch(setProduct(res.data));

};

export const getOneProduct = (id) => async dispatch => {
    const res = await fetch(`/api/products/${id}`);

    if(res.ok){
        const product = await res.json();
        dispatch(setProduct(product));
    };
};

export const createProduct = (newProduct) => async dispatch => {
    const res = await fetch('/api/products', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    })
    if(res.ok){
        const product = await res.json();
        dispatch(setProduct(product));
        return product;
    }
}

export const updateProduct = (payload) => async dispatch => {
    const res = await fetch(`/api/products/${payload.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        return dispatch(setProduct(res.data));
}


const productReducer =  (state = {}, action) => {
    switch( action.type ){
        case SET_PRODUCT: {
            const allProducts = {};
            action.products.forEach(product => {
                allProducts[product.id] = product;
            })
            return {
                ...allProducts,
                ...state,
            }
        }
        default:
            return state;
    }
}
export default productReducer;