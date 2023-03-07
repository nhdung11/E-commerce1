import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/cart_reducer'
import { ADD_TO_CART, TOGGLE_AMOUNT, REMOVE_ITEM, CLEAR_CART, COUNT_CART_TOTALS } from "../actions";
const CartContext = createContext()

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'))
    }else {
        return []
    }
}
const initState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 6
}
export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initState)
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product}})
    }
    const toggleAmount = (id, value) => {
        dispatch({type: TOGGLE_AMOUNT, payload: {id, value}})
    }
    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }
    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }
    useEffect(()=> {
        dispatch({type: COUNT_CART_TOTALS})
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])
    return (
        <CartContext.Provider value={{...state, addToCart, toggleAmount, removeItem, clearCart}}>{children}</CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}