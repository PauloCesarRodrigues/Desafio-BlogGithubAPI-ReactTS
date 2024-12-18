import {myGithubUser, challengeRepository, secretKey} from '../pages/Home/index'
//issues do repositorio -> https://api.github.com/repos/paulocesarrodrigues/Desafio-BlogGithubAPI-ReactTS/issues

export async function getRepositoryIssues() {
  let repositoryIssues;

  if (secretKey) {
    await fetch(
      `https://api.github.com/repos/${myGithubUser}/${challengeRepository}/issues`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => (repositoryIssues = data));
    return repositoryIssues;
  }

  if (!secretKey) {
    await fetch(
      `https://api.github.com/repos/${myGithubUser}/${challengeRepository}/issues`
    )
      .then((response) => response.json())
      .then((data) => (repositoryIssues = data));
    return repositoryIssues;
  }
}