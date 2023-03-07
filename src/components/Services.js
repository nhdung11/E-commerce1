import React from "react";
import styled from "styled-components";

import { services } from "../utils/constants";
const Services = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <article className="header">
                    <h3>Custom Furniture
                        <br />
                        Built Only For You
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                    </p>
                </article>
                <div className="services-center" >
                    {services.map((service) => {
                        const {id, icon, title, text} = service;
                        return(
                            <article key={id} className= "service">
                                <span className="icon">{icon}</span>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 5rem 0;
    background: var(--clr-primary-10);
    h3, h4{
        color: var(--clr-primary-1);
    }
    h3{
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    p{
        line-height: 1.8;
        color: var(--clr-primary-3);
        font-size: 0.875rem;

    }
    .service {
        background: var(--clr-primary-7);
        padding: 2rem 2.5rem;
        text-align: center;
        border-radius: var(--radius);
        h4 {
            font-size: 1.25rem;
        }
        p {
            // font-size: 0.875rem;
            text-align: center;
            color: var(--clr-primary-3);
        }
      }
    .services-center{
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;
    }
    .icon{
        display:grid;
        place-items: center;
        margin: 0 auto 1rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: var(--clr-primary-10);
        color:var(--clr-primary-1);
        svg {
            font-size: 2rem;
        }
    }

    @media (min-width: 576px) {
        .services-center{
            display:grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 992px) {
        h3{
            font-size: 2rem;
        }
        .header{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1280px){
        padding: 0;
        .section-center{
            transform: translateY(5rem);
        }
    }

`
export default Services