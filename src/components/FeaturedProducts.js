import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
const FeaturedProducts = () => {

    const {products_loading: loading, products_error: error, featureProducts } = useProductsContext();
    if(loading) {
        return(
            <Loading/>
        )
    }
    if(error) {
        return(
            <Error/>
        )
    }
    return (
        <Wrapper className="section">
            <section>
                <div className="title">
                    <h2>featured products</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center featured">
                    {featureProducts.slice(2, 5).map((product) => {
                        return (
                            <Product key={product.id} {...product} />
                        )
                    })}
                </div>
                <button className="btn">
                    <Link to='/products'>all products</Link>
                </button>
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    background: var(--clr-grey-10);
    .title {
        display: block;
        text-align:center;
    }
    .underline {
        width: 6rem;
        height: 0.25rem;
        background: var(--clr-primary-5);
        margin-left: auto;
        margin-right: auto;
    }

    .featured{
        margin: 4rem auto;
        display: grid;
        gap: 2.5rem;
    }
    .btn {
        display:block;
        margin: 0px auto;
        text-align: center;
        a {
            color: var(--clr-white);
            transition: var(--transition);
        }
    }
    

    @media (min-width: 576px){
        .featured {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 992px) {
        .section-center{
            width: 95vw;
        }
    }

    
`
export default FeaturedProducts