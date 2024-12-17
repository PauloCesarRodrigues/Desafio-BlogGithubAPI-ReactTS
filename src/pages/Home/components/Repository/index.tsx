import { RepositoryContainer, RepositoryContent, RepositoryHeader } from "./styles";

export function Repository( ){

  return(
    <RepositoryContainer>
    <RepositoryHeader>
      <h2> JavaScript data types and data structures</h2>
      <p>Há 1 dia</p>
    </RepositoryHeader>
    <RepositoryContent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla veniam commodi odio doloribus saepe incidunt a placeat aliquam delectus sequi quos voluptatibus perspiciatis nam illum cupiditate. Iste, doloremque nulla.
      </p>
    </RepositoryContent>
  </RepositoryContainer>
  )
}