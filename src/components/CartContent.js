import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const CartContent= () => {
    const {cart, clearCart} = useCartContext()

    return <Wrapper>
        <CartColumns />
        {cart.map((item) => {
            return (
                <CartItem key={item.id} {...item}/>
            )
        } )}
        <hr />
        <div className="link-container">
            <Link to='/products' className="continue-btn btn">
                Continue shopping
            </Link>
            <button className="clear-btn" onClick={() => clearCart()}>clear shopping cart</button>
        </div>
        <CartTotal />
    </Wrapper>
}

const Wrapper = styled.article`
    .link-container{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .continue-btn {
        padding: 0.25rem 0.5rem;
        text-transform: capitalize;
    }
    .clear-btn {
        text-transform: capitalize;
        background: var(--clr-black);
        color: var(--clr-white);
        border-radius: var(--radius);
        padding: 0.25rem 0.5rem;
        border-color: transparent;
        letter-spacing: var(--spacing);
        cursor: pointer;
    }

`

export default CartContent;