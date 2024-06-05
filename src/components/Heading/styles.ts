import styled from "styled-components";
import { colors } from "../../styles";

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  p {
    color: ${colors.textGray};
  }
`;
