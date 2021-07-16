import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
    products: []
}
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'product/add':
            return {
                products: [...state.products, action.payload]
            }
        case 'product/addAll':
            return {
                products: [...state.products, ...action.payload]
            }
        case 'product/set':
            return {
                products: action.payload
            }
    }
    return initialState;
}
export const addProduct = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const newProduct = await res.json()
        dispatch({ type: 'product/add', payload: newProduct })

    }
}
export const fetchProducts = async (dispatch, getState) => {
    // Make an async HTTP request
    const res = await fetch('http://localhost:8080/products')
    const products = await res.json()
    // Dispatch an action with the todos we received
    dispatch({ type: 'product/addAll', payload: products })
    // Check the updated store state after dispatching
    const allProducts = getState().products
    console.log('Number of todos after loading: ', allProducts)
}
export const removeProduct = (id) => {
    return async (dispatch, getState) => {
        await fetch('http://localhost:8080/products/'+id, {
            method: 'DELETE'
        })
        const res = await fetch('http://localhost:8080/products/')
        const products = await res.json()
        // Dispatch an action with the todos we received
        dispatch({ type: 'product/set', payload: products })
        // Check the updated store state after dispatching
        const allProducts = getState().products
        console.log('Number of todos after loading: ', products)
    }
}
const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, middlewareEnhancer)

