import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { single_product_url as single_url } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import { PageHero } from "../components";
import {Loading, Error, ProductImages, Stars, AddToCart} from "../components";
import { formatPrice } from "../utils/helps";

const SingleProduct = () =>{ 
    const {id} = useParams();
    const 
    {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct
    } = useProductsContext();

    useEffect(() => {
        fetchSingleProduct(`${single_url}${id}`)
    }, [id])
    const {
        stock,
        price,
        images,
        reviews,
        stars,
        name,
        description,
        company,
        id: sku
    } = product;
    if(loading) {
        return(
            <Loading/>
        )
    }
    if(error){
        return(
            <Error/>
        )
    }
    return (
        <Wrapper>
            <PageHero products="products" title={name}/>
            <div className="section-center section">
                <Link to="/products" className="btn ">back to products</Link>
                <div className="product-center">
                    <ProductImages images={images}/>
                    <div className="content">
                        <h2>{name}</h2>
                        <Stars stars= {stars} reviews = {reviews}/>
                        <h5>{formatPrice(price)}</h5>
                        <p className="desc">{description}</p>
                        <p className="info">
                            <span>Available:</span>
                            {stock > 0 ? "In stock" : "Out of stock"}
                        </p>
                        <p className="info">
                            <span>SKU:</span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Brand:</span>
                            {company}
                        </p>
                        <hr/>
                        {stock > 0 && <AddToCart product= {product}/>}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .content {
        h2{ 
            font-size: 2rem;
            color: var(--clr-grey-2);
            margin-bottom: 0.75rem;
        }
        h5{
            font-size: 0.875rem;
            color: var(--clr-primary-5);
        }
    }
    .desc {
        color: var(--clr-grey-3);
        line-height: 2;
        font-size: 0.875rem;
        // max-width: 45rem;
        margin-bottom: 1.25rem;
    }
    .info{
        display: grid;
        grid-template-columns: 7.75rem 1fr;
        text-transform: capitalize;
        margin-bottom: 1.25rem;
        color: var(--clr-grey-3);
        span{
            font-weight: 700;
        }
    }
    @media (min-width: 992px) {
        .product-center{
            grid-template-columns: 1fr 1fr;
        }
        .content{
            h2{
                font-size: 2.5rem;
            }
            h5{
                font-size: 1.25rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
`
export default SingleProduct;