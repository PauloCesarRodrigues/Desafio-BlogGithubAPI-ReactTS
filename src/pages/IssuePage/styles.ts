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
  height: 18rem;

  background-color: ${props => props.theme["darkblue-700"]};
  border-radius: 10px;

  box-shadow: 1px 1px 15px ${props => props.theme["darkblue-900"]};

  display: flex;
  flex-direction: row;
  align-items: center;

`

export const TitleSectionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;


  p,h1{
    color: ${props => props.theme["blue-500"]};
  }

  h1{
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const TitleSectionContent = styled.div`

`

export const TitleSectionText = styled.div`

`

export const TitleSectionLinks = styled.div`

`