import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
const Sort = () => {
    const {filter_products: products, grid_view, setListView, setGridView, sort, updateSort} = useFilterContext()
    return (
        <Wrapper>
            <div className="btn-menu">
                <button onClick={()=> setGridView()} className = {`${grid_view ? 'active' : null}`}>
                    <BsFillGridFill />
                </button>
                <button onClick={()=> setListView()} className = {`${grid_view ? null: 'active'}`}>
                    <BsList />
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form>
                <label htmlFor="sort">Sort by</label>
                <select 
                    id="sort" 
                    className="sort-input"
                    name="sort"
                    value={sort}
                    onChange={updateSort}
                >
                    <option value='price-lowest'>Price (Lowest)</option>
                    <option value='price-highest'>Price (Highest)</option>
                    <option value='name-a'>Name (A-Z)</option>
                    <option value='name-z'>Name (Z-A)</option>
                </select>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    margin-bottom: 2rem;
    align-items:center;
    .btn-menu {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        button {
            background: transparent;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid var(--clr-black);
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius);

            svg{
                font-size: 1rem;
            }
        }
        .active {
            background-color: var(--clr-black);
            color: var(--clr-white);
        }
    }
    p{
        color: var(--clr-grey-3);
        text-transform: capitalize;
    }

    label {
        text-transform: capitalize;
    }
    .sort-input {
        border-color: transparent;
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
    }
    @media (max-width: 576px){
        .btn-menu {
            width: 50px;
        }
    }
    @media (min-width:768px){
        grid-template-columns: auto auto 1fr auto;
        column-gap: 2rem;

    }
`
export default Sort