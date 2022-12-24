import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProfileContainer } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface UserInfo {
  imgUrl: string
  name: string
  bio: string
  githubUsername: string
  company: string
  followers: number
  profileUrl: string
}

export function Profile() {
  const [userInfo, setUserInfo] = useState({} as UserInfo)

  async function fetchUserInfo() {
    const response = await api.get('users/BinhoFG')

    // eslint-disable-next-line camelcase
    const { avatar_url, name, bio, login, company, followers, html_url } =
      response.data

    const userInfoObj = {
      // eslint-disable-next-line camelcase
      imgUrl: avatar_url,
      name,
      bio,
      githubUsername: login,
      company,
      followers,
      // eslint-disable-next-line camelcase
      profileUrl: html_url,
    }

    setUserInfo(userInfoObj)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <img src={userInfo.imgUrl} alt="" width="148px" height="148px" />
      <div className="profile">
        <header>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.profileUrl} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          <p>{userInfo.bio}</p>
        </main>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userInfo.githubUsername}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {userInfo.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {userInfo.followers} seguidores
          </span>
        </footer>
      </div>
    </ProfileContainer>
  )
}
