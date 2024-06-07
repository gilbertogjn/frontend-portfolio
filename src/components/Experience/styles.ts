import styled from "styled-components";
import { colors } from "../../styles";

export const ExperienceContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 6rem;

    .container {

    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    width: 100%;
`

export const ExperienceCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid ${colors.textGray};
  border-radius: 2rem;

  .icon {
    font-size: 1.5rem;
    margin-top: 6px;
    margin-right: 22px;
  }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 1rem;

    span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: center;
    }
`