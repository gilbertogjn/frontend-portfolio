import styled from "styled-components"

export const ScrollLink = styled.a`
    position: absolute;
    bottom: 0rem;
    right: 2rem;
    cursor: pointer;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        .icon {
            font-size: 1.5rem;
        }
    }
`