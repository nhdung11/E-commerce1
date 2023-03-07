import React from "react";
import styled from "styled-components";

import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>
                    Design your
                    <br />
                    comfort zone
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, at sed omnis corporis doloremque possimus velit!
                    Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                </p>
                <Link to='/products' className="btn btn-hero">
                    shop now
                </Link>
            </article>
            <article className="img-container">
                <img src={heroBcg} alt="nice table" className="main-img"></img>
                <img src={heroBcg2} alt="person working" className="accent-img"></img>

            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 60vh;
    display: grid;
    place-items: center;
    .content h1{
        font-size: 2.5rem;
        color: var(--clr-grey-1);
    }
    p {
        line-height: 2;
        color: var(--clr-grey-5);
        margin-bottom: 2rem;
        font-size: 1rem;
        max-width: 45em;
    }
    .btn-hero{
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
    
    .img-container {
        display: none;
    }
    @media (min-width: 992px) {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        .img-container {
            display: block;
            position: relative;
        }
        .img-container::before {
            content: "";
            position: absolute;
            width: 10%;
            height: 80%;
            bottom: 0%;
            left: -8%;
            border-radius: var(--radius);
            background-color: var(--clr-primary-8);

          }
        .main-img {
            width: 100%;
            height: 550px;
            object-fit: cover;
            position: relative;
            display: block;
            border-radius: var(--radius);
        }

        .accent-img{
            position: absolute;
            bottom: 0;
            left: 0;
            width:250px;
            transform: translateX(-50%);
            border-radius: var(--radius);
        }
    }
`

export default Hero