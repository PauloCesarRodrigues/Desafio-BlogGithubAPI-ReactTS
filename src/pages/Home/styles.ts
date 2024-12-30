import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: 0;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`

export const ProfileArea = styled.div`

  margin-top: -8rem;
  margin-bottom: 4rem;

  width: 70rem;
  height: 18rem;

  background-color: ${props => props.theme["darkblue-700"]};
  border-radius: 10px;

  box-shadow: 1px 1px 15px ${props => props.theme["darkblue-900"]};

  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    height: 12rem;
    width: 12rem;
    border-radius: 6px;
    margin-left: 4rem;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;

  gap: 4rem;
`

export const ProfileTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;


  p,h1{
    color: ${props => props.theme["blue-500"]};

  }

  h1{
    color: ${props => props.theme["blue-500"]};
    font-size: 1.5rem;
    font-weight: bold;
  }

  a{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;
    text-decoration: none;

    img{
    height: 1rem;
    width: 1rem;
    margin-left: 0.75rem;
  }
  }

  p{
    font-size: 1rem;
    font-weight: 500;
  }

`


export const ProfileAbout = styled.div`
  text-align: left;
  flex-wrap: wrap;

  width: 50rem;
  max-width: 50rem;
  word-wrap: break-word; 
  white-space: normal;

  color: ${props => props.theme["blue-500"]};

  margin-top: -2rem;
  
`

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  gap: 1.5rem;
  margin-left: -1rem;
  


  p{
    margin-left: 0.5rem;
    color: ${props => props.theme["blue-500"]};
    font-weight: 400;
    }

  img{
    height: 1rem;
    width: 1rem;
    margin-left: 0.75rem;
  }


  div{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  a{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;
    text-decoration: none;
  }
`

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchAreaTitles = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 1rem;

  p{
    color: ${props => props.theme["darkblue-200"]};
    font-size: 1.2rem;
    font-weight: bold;
  }

  span{
    color: ${props => props.theme["darkblue-400"]};
    font-size: 0.8rem;
  }
`

export const SearchAreaInput = styled.div`
  input{
    width: 70rem;
    outline: none;
    border-radius: 6px;

    border: 1px solid ${props => props.theme["darkblue-600"]};
    background-color: ${props => props.theme["darkblue-900"]};

    height: 3.125rem;

    color: ${props => props.theme["darkblue-500"]};
    font-size: 1.2rem;

    box-sizing: border-box;
    padding-left: 1rem;

    &::placeholder{
      color: ${props => props.theme["darkblue-500"]};
      font-size: 1.2rem;
    }
  }

  margin-bottom: 3rem;
`

export const RepositoriesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));  

  row-gap: 0.6rem; 
  column-gap: 5rem; 

  width: 100%;
  box-sizing: border-box;
`;
