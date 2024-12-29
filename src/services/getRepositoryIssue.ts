import {challengeRepository, myGithubUser /*, secretKey*/} from '../pages/Home/index'
import { api } from '../lib/axios'


type fetchRepositoryIssues = {
  query?: string
  username?: string
  repo?: string
}

export async function fetchRepositoryIssues ({
  query = '',
  username = myGithubUser,
  repo = challengeRepository}: fetchRepositoryIssues) {
    
    /*const formattedQuery = query.replace(' ', '%20')
    const results = await api.get(
      `/search/issues?q=${formattedQuery}%20repo:${username}/${repo}`, 
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    )
  return results.data.items*/
 
  const formattedQuery = query.replace(' ', '%20')  //Para mostrar em repositório público sem token github
  const results = await api.get(
  `/search/issues?q=${formattedQuery}%20repo:${username}/${repo}`)
  return results.data.items
  
}


