import styled from "styled-components";
import { colors } from "../../styles";

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
  }

  p {
    color: ${colors.textGray};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;

    h2 {
      font-size: 2.5rem;
    }
  }
`;
