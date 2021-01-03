import axios from 'axios'
import query from './query'

export async function getGitHubData({ gitHubUser }) {
  const gitHubCall = await axios.post(
    `https://api.github.com/graphql`,
    {
      query,
      variables: {
        username: gitHubUser,
      },
    },

    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token ' + process.env.GITHUB_GRAPHQL_TOKEN,
      },
    }
  )
  return gitHubCall.data.data
}
