import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helps";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ amount, id, color, image, name, price, max }) => {
    const {removeItem, toggleAmount} = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    return (
        <Wrapper>
            <div className="title">
                <img src={image} alt={name}></img>
                <div>
                    <h5 className="name">{name}</h5>
                    <p className="color">color: <span style={{ background: color }}></span>
                    </p>
                    <h5 className="price-small">{formatPrice(price)}</h5>

                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <div className="amounts-btn">
                <button className="button" onClick={() => decrease()}><FaMinus /></button>
                <h2>{amount}</h2>
                <button className="button" onClick={() => increase()}><FaPlus /></button>
            </div>
            <h5 className="sub-total">{formatPrice(price*amount)}</h5>
            <button className="trash-btn" onClick={()=> removeItem(id)}><FaTrash /></button>
        </Wrapper>
    )

}


const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 200px auto auto;
    column-gap: 1rem;
    justify-items: center;
    align-items: center;
    margin-bottom: 3rem;
    .title{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 100px 200px;
        grid-template-rows: 75px;
        gap: 1rem;
        align-items: center;
    }
    
    .title img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .name {
        font-size: 0.85rem;
    }
    .color{
        display: flex;
        align-items: center;
        justify-content: start-flex;
        font-size: 0.85rem;
        text-transform: capitalize;
        color: var(--lr-grey-5);
        letter-spacing: var(--spacing);
    }
    .color span{
        width: 0.75rem;
        height: 0.75rem;
        border-radius: var(--radius);
        margin-left: 0.5rem;
    }
    .price-small{
        color:var(--clr-primary-5);
    }
    .price{
        display: none;
        font-size: 1rem;
        color: var(--clr-primary-5);
        font-weight: 400;
    }
    
    .amounts-btn {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }
    .amounts-btn h2{
        font-size: 1.5rem;
        color: var(--clr-grey-2);
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
        svg{
            width: 1.5rem;
            height: 1rem;
            font-size: 1rem;
        }
    }
    .sub-total{
        display: none;
    }
    
    .trash-btn {
        border-color: transparent;
        background: var(--clr-red-dark);
        border-radius: var(--radius);
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.75rem;
        color: var(--clr-white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr auto;
        .sub-total {
            display: block;
            font-size: 1rem;
            color: var(--clr-grey-5);
            font-weight: 400;
        }
        .price-small{
            display: none;
        }
        .price{
            display: block;
        }
    }
`

export default CartItem;