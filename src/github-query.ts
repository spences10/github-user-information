import axios from 'axios'
import query from './query'

export async function getGitHubData() {
  const gitHubCall = await axios.post(
    `https://api.github.com/graphql`,
    {
      query,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token ' + process.env.GITHUB_TOKEN,
      },
    }
  )
  return gitHubCall.data.data
}
