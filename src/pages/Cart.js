import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "../components";
import { useCartContext } from "../context/cart_context";
const Cart = () => {
    const { cart } = useCartContext()
    console.log(cart)
    if (cart.length < 1) {
        return (
            <Wrapper className="page">
                <div className="empty_cart">
                    <h2>your cart is empty</h2>
                    <Link to='/products' className="btn">fill it</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <main>
            <PageHero title='cart' />
            <Wrapper className="section-center section">
                <CartContent />
            </Wrapper>

        </main>
    )
}

const Wrapper = styled.section`
    .empty_cart {
        text-align: center;
    }
    .empty_cart h2{
        margin-bottom: 1rem;
    }
`
export default Cart