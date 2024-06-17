import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${colors.borderGray};
    background-color: ${colors.bgWhite};
    border-radius: 2rem;
    padding: 2rem;
    gap: 1rem;

    .title-bar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    span {
        font-size: 1.5rem;
        display: flex;
        gap: 4px;
    }

    p {
        width: 100%;
        color: ${colors.textGray};
        text-align: left;
    }

    img {
        width: 100%;
        max-width: 300px;
        max-height: 300px;
        border-radius: 2rem;
        border: 1px solid ${colors.borderGray};
        margin-bottom: 0.5rem;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }
`