import { RepositoryContainer, RepositoryContent, RepositoryHeader } from "./styles";
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RepositoryProps {
  body: string;
  title: string;
  created_at: string;
}


export const Repository: React.FC<RepositoryProps> = ({ body, title, created_at }) => {

  const tempoQuePassouDesDaPublicacao = formatDistanceToNowStrict(new Date(created_at), { locale: ptBR });

  return(

    <RepositoryContainer>
    <RepositoryHeader>
      <h2> {title} </h2>
      <p>{'Há ' + tempoQuePassouDesDaPublicacao}</p>
    </RepositoryHeader>
    <RepositoryContent>
      <p>
        {body}
      </p>
    </RepositoryContent>
  </RepositoryContainer>

  )
}