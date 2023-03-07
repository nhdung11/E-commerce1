import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({title, products}) => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>
                    <Link to="/">Home</Link> 
                    {products && <Link to="/products">/Products
                    </Link>} / {title}   
                </h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 20vh;
    background: var(--clr-primary-10);
    display: flex;
    align-items: center;
    color: var(--clr-primary-1);

    a{
        color: var(--clr-primary-4);
        padding: 0.5rem;
    }
    a:hover{
        color: var(--clr-primary-1);
    }
`

export default PageHero;