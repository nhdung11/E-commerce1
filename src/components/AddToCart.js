import React from "react";
import { useState } from "react";
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext()
    const { id, colors, stock } = product;
    const [mainColor, setMainColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)
    const increase = () => {
        let oldAmount = amount
        if (oldAmount >= stock) {
            return oldAmount = stock;
        }
        return setAmount(oldAmount + 1)
    }
    const decrease = () => {
        let oldAmount = amount
        if (oldAmount <= 1) {
            return oldAmount = 1
        }
        return setAmount(oldAmount - 1)
    }
    return (
        <Wrapper>
            <section>
                <div className="colors">
                    <span>colors: </span>
                    <div>
                        {colors.map((color, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{ background: color }}
                                    className={mainColor === color ? "color-btn active" : "color-btn"}
                                    onClick={() => setMainColor(color)}
                                >
                                    {mainColor === color ? <FaCheck /> : null}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="btn-container">
                    <div className="amount-btn">
                        <button className='button' onClick={() => decrease()}>
                            <FaMinus />
                        </button>
                        <h2>{amount}</h2>
                        <button className='button' onClick={() => increase()}>
                            <FaPlus />
                        </button>
                    </div>
                    <Link to='/cart' className="btn" onClick={() => addToCart(id, mainColor, amount, product)}>
                        add to cart
                    </Link>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 2rem; 
    .colors {
        display: grid;
        grid-template-columns: 7.75rem 1fr;
        align-items: center;
        margin-bottom: 1.25rem;
        text-transform: capitalize;
        color: var(--clr-grey-3);
        span{
            font-weight: 700;
        }
    }
    .colors div{
        display: flex;
    }
    .color-btn {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: none;
        margin-right: 0.5rem; 
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items:center;
        justify-content: center;
        svg{
            color: var(--clr-white);
            font-size: 0.75rem;
        }
    }
    .active {
        opacity: 1;
    }

    .btn-container {
        
    }
    .amount-btn {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 8.75rem;
        place-items: center;
    }
    .button{
        background: transparent;
        border: transparent;
        cursor: pointer;
        padding: 1rem 0;
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items:center;
        justify-content: center;
    }
`

export default AddToCart