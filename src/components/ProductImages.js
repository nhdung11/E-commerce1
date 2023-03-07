import React from "react";
import { useState } from "react";
import styled from "styled-components";


const ProductImages = ({ images = [{ url: ' ' }] }) => {
    const [main, setMain] = useState(images[0])
    return (
        <Wrapper>
            <section >
                <img src={main.url} alt={main.filename} className="main"></img>
                <div className="gallery">
                    {images.map((image, index) => {
                        return (
                            <img
                                src={image.url}
                                alt={image.filename}
                                key={index}
                                className = {image.url === main.url ? 'active' : 'null'}
                                onClick = {() => {setMain(images[index])}}
                            />
                        )
                    })}
                </div>
            </section>
        </Wrapper>

    )
}

const Wrapper = styled.section`
    .main {
        height: 300px;
    }
    img{
        display: block;
        width:100%;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-top: 1rem;
        column-gap: 1rem;
        img {
            height: 50px;
        }
    }
    .active {
        border: 2px solid var(--clr-primary-5)
    }

    @media (min-width: 992px) {
        .main {
            height: 500px;
        }
        .gallery img{
            height: 75px;
        }
    }
`
export default ProductImages;