import { useParams } from "react-router-dom"
import { 
  CommentContent,
  CommentContentContainer,
  IssuePageContent,
  IssuePageTitleSection,
  TitleSectionButtons,
  TitleSectionContent,
  TitleSectionLinks,
  TitleSectionText
} from './styles'

import ReactMarkdown from "react-markdown";

import  linkIcon  from '../../images/mainSectionIcons/linkIcon.svg'
import  backIcon  from '../../images/mainSectionIcons/backIcon.svg'
import  githubIcon  from '../../images/mainSectionIcons/githubIcon.svg'
import  commentIcon  from '../../images/mainSectionIcons/commentIcon.svg'
import  calendarIcon  from '../../images/mainSectionIcons/calendarIcon.svg'

import { useEffect, useState } from "react";
import {myGithubUser, challengeRepository} from '../Home/index'
import { fetchIssueContent } from "../../services/getIssueContent";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

const reposityLink = `https://github.com/${myGithubUser}/${challengeRepository}`

interface issueContent{
  comments: number,
  body: string,
  user:{
    login: string,
  },
  title: string,
  created_at: Date
}

export function IssuePage(){

  const [issueContentRes, setIssueContentRes] = useState<issueContent>({
    comments: 0,
    body: '',
    user:{
      login: '',
    },
    title: '',
    created_at: new Date()
  })

  const { issueId } = useParams<{ issueId: string }>();


  

  useEffect(()=>{
    async function loadIssueContent(){
      if(issueId){
      try{
        const issueContent: issueContent = await fetchIssueContent({
          issueId,
          username: myGithubUser,
          repo: challengeRepository
        })
        setIssueContentRes(issueContent)
      }catch(e){console.error('error' + e)}
    }}
    loadIssueContent()
  },[issueId])

  const MarkdownComponent = () => {
    return (
      <section>
        <ReactMarkdown>{issueContentRes?.body}</ReactMarkdown>
      </section>
    );
  };


  const dateFormatted = formatDistanceToNowStrict(new Date(issueContentRes?.created_at), { locale: ptBR });
  

  return(
    <IssuePageContent>
      <IssuePageTitleSection>
        <TitleSectionButtons>
          <a href="http://localhost:5173/"> <img src={ backIcon }/> <p>VOLTAR</p></a>
          <a href={`${reposityLink}/issues/${issueId}`}> <p> VER NO GITHUB </p> <img src={ linkIcon }/> </a>
        </TitleSectionButtons>
        <TitleSectionContent>
          <TitleSectionText>
            <h1> {issueContentRes?.title} </h1>
          </TitleSectionText>
          <TitleSectionLinks>
            <a href="">
                  <img src={githubIcon} />
                  <p>{issueContentRes?.user?.login}</p>
            </a>

            <div>
                  <img src={commentIcon} />
                  <p>{'Há ' + dateFormatted}</p>
            </div>

            <div>
                  <img src={calendarIcon} />
                  <p>{issueContentRes?.comments} {issueContentRes?.comments === 1  ? 'Comentário' : 'Comentários'}</p>
            </div>

          </TitleSectionLinks>
        </TitleSectionContent>
      </IssuePageTitleSection>

      <CommentContentContainer>
        <CommentContent>
          <MarkdownComponent/>
        </CommentContent>
      </CommentContentContainer>

    </IssuePageContent>
  )
}