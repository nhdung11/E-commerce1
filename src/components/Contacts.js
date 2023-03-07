import React from "react";
import styled from "styled-components";

const Contacts = () => {
    return (
        <Wrapper>
            <div className="section-center" >
                <h3>Join our newsletter and get 20% off</h3>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </p>
                    <form className="contact-form">
                        <input className="form-input" type="email" placeholder="Enter email" />
                        <button type="submit" className="btn-submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 5rem 0;
    h3{
        color: var(--clr-grey-1);
        font-size: 1.5rem;
        text-transform: none;
        margin-bottom: 1rem;
    }
    .content {
        p{
            color: var(--clr-grey-5);
            line-height: 2;
            max-width: 45em;
            margin-bottom: 1rem;
        }
    }

    .contact-form{
        display: grid;
        grid-template-columns: 1fr auto;
        max-width: 500px;
    }
    .form-input, .btn-submit{
        border-color: var(--clr-black);
        font-size: 1rem;
        padding: 0.5rem 1rem;  
    }
    .form-input{
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-right: none;

    }

    .form-input::placeholder {
        color: var(--clr-black);
        text-transform: capitalize;
      }
    .btn-submit{
        background: var(--clr-primary-5);
        text-transform: none;
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .btn-submit:hover {
        color: var(--clr-white);
        transition: var(--transition);
        cursor: pointer;
    }
    @media (min-width: 992px) {
        padding: 15rem 0;
        h3{
            font-size: 1.75rem;
        }
        .content{
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 8rem;
            margin-top: 1rem;
            p{
                margin: 0;
            }
        }
    }
`
export default Contacts