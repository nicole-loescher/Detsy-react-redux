const SET_PRODUCT = 'product/SET_PRODUCT';

export const setProduct = (products) => ({
    type: SET_PRODUCT,
    products
});

export const getProduct = () => async dispatch =>{
    const res = await fetch(`/api/products`);

    if(res.ok){
        const products = await res.json();
        dispatch(setProduct(products));
    };
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