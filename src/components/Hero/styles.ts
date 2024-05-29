import styled from "styled-components";
import { colors } from "../../styles";

export const HeroContainer = styled.section`
  width: 100%;

  .container {
    display: flex;
    justify-content: center;
    gap: 5rem
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .text_p1, .text_p2, h1 {
    font-weight: 600;
  }

  h1 {
    font-size: 3rem;
  }

  .text_p2 {
    font-size: 1.75rem;
    color: ${colors.textGray};
  }
`;
