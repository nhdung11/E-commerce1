import React from "react";
import Product from "./Product";
import styled from "styled-components";
const GridView = ({ products }) => {
    return (
        <Wrapper>
            <div className="products_container">
                {products.map((product, index) => {
                    return (
                        <Product key={index} {...product} />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    img {
        height: 175px;
    }
    .products_container{
        display: grid;
        gap: 2rem 1.5rem;
    }
    @media (min-width: 992px) {
        .products_container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1170px) {
        .products_container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

`

export default GridView;