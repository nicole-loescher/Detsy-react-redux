import { fetch } from  './csrf';

const SET_PRODUCT = 'product/SET_PRODUCT';
const ADD_PRODUCT = 'product/ADD_PRODUCT';
const REMOVE_PRODUCT = 'product/REMOVE_PRODUCT';

const setProduct = (products) => ({
    type: SET_PRODUCT,
    products
});
const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
});
const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
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
        return dispatch(addProduct(res.data.product))

}
export const deleteProduct = (productId) => async dispatch => {
    const res = await fetch(`/api/products/${productId}`, {
        method: 'delete'
    })
  return dispatch(removeProduct(productId))
}


const productReducer =  (state = [], action) => {
    switch( action.type ){
        case REMOVE_PRODUCT: {
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        }
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
        case ADD_PRODUCT: {
            if (!state[action.product.id]) {
                const newState = {
                    ...state,
                    [action.product.id]: action.product
                };
                console.log(newState)
                const productList = newState.product.map(id => newState[id]);
                productList.push(action.product);
                newState.product = productList;
                return newState;
            }
            return {
                ...state,
                [action.product.id]: {
                    ...state[action.product.id],
                    ...action.product,
                }
            };
        }
        default:
            return state;
    }
}
export default productReducer;