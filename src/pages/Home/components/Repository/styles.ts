import styled from "styled-components"
import { Link } from "react-router-dom"

export const RepositoryContainer = styled(Link)`
  margin-left: -1rem;
  
  width: 33rem;
  height: 20rem;
  background-color: #fbfbfb;

  margin-bottom: 2rem;

  background-color: ${props => props.theme["darkblue-700"]};

  border-radius: 10px;

  text-decoration: none;
  
`

export const RepositoryHeader = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 2rem 2.5rem 2rem;

  h2{
    font-size: 1.5rem;
    color: ${props => props.theme["darkblue-100"]};

    text-align: left;
    flex-wrap: wrap;

    max-width: 18rem;
    word-wrap: break-word; 
    white-space: normal;

    font-weight: 500;
  }

  p{
    font-size: 1rem;
    color: ${props => props.theme["darkblue-400"]};
  }

`

export const RepositoryContent = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;

  p{
    color: ${props => props.theme["darkblue-300"]};
    font-size: 1.2rem;
    font-weight: 300;

    text-align: left;
    flex-wrap: wrap;

    max-width: 30rem;
    word-wrap: break-word; 
    white-space: normal;

    text-overflow: ellipsis
  }

`