import styled from "styled-components";
import { colors } from "../../styles";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;

  img {
    width: 400px;
    height: 400px;
    border-radius: 2rem;
  }

  @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;

      img {
        width: 60%;
        height: auto;
      }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const AboutCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid ${colors.textGray};
  border-radius: 2rem;

  .icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;
