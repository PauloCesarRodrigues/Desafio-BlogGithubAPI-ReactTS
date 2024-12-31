import {challengeRepository, myGithubUser /*, secretKey*/} from '../pages/Home/index'
import { api } from '../lib/axios'

/*/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 */


type fetchRepositoryIssues = {
  issueId: string
  username?: string
  repo?: string
};

export async function fetchIssueContent ({
  issueId,
  username = myGithubUser,
  repo = challengeRepository}: fetchRepositoryIssues) {
    
  
  const results = await api.get(
  `/repos/${username}/${repo}/issues/${issueId}`)


  return results.data
  
}


