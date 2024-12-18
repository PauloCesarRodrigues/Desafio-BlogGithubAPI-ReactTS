import { RepositoryContainer, RepositoryContent, RepositoryHeader } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RepositoryProps {
  body: string;
  title: string;
  created_at: string;
}


export const Repository: React.FC<RepositoryProps> = ({ body, title, created_at }) => {

  const tempoPassado = formatDistanceToNow(new Date(created_at), { addSuffix: true, locale: ptBR });

  return(
    <RepositoryContainer>
    <RepositoryHeader>
      <h2> {title} </h2>
      <p>{tempoPassado}</p>
    </RepositoryHeader>
    <RepositoryContent>
      <p>
        {body}
      </p>
    </RepositoryContent>
  </RepositoryContainer>
  )
}