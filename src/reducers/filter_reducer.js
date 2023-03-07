import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
    UPDATE_SORT,
    SORT_PRODUCTS
} from "../actions";
const filter_reducer = ((state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            let maxPrice = action.payload.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
            }
        }
        case SET_GRIDVIEW: {
            return {
                ...state, grid_view: true
            }
        }
        case SET_LISTVIEW: {
            return {
                ...state, grid_view: false
            }
        }
        case UPDATE_SORT: {
            return {
                ...state, sort: action.payload
            }
        }
        case SORT_PRODUCTS: {
            const {sort, filter_products} = state
            let temp_products =[...filter_products]
            if(sort === "price-lowest") {
                temp_products = temp_products.sort((a, b) => a.price - b.price)
            }
            if(sort === "price-highest") {
                temp_products = temp_products.sort((a, b) => b.price - a.price)
            }
            if(sort === "name-a") {
                temp_products = temp_products.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if(sort === "name-z") {
                temp_products = temp_products.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return {
                ...state, filter_products: temp_products
            }
        }
        case UPDATE_FILTERS: {
            const { name, value } = action.payload
            return {
                ...state, filters: { ...state.filters, [name]: value }
            }
        }
        case FILTER_PRODUCTS: {
            const { all_products } = state
            const { text, category, company, color, price, shipping } = state.filters

            let temp_products = [...all_products]
            if (text) {
                temp_products = temp_products.filter((product) => {
                    return product.name.toLowerCase().startsWith(text)
                })
            }
            if (category !== 'all') {
                temp_products = temp_products.filter((product) => {
                    return product.category === category
                })
            }
            if (company !== 'all') {
                temp_products = temp_products.filter((product) => {
                    return product.company === company
                })
            }
            if (color !== 'all') {
                temp_products = temp_products.filter((product) => {
                    return product.colors.find((c) => c === color)
                })
            }
            // Price

            temp_products = temp_products.filter((product) => product.price <= price)
            // Shipping
            if (shipping) {
                temp_products = temp_products.filter((product) => {
                    return product.shipping === true
                })
            }

            return {
                ...state, filter_products: temp_products
            }
        }
        case CLEAR_FILTERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'all',
                    company: 'all',
                    color: 'all',
                    price: state.filters.max_price,
                    shipping: false,
                }
            }
        }

        default:
            throw new Error("Invalid action ")
    }
})

export default filter_reducer;