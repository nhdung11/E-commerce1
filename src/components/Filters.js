import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValue, formatPrice } from "../utils/helps";
const Filters = () => {
    const {
        all_products,
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            shipping
        },
        updateFilters,
        clearFilters
    } = useFilterContext()

    const categories = getUniqueValue(all_products, 'category')
    const companies = getUniqueValue(all_products, 'company')
    const colors = getUniqueValue(all_products, 'colors')
    return (
        <Wrapper>
            <form onSubmit={(e) => e.preventDefault()}>
                {/* SEARCH */}
                <div className="form-control">
                    <input
                        type='text'
                        name='text'
                        placeholder="search"
                        className="search-input"
                        value={text}
                        onChange={updateFilters}
                    />
                </div>

                {/* CATEGORY */}
                <div className="form-control">
                    <h5>category</h5>
                    <div className="category">
                        {categories.map((item, index) => {
                            return <button
                                key={index}
                                type='button'
                                name='category'
                                onClick={updateFilters}
                                className={`${category === item ? 'active' : null}`}
                            >{item}</button>
                        })}
                    </div>
                </div>

                {/* COMPANY */}
                <div className="form-control">
                    <h5>company</h5>
                    <select
                        name='company'
                        className="company"
                        value={company}
                        onChange={updateFilters}
                    >
                        {companies.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>

                {/* COLORS */}
                <div className="form-control">
                    <h5>colors</h5>
                    <div className="colors">
                        {colors.map((item, index) => {
                            if (item === 'all') {
                                return <button
                                    key={index}
                                    name='color'
                                    type="button"
                                    className={`${color === 'all' ? 'btn-all active' : 'btn-all'}`}
                                    onClick={updateFilters}
                                    data-color='all'
                                >{item}</button>
                            }
                            return <button
                                key={index}
                                type='button'
                                name="color"
                                // className ='btn-color'
                                className={`${color === item ? 'btn-color active' : 'btn-color'}`}
                                style={{ background: item }}
                                onClick={updateFilters}
                                data-color={item}
                            >
                                {color === item ? <FaCheck /> : null}
                            </button>
                        })}
                    </div>
                </div>

                {/* PRICE */}
                <div className="form-control">
                    <h5>Price</h5>
                    <p className="price">{formatPrice(price)}</p>
                    <input
                        type='range'
                        name='price'
                        min={min_price}
                        max={max_price}
                        value={price}
                        onChange={updateFilters}
                    ></input>
                </div>

                {/* Shipping */}
                <div className="form-control shipping">
                    <label htmlFor='shipping'>Free shipping</label>
                    <input type='checkbox' name="shipping" id="shipping" onChange={updateFilters} checked = {shipping}></input>
                </div>
                {/* Clear */}
                <div className="form-control">
                    <button type="button"
                        className="btn-clear"
                        onClick={clearFilters}
                    >clear filters</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .form-control{
        margin-bottom: 1.25rem;
        h5{
            margin-bottom: 0.5rem;
        }
    }
    .search-input {
        padding: 0.5rem;
        border-radius: var(--radius);
        background: var(--clr-grey-10);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder{
        text-transform: capitalize;
    }
    button {
        display: block;
        background: transparent;
        border-color: transparent;
        margin: 0.25rem 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        color: var(--clr-grey-5);
        cursor: pointer;
    }
    .active {
        border-bottom: 1px solid var(--clr-grey-5);
    }
    .company {
        background: var(--clr-grey-10);
        padding: 0.25rem;
        border-color: transparent;
        border-radius: var(--radius);
    }
    .colors {
        display: flex;
        align-items: center;
    }
    .btn-all {
        margin-right: 0.5rem;
    }
    .btn-color {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        opacity: 0.5;
        margin-right: 0.5rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }
    .active {
        opacity: 1;
    }
    .price{
        color: var(--clr-grey-3);
    }
    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        text-transform: capitalize;
        column-gap: 0.5rem;
        font-size: 1rem;
        align-items: center;
        color: var(--clr-grey-3);
        input{
            width: 0.8rem;
            height: 0.8rem;
        }
    }
    .btn-clear {
        background-color: var(--clr-red-dark);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        color: var(--clr-white);
        font-weight: 600;
    }

    `
export default Filters