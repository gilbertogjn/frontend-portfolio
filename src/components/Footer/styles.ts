import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;

  nav {
    width: auto;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textGray};
  }
`;
