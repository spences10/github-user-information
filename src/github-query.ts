import axios from 'axios'
const APP_ID = process.env.ONE_GRAPH_APP_ID
// Doc id in OpenGraph
const QUERY_TOKEN = process.env.ONE_GRAPH_PERSIST_QUERY_TOKEN

export async function getGitHubData({ username }) {
  const gitHubCall = await axios.post(
    `https://serve.onegraph.com/graphql?app_id=${APP_ID}`,
    {
      doc_id: QUERY_TOKEN,
      variables: {
        username,
      },
    },

    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return gitHubCall.data.data
}
