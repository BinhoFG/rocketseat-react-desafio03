import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-border']};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;

    strong {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      overflow: hidden;
      height: 3.5rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      margin-top: 0.25rem;
    }
  }

  main {
    overflow: hidden;
    height: 7rem;
  }
`
