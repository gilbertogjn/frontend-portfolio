import styled from "styled-components";
import { colors } from "../../styles";

export const ButtonContainer = styled.button`
  background-color: ${colors.textWhite};
  color: ${colors.textBlack};
  padding: 1rem;
  border-radius: 2rem;
  border: 0.1rem solid ${colors.textGray};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.btnGray};
    color: ${colors.textWhite};
  }

  &.contact {
    background-color: ${colors.btnGray};
    color: ${colors.textWhite};
    cursor: pointer;

    &:hover {
      background-color: ${colors.textBlack};
      color: ${colors.textWhite};
    }
  }

  &.project {
    width: 126px;
  }
`;
