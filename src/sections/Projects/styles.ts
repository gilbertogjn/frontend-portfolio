import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 3rem;
`;
