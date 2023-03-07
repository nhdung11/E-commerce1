import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
    const { CloseSidebar } = useProductsContext()
    const { total_items } = useCartContext()
    const {loginWithRedirect, logout, myUser} = useUserContext()

    return (
        <Wrapper className="cart-btn-wrapper" onClick={() => CloseSidebar()}>
            <Link to='/cart' className="cart-btn">
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{total_items}</span>
                </span>
            </Link>
            {myUser ?
                <button className="auth-btn" type="button" onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                    Logout <FaUserMinus/>
                </button>
                :
                <button className="auth-btn" type="button" onClick={() => loginWithRedirect()}>
                    Login <FaUserPlus />
                </button>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;
    .cart-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--clr-grey-1);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        margin-right: 1rem;
    }
    .cart-container{
        display: flex;
        align-items: center;
        position: relative;
        svg{
            font-size: 1.6rem;
            margin-left: 5px;
        }
    }
    .cart-value {
        position: absolute;
        top: -10px;
        right: -16px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: var(--clr-primary-5);
        font-size: 0.75rem;
        color: var(--clr-white);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .auth-btn{
        display: flex;
        align-items: center;
        color: var(--clr-grey-1);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        svg {
            margin-left: 5px;
        }
    }
`
export default CartButtons