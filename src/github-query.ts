import axios from 'axios'
const APP_ID = process.env.ONE_GRAPH_APP_ID

export async function getGitHubData({
  username,
  query,
  contributionsYear,
}) {
  // Doc id in OpenGraph
  const QUERY_TOKEN =
    query === `pie`
      ? process.env.ONE_GRAPH_PERSIST_QUERY_TOKEN_PIE
      : process.env.ONE_GRAPH_PERSIST_QUERY_TOKEN_HEAT

  const year = `${contributionsYear}-01-01T00:00:00Z`
  const variables = contributionsYear
    ? {
        username,
        year,
      }
    : { username }

  const gitHubCall = await axios.post(
    `https://serve.onegraph.com/graphql?app_id=${APP_ID}`,
    {
      doc_id: QUERY_TOKEN,
      variables,
    },

    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return gitHubCall.data.data
}
