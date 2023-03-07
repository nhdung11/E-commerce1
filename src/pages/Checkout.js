import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
const Checkout = () => {
    const { cart } = useCartContext()
    if (cart.length < 1) {
        return (
            <main>
                <PageHero title="checkout" />
                <Wrapper>
                    <div className="empty_cart">
                        <h2>your cart is empty</h2>
                        <Link to='/products' className="btn">fill it</Link>
                    </div>
                </Wrapper>
            </main>
        )
    }
    return (
        <Wrapper>
            <PageHero title="checkout" />
            <h3 className="checkout-content">This page is being processed, please come back later</h3>
        </Wrapper>

    )
}

const Wrapper = styled.section`
    min-height: calc(100vh - 10rem);
    .empty_cart {
        text-align: center;
    }
    .empty_cart h2{
        margin-bottom: 1rem;
        color: var(--clr-grey-1);
    }
    .checkout-content {
        text-align: center;
        color: var(--clr-grey-1);
        text-transform: none;
    }
`

export default Checkout;