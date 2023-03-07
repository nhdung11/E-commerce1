import React from "react";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa"
import { formatPrice } from "../utils/helps";
import { Link } from "react-router-dom";


const Product = ({id, name, image, price}) => {
    return (
        <Wrapper>
            <article>
                <div className="container">
                    <img src={image} alt="Feature Products"></img>
                    <Link to={`/products/${id}`} className= "search-icon" >
                        <FaSearch/>
                    </Link>
                </div>
                <footer>
                    <h5>{name}</h5>
                    <p>{formatPrice(price)}</p>
                </footer>
            </article>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .container {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius);
    }
    .container:hover{
        .search-icon{
            opacity:1;
        }
        img {
            opacity: 0.5;
        }
    }
    .search-icon{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
        background: var(--clr-primary-5);
        transition: var(--transition);
        opacity: 0;
        cursor: pointer;
        svg{
            color: var(--clr-white);
            font-size: 1.25rem;
        }
    }
    
    img{
        width: 100%;
        display: block;
        height: 14rem;
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition);
    }
    footer{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    
    footer h5{
        font-size: 0.875rem;
        font-weight: 400;
        margin-bottom: 0px;
    }
    footer p{
        color: var(--clr-primary-5);
        letter-spacing: var(--spacing);
    }

`
export default Product