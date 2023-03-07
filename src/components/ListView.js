import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helps";

const ListView = ({products}) => {
    return (
        <Wrapper>
            {products.map((product) => {
                const {id, name, price, image, description} = product;
                 return (
                    <article key={id}>
                        <img src={image} alt={name}></img>
                        <div>
                            <h4>{name}</h4>
                            <h5 className="price">{formatPrice(price)}</h5>
                            <p>{description.substring(0, 150)}...</p>
                            <Link to ={`/products/${id}`} className='btn'>Detail</Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    row-gap: 3rem;

    img {
        display: block;
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius);
        margin-bottom: 1rem;
    }

    h4{
        color: var(--clr-grey-1);
        margin-bottom: 0.5rem;
    }
    .price{
        color: var(--clr-primary-6);
        margin-bottom: 0.75rem;
    }
    p{
        margin-bottom: 1rem;
        color: var(--clr-grey-5);
    }
    .btn{
        padding: 0.25rem 0.5rem;
        font-size: 0.5rem;
    }
    @media (min-width: 992px) {
        article {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 2rem;
            align-items: center;
        }
    }
`
export default ListView