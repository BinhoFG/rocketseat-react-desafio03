import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

export const HomeContent = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
`

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.13rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    display: flex;

    input {
      flex: 1;
      margin-top: 0.75rem;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`
