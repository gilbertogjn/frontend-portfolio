import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 2rem;
      font-weight: normal;
    }

    ul {
      font-size: 1.5rem;
      li {
      }
    }

    .menu-icon {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 1rem;

    .container {
      display: block;

      .menu-icon {
        display: inline;
        cursor: pointer;
        font-size: 1.6rem;
      }

      .mobile-row {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .menu {
        display: none;

        &.active {
          width: 100%;
          display: block;

          ul {
            display: block;
          }
        }
      }
    }
  }
`;
