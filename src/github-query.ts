import axios from 'axios'

export async function getGitHubData() {
  const gitHubCall = await axios.post(
    `https://api.github.com/graphql`,
    {
      query: `
      {
        viewer {
          id
          bio
        }
      }
      `,
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
