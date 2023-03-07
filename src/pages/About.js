import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg"
const About = () => {
    return (
        <main>
            <PageHero title="About" />
            <Wrapper className="section-center">
                <img src={aboutImg} alt="Nice desk"></img>
                <article>
                    <div className="about-header">
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, 
                    delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. 
                    Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt 
                    sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </article>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    padding: 80px 0;
    img {
        width:100%;
        height: 500px;
        object-fit: cover;
        border-radius: var(--radius);
    }
    .about-header {
        letter-spacing: var(--spacing);
        
        h2{
            font-size: 2rem;
            color: var(--clr-grey-1);
        }
    }
    .underline {
        width: 5.5rem;
        height: 0.25rem;
        background: var(--clr-primary-5);
    }
    p{
        font-size: 0.875rem;
        color: var(--clr-grey-5);
        line-height: 2;
        margin: 2rem auto 0px;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        .about-header {
            h2 {
                font-size: 2.5rem;
            }
        }
    }
`

export default About
