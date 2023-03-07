import { createContext, useEffect } from "react";
import axios from "axios";
import { useReducer, useContext } from "react";
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { products_url as url } from "../utils/constants"

import reducer from "../reducers/products_reducer"

const initState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featureProducts: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {}
}
const ProductsContext = createContext();


export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const OpenSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }
    const CloseSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }
    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCT_BEGIN })
        try {
            const response = await axios.get(url)
            const products = response.data
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch({
                type: GET_PRODUCT_ERROR
            })
        }
    }

    const fetchSingleProduct = async (url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const response = await axios.get(url)
            // console.log(response)
            const singleProduct = response.data
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
        }
    }
    useEffect(() => {
        fetchProducts(url)
    }, [])
    return (
        <ProductsContext.Provider
            value={
                {
                    ...state,
                    OpenSidebar,
                    CloseSidebar,
                    fetchSingleProduct
                }
            }
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
};