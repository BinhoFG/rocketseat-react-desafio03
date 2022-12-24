import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostType } from '../Home'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Post {
  title: string
  content: string
  createdAt: string
  comments: string
  url: string
  githubUsername: string
}

export function PostDetail() {
  const { postId } = useParams()
  const [post, setPost] = useState({} as Post)

  async function fetchPost() {
    const response = await api.get(
      `/repos/BinhoFG/github-blog-issues/issues/${postId}`,
    )

    const postObj = {
      title: response.data.title,
      content: response.data.body,
      createdAt: formatDistanceToNow(new Date(response.data.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
      comments: response.data.comments,
      url: response.data.html_url,
      githubUsername: response.data.user.login,
    }

    setPost(postObj)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            VOLTAR
          </NavLink>
          <a href={post.url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          <h1>{post.title}</h1>
        </main>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.githubUsername}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.createdAt}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {post.comments} comentários
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
