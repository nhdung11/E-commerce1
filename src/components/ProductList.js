import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
    const {filter_products: products, grid_view} = useFilterContext()
    if(products.length < 1) {
        return (
            <h3>Sorry, no product match your search</h3>
        )
    }
    if(grid_view === false) {
        return <ListView products={products}/>
    }
    return (
        <GridView products={products}/>
    )
}


export default ProductList