import styled from "styled-components"
import { colors } from "../../styles"

export const LinkContainer = styled.a`
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${colors.textGray};
        border-bottom: 2px solid ${colors.textGray};
        padding-bottom: 0.5rem;
    }
`