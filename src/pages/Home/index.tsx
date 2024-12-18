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
import { getGithubProfile } from "../../utils/getGithubProfile";
import { getRepositoryIssues } from "../../utils/getRepositoryIssues"

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


const repositoryIssues: RepositoryIssue[] | undefined = await getRepositoryIssues();
const githubProfile: GithubProfile | undefined = await getGithubProfile();

export function Home() {
  //corpo do repositório

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                possimus facilis in minus nobis et eum iure officiis. Labore sit
                harum quae suscipit aliquam corrupti fugiat vel consequatur at
                aspernatur!
              </p>
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
            <span>7 Publicações</span>
          </SearchAreaTitles>
          <SearchAreaInput>
            <input type="text" placeholder="Buscar conteúdo"></input>
          </SearchAreaInput>
        </SearchArea>

        <RepositoriesArea>
          {repositoryIssues?.map((issue) =>(
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
