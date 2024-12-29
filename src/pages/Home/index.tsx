 
/* eslint-disable react-refresh/only-export-components */

import {
  HomeContainer,
  HomeContent,
  ProfileAbout,
  ProfileArea,
  ProfileContent,
  ProfileLinks,
  ProfileTitles,
  RepositoriesArea,
  SearchArea,
  SearchAreaInput,
  SearchAreaTitles,
} from "./styles";

import linkIcon from "../../images/home/profileIcons/linkIcon.svg";
import githubIcon from "../../images/home/profileIcons/githubIcon.svg";
import companyIcon from "../../images/home/profileIcons/companyIcon.svg";
import followersIcon from "../../images/home/profileIcons/followersIcon.svg";

import { Repository } from "./components/Repository";

import { fetchGithubProfile } from "../../services/getGithubProfile";
import { fetchRepositoryIssues } from "../../services/getRepositoryIssue"
import { useState } from "react";




interface GithubProfile {
  avatar_url: string
  name: string
  html_url: string
  login: string
  followers: number
}

interface RepositoryIssue{
  body: string
  title: string
  created_at: Date
  number: number;
}

export const myGithubUser = "paulocesarrodrigues";
export const challengeRepository = "Desafio-BlogGithubAPI-ReactTS";
export const secretKey = import.meta.env.VITE_SECRET_KEY;

const githubProfile: GithubProfile  = await fetchGithubProfile(myGithubUser);

const filteredRepositories: RepositoryIssue[] = await fetchRepositoryIssues({
  query: '',
  username: myGithubUser,
  repo: challengeRepository
})



export function Home() {

  const [searchbarValue, setSearchbarValue] = useState('')

  async function handleInputValueChange(value: string){
    setSearchbarValue(value)
    console.log('valor do searchbarValue:' + searchbarValue)
  }

  return (
    <HomeContainer>
      <HomeContent>
        <ProfileArea>
          <img src={githubProfile?.avatar_url} />
          <ProfileContent>
            <ProfileTitles>
              <h1> {githubProfile?.name} </h1>
              <a href={githubProfile?.html_url}>
                <p>GITHUB</p> <img src={linkIcon} />
              </a>
            </ProfileTitles>

            <ProfileAbout>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia labore odio repudiandae unde quisquam sapiente, ut, reprehenderit soluta rerum, rem deleniti. Ab natus consectetur impedit eligendi, accusantium cumque quod voluptate.</p>
            </ProfileAbout>

            <ProfileLinks>
              <a href={githubProfile?.html_url}>
                <img src={githubIcon} /> <p>{githubProfile?.login}</p>
              </a>
              <div>
                <img src={companyIcon} /> <p>Software engineering at UNISA</p>
              </div>
              <div>
                <img src={followersIcon} />{" "}
                <p>{githubProfile?.followers} seguidores</p>
              </div>
            </ProfileLinks>
          </ProfileContent>
        </ProfileArea>

        <SearchArea>
          <SearchAreaTitles>
            <p>Publicações</p>
            <span>{filteredRepositories?.length === 1 ? '1 Publicação' : `${filteredRepositories?.length} Publicações`} </span>
          </SearchAreaTitles>
          <SearchAreaInput>
            <input type="text" placeholder="Buscar conteúdo" onChange={e => handleInputValueChange(e.target.value)}></input>
          </SearchAreaInput>
        </SearchArea>


        <RepositoriesArea>
          {filteredRepositories?.map((issue: RepositoryIssue) => (
            <Repository
              key={issue.number}
              body={issue.body}
              title={issue.title}
              created_at={issue.created_at.toString()}
            />
          ))}
        </RepositoriesArea>


      </HomeContent>
    </HomeContainer>
  );
}
