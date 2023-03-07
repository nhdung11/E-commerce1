import React from "react";
import styled from "styled-components";
const Loading = () => {
    return(
        <Wrapper>   
            <div className="section-center load-singleProduct">
                <div className="loading"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: calc(100vh - 20rem);
`
export default Loading;