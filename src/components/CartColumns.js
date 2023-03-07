import React from "react";
import styled from "styled-components";


const CartColumns = () => {
    return (
        <Wrapper>
            <div className="content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span> </span>
            </div>
            <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: none;
    hr{
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
    @media (min-width: 768px) {
        display: block;
        .content{
            display: grid;
            grid-template-columns: 316px 1fr 1fr 1fr auto;
            column-gap: 1rem;
            justify-items: center;
            h5{ 
                color: var(--clr-grey-5);
                font-weight: 400;
            }
            span{
                width: 2rem;
                height: 2rem;
            }
        }
    }
`

export default CartColumns;