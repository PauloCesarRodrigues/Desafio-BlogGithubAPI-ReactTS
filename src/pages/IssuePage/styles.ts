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
  width: 68rem;

  a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin-left: 1rem;

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

`

export const TitleSectionText = styled.div`

`

export const TitleSectionLinks = styled.div`

`