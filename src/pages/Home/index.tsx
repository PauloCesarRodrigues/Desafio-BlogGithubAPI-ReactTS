import { 
  HomeContainer,
  HomeContent,
  ProfileAbout,
  ProfileArea,
  ProfileContent,
  ProfileLinks,
  ProfileTitles,
  RepositoriesArea,
  Repository,
  RepositoryContent,
  RepositoryHeader,
  SearchArea,
  SearchAreaInput,
  SearchAreaTitles } from './styles'

import linkIcon from '../../images/home/profileIcons/linkIcon.svg'
import githubIcon from '../../images/home/profileIcons/githubIcon.svg'
import companyIcon from '../../images/home/profileIcons/companyIcon.svg'
import followersIcon from '../../images/home/profileIcons/followersIcon.svg'

export function Home(){


  return(
    <HomeContainer>
      <HomeContent>

        <ProfileArea>
          <img src="https://github.com/paulocesarrodrigues.png"/>
          <ProfileContent>
            <ProfileTitles>
              <h1> Paulo Cesar Rodrigues</h1>
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

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

          <Repository>
            <RepositoryHeader>
              <h2> JavaScript data types and data structures</h2>
              <p>Há 1 dia</p>
            </RepositoryHeader>
            <RepositoryContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
              </p>
            </RepositoryContent>
          </Repository>

        </RepositoriesArea>
      </HomeContent>
    </HomeContainer>
  )
}