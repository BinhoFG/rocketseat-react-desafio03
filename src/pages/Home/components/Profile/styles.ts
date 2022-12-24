import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 864px;
  padding: 2rem 2.5rem;
  margin: 0 auto;
  margin-top: -5.5rem;

  display: flex;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    margin-right: 2rem;
    border-radius: 8px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    //margin-top: 0.5rem;

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        display: flex;
        gap: 0.5rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme.blue};
        cursor: pointer;
        text-decoration: none;
      }
    }

    footer {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.5rem;
      color: ${(props) => props.theme['base-subtitle']};

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
