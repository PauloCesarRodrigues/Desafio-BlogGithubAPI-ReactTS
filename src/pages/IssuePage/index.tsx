import { useParams } from "react-router-dom"
import { IssuePageContent, IssuePageTitleSection, TitleSectionButtons, TitleSectionContent, TitleSectionLinks, TitleSectionText } from './styles'

export function IssuePage(){

  const { issueId } = useParams();

  return(
    <IssuePageContent>
      <IssuePageTitleSection>
        <TitleSectionButtons>

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