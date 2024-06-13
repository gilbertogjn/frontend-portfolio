import styled from "styled-components";
import { colors } from "../../styles";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .links {
    display: flex;
    gap: 2.5rem;
    border: 1px solid ${colors.borderGray};
    border-radius: 2rem;
    padding: 2rem;
    font-size: 1.2rem;

    .icon {
      font-size: 1.8rem;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      transition: all 0.3s;

      &:hover {
        color: ${colors.textGray};
      }
    }
  }
`;
