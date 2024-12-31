import { useParams } from "react-router-dom"
import { IssuePageContent, IssuePageTitleSection, TitleSectionButtons, TitleSectionContent, TitleSectionLinks, TitleSectionText } from './styles'

import  linkIcon  from '../../images/mainSectionIcons/linkIcon.svg'
import  backIcon  from '../../images/mainSectionIcons/backIcon.svg'
import { useEffect } from "react";

export function IssuePage(){

  const { issueId } = useParams();

  useEffect(()=>{
    //fazer o get com o issue id
  },[])

  return(
    <IssuePageContent>
      <IssuePageTitleSection>
        <TitleSectionButtons>
          <a href="http://localhost:5173/"> <img src={ backIcon }/> <p>VOLTAR</p></a>
          <a href={}> <p> VER NO GITHUB </p> <img src={ linkIcon }/> </a>
        </TitleSectionButtons>
        <TitleSectionContent>
          <TitleSectionText>

          </TitleSectionText>
          <TitleSectionLinks>

          </TitleSectionLinks>
        </TitleSectionContent>
      </IssuePageTitleSection>

    </IssuePageContent>
  )
}