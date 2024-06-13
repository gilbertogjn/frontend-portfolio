import styled from "styled-components"
import { colors } from "../../styles"

export const LinkContainer = styled.a`
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${colors.borderGray};
        border-bottom: 2px solid ${colors.borderGray};
        padding-bottom: 0.5rem;
    }
`