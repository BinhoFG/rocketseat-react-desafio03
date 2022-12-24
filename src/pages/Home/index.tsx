import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { NavLink } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer, HomeContent, PostList, SearchSection } from './styles'

export interface PostType {
  title: string
  content: string
  number: number
  createdAt: string
}

const newSearchSchema = z.object({
  query: z.string().max(30),
})

type newSearchType = z.infer<typeof newSearchSchema>

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [postCount, setPostCount] = useState(0)

  const { register, handleSubmit } = useForm<newSearchType>({
    resolver: zodResolver(newSearchSchema),
  })

  async function fetchPosts(query = '' as string) {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:BinhoFG/github-blog-issues`,
    )

    const fetchedPosts = response.data.items.map((item: any) => {
      return {
        title: item.title,
        content: item.body,
        number: item.number,
        createdAt: item.created_at,
      }
    })

    setPostCount(fetchedPosts.length)
    setPosts(fetchedPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  function handleSearchPosts(data: newSearchType, e: any) {
    e.preventDefault()

    fetchPosts(data.query)
  }

  return (
    <HomeContainer>
      <Profile />

      <HomeContent>
        <SearchSection>
          <div className="top">
            <h2>Publicações</h2>
            <span>{postCount} publicações</span>
          </div>
          <form onSubmit={handleSubmit(handleSearchPosts)}>
            <input
              {...register('query')}
              type="text"
              placeholder="Buscar Conteúdo"
            />
          </form>
        </SearchSection>

        <PostList>
          {posts.map((post) => {
            return (
              <NavLink key={post.number} to={`/post/${post.number}`}>
                <Post
                  title={post.title}
                  content={post.content}
                  number={post.number}
                  createdAt={post.createdAt}
                />
              </NavLink>
            )
          })}
        </PostList>
      </HomeContent>
    </HomeContainer>
  )
}
