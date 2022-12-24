import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostType } from '../..'
import { PostContainer } from './styles'

export function Post({ title, content, number, createdAt }: PostType) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostContainer>
      <header>
        <strong>{title}</strong>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{content}</p>
      </main>
    </PostContainer>
  )
}
