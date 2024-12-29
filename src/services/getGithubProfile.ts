import { api } from '../lib/axios';
import {myGithubUser, /*secretKey*/} from '../pages/Home/index'


export async function fetchGithubProfile (username = myGithubUser){    
    
      /*const results = await api.get(`/users/${username}`, 
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    )
  
    return results.data*/

  const results = await api.get(`/users/${username}`) //Para mostrar em repositório público sem token github
  return results.data
}


