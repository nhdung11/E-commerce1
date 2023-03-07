import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helps";
import { useUserContext } from "../context/user_context";
const CartTotal = () => {
    const { total_amount, shipping_fee } = useCartContext()
    const { myUser, loginWithRedirect } = useUserContext()

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>subtotal: <p>{formatPrice(total_amount)}</p></h5>
                    <span>shipping: <p>${shipping_fee}</p></span>
                    <hr />
                    <h4>order total: <p>{formatPrice(total_amount + shipping_fee * 100)}</p></h4>
                </article>
                {myUser ? 
                <Link to="/checkout" className="btn btn-payment">check out</Link>
                : <button className=" btn btn-payment" onClick={() => loginWithRedirect()}>log in</button>
                }
            </div>
        </Wrapper>
       
    )
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    article {
        border: 1px solid var(--clr-grey-8);
        padding: 1.5rem 3rem;
        border-radius: var(--radius);
    }
    h5, span, h4{
        display: grid;
        grid-template-columns: 200px 1fr;
        margin-bottom: 1rem;
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        color: var(--clr-grey-1)
    }
    span{
        margin-bottom: 1.25rem;
        color: var(--clr-grey-3);
    }
    h4{
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 0.75rem;
    }
    .btn-payment{
        width: 100%;
        font-weight: 600;
        margin-top: 1rem;
        text-align: center;
        padding: 0.375rem 0;

    }
    @media (min-width: 768px){
        justify-content: flex-end;     
    }
`

export default CartTotal;