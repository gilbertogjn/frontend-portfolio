import styled from "styled-components";
import { colors } from "../../styles";

export const HeroContainer = styled.section`
  width: 100%;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 64vh;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const HeroImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .text_p1,
  .text_p2,
  h1 {
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

export const BtnsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 2rem;
`;
