import { useParams } from "react-router-dom"

export function IssuePage(){

  const {issueId} = useParams();

  return(
    <h1>issue: {issueId}</h1>
  )
}