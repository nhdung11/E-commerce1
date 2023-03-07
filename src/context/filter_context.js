import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from "./products_context";
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    CLEAR_FILTERS
} from "../actions";
const initState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },

}
const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const { products } = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
        // dispatch({type: FILTER_PRODUCTS})
    }, [products])
    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS})
    }, [products, state.filters])
    useEffect(() => {
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort])
    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW })
    }
    const setListView = () => {
        dispatch({ type: SET_LISTVIEW })
    }
    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        if(name === 'category') {
            value = e.target.textContent;
        }
        if(name === 'company') {
            value = e.target.value;
        }
        if(name === 'color') {
            value = e.target.dataset.color;
        }

        if(name === 'price') {
            value = Number(value)
        }
        if(name === 'shipping'){
            value = e.target.checked
        }
        console.log(name, value)
        dispatch({type: UPDATE_FILTERS, payload: {name, value}})
    }
    const updateSort = (e) => {
        // let name = e.target.name
        let value = e.target.value
        dispatch({type: UPDATE_SORT, payload: value})
    }
    const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS})
    }
    
    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, updateFilters, updateSort, clearFilters }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}