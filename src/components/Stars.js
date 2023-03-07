import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
    const star = Array.from({length: 5}, (_, index) => {
        const number = index + 1;
        return(
            <span key={index}>
                {stars >= number ? <BsStarFill/> :
                stars > index + 0.5 ? <BsStarHalf /> :
                <BsStar />
                }
            </span>
        )
    })
    return (
        <Wrapper>
            <div className="stars">{star}</div>
            <p className="reviews">{`(${reviews} customer reviews)`}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
    font-size: 1rem;
    span{
        margin-right: 0.25rem;
        color: #ffb900;
    }
    p{
        margin-left: 0.5rem;
        color: var(--clr-grey-3);
    }
`

export default Stars;