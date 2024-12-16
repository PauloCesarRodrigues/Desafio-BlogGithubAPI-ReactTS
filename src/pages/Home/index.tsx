import { HomeContainer, HomeContent, ProfileAbout, ProfileArea, ProfileContent, ProfileLinks, ProfileTitles, RepositoriesArea, Repository, SearchArea, SearchAreaInput, SearchAreaTitles } from './styles'

export function Home(){
  return(
    <HomeContainer>
      <HomeContent>

        <ProfileArea>
          <img src="https://github.com/paulocesarrodrigues.png"/>
          <ProfileContent>
            <ProfileTitles>
              <h1> Paulo Cesar</h1>
              <a><p>GITHUB</p></a>
            </ProfileTitles>

            <ProfileAbout>
              <p>ddddd</p>
            </ProfileAbout>

            <ProfileLinks>
              <a>gitIcon <p>Paulocesarrodrigues</p></a>
              <a>BookIcon <p>Software engineering at UNISA</p></a>
              <a>pplIcon <p>3 seguidores</p></a>
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
        </RepositoriesArea>
      </HomeContent>
    </HomeContainer>
  )
}