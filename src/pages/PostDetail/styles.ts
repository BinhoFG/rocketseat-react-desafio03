import styled from 'styled-components'

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

export const PostDetailCard = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }

  main {
    display: flex;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }
  }

  footer {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const PostDetailContent = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
`
