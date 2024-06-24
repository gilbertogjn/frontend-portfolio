import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
