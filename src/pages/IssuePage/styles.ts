import styled from "styled-components";

export const IssuePageContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`

export const IssuePageTitleSection = styled.div`
  margin-top: -8rem;
  margin-bottom: 4rem;

  width: 70rem;
  height: 14rem;

  background-color: ${props => props.theme["darkblue-700"]};
  border-radius: 10px;

  box-shadow: 1px 1px 15px ${props => props.theme["darkblue-900"]};

  display: flex;
  flex-direction: column;
  align-items: center;

`

export const TitleSectionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 68rem;

  a{
    margin: 2rem 2rem 0 2rem;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    gap: 0.5rem;

    img{
      height: 1.2rem;
      width: 1.2rem;
      margin: 0 0rem;
    }

    p{
      font-size: 1rem;
      font-weight: 500;
      color: ${props => props.theme["blue-500"]};
    }
  }
`

export const TitleSectionContent = styled.div`
  width: 68rem;
  margin: 0;
`

export const TitleSectionText = styled.div`

  text-align: left;
  margin-left: 2rem;
  margin-top: 2rem;
  color: ${props => props.theme["darkblue-100"]};
`

export const TitleSectionLinks = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2rem;
  margin-left: 2rem;

  a{
    text-decoration: none;
  }

  div, a{
    display: flex;
    flex-direction: row;
    text-align: center;

    img{
      height: 1.3rem;
      width: 1.3rem;
    }

    p{
      color: ${props => props.theme["darkblue-200"]};
      font-weight: 400;
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }

  div{
      margin-left: 1.5rem;
    }
`

export const CommentContentContainer = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`

export const CommentContent = styled.div` // Estilos para o markdown convertido gerado por IA (GPT)
  color: #d1d5db; 
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  background: #1e293b; 
  padding: 2rem;
  border-radius: 8px;
  width: 100%;

  h1, h2, h3 {
    color: #60a5fa; 
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
  }

  a {
    color: #3b82f6;
    text-decoration: underline;

    &:hover {
      color: #2563eb;
    }
  }

  pre {
    background: #111827; 
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
  }

  code {
    background: #1f2937; 
    color: #f59e0b;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

`