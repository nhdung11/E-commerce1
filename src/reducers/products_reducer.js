
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
} from "../actions"

const products_reducer = ((state, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return {
                ...state,
                isSidebarOpen: true,
            }
        case SIDEBAR_CLOSE:
            return {
                ...state,
                isSidebarOpen: false,
            }
        case GET_PRODUCT_BEGIN:
            return {
                ...state,
                products_loading: true,
                products_error: false
            }
        case GET_PRODUCT_SUCCESS:
            const featureProducts = action.payload.filter((product) => product.featured === true)
            return {
                ...state,
                products: action.payload,
                featureProducts,
                products_loading: false,
                products_error: false
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                products_loading: false,
                products_error: true,
            }
        case GET_SINGLE_PRODUCT_BEGIN:
            return {
                ...state,
                single_product_loading: true,
                single_product_error: false
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                single_product_error: false,
                single_product_loading: false,
                single_product: action.payload
            }
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                single_product_loading: false,
                single_product_error: true
            }
        default:
            throw new Error("Invalid action")
    }
})

export default products_reducer