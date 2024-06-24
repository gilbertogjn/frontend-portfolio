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
    }

    .menu-icon {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;

    .container {
      display: block;
      position: relative;

      .logo {
        font-size: 1.5rem;
      }

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
        opacity: 0;
        transition: all 0.2s;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 10;

        ul {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          gap: 0rem;

          li {
            padding: 0 0 1rem;
          }
        }

        &.active {
          width: 100%;
          display: block;
          opacity: 1;
        }
      }
    }
  }
`;
