import {myGithubUser, secretKey} from '../pages/Home/index'

export async function getGithubProfile() {
  let githubProfile;

  if (secretKey) {
    await fetch(`https://api.github.com/users/${myGithubUser}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => (githubProfile = data));

    return githubProfile;
  }

  if (!secretKey) {
    // Para quando subir o projeto no github e estiver sem o token de autenticação
    await fetch(`https://api.github.com/users/${myGithubUser}`)
      .then((response) => response.json())
      .then((data) => (githubProfile = data));
    return githubProfile;
  }
}