import styled from "styled-components";
import { colors } from "../../styles";

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ExperienceCard = styled.div`
  padding: 3rem;
  border: 1px solid ${colors.textGray};
  border-radius: 2rem;
  width: 100%;

  h3 {
    color: ${colors.textGray};
    font-size: 1.75rem;
    margin-bottom: 2rem;
    font-weight: 600;
    margin-top: -10px;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: flex-start;
    text-align: left;
  }

  .icon {
    font-size: 1.5rem;
    margin-top: 6px;
    margin-right: 22px;
  }

  @media screen and (max-width: 768px) {
    padding: 2.5rem;

    .icons {
      grid-template-columns: repeat(2, max-content);
      gap: 2rem;
      justify-content: space-between;
    }

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      color: ${colors.textGray};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
