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
  SearchAreaTitles } from './styles'

import linkIcon from '../../images/home/profileIcons/linkIcon.svg'
import githubIcon from '../../images/home/profileIcons/githubIcon.svg'
import companyIcon from '../../images/home/profileIcons/companyIcon.svg'
import followersIcon from '../../images/home/profileIcons/followersIcon.svg'
import { Repository } from './components/Repository'

const myGithubUser = 'paulocesarrodrigues'
const challengeRepository = 'Desafio-BlogGithubAPI-ReactTS'

const secretKey = import.meta.env.VITE_SECRET_KEY;

async function loadGithubProfile(){
  let githubProfile
  await fetch(`https://api.github.com/users/${myGithubUser}`,{
   method: "GET",
   headers: {
     Authorization: `Bearer ${secretKey}`
   }
 }) 
 .then((response) => response.json()) 
 .then((data) => githubProfile = data)
 console.log(githubProfile)
}

export function Home(){



  //perfil github
  loadGithubProfile()


  //corpo do repositório
  fetch(`https://api.github.com/repos/${myGithubUser}/${challengeRepository}`,{
    method: "GET",
    headers: {
      Authorization: `Bearer ${secretKey}`
    }
  })
  .then((response) => response.json()) 
  .then((data) => console.log(data))



  return(
    <HomeContainer>
      <HomeContent>

        <ProfileArea>
          <img src="https://github.com/paulocesarrodrigues.png"/>
          <ProfileContent>
            <ProfileTitles>
              <h1> Paulo Cesar Rodrigues </h1>
              <a><p>GITHUB</p> <img src={linkIcon}/></a>
            </ProfileTitles>

            <ProfileAbout>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus facilis in minus nobis et eum iure officiis. Labore sit harum quae suscipit aliquam corrupti fugiat vel consequatur at aspernatur!</p>
            </ProfileAbout>

            <ProfileLinks>
              <a><img src={githubIcon}/> <p>Paulocesarrodrigues</p></a>
              <a><img src={companyIcon}/> <p>Software engineering at UNISA</p></a>
              <a><img src={followersIcon}/> <p>3 seguidores</p></a>
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


        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>


        </RepositoriesArea>
      </HomeContent>
    </HomeContainer>
  )
}