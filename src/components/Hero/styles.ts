import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  max-width: 50%;
  border-radius: 50%;
`;

export const HeroInfo = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
`;
