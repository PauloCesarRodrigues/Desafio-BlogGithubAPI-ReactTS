import axios from 'axios'

const githubPath = 'https://api.github.com'

export const api = axios.create({
  baseURL: githubPath,
})