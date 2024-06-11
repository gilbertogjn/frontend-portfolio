import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid ${colors.borderGray};
    background-color: ${colors.bgWhite};
    border-radius: 2rem;
    padding: 2rem;
    gap: 1rem;

    h3 {
        font-size: 1.7rem;
        font-weight: 600;
    }

    img {
        width: 300px;
        height: 350px;
        border-radius: 2rem;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }
`