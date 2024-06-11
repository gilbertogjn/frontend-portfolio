import styled from "styled-components";
import { colors } from "../../styles";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 3rem;

    .links {
        display: flex;
        gap: 1rem;
        border: 1px solid ${colors.borderGray};
        border-radius: 2rem;
    }
`