import { IncomingMessage } from 'http'
import { parse } from 'url'

export function parseRequests(req: IncomingMessage) {
  const { query = {} } = parse(req.url || '', true)
  const { gitHubUser } = query

  if (Array.isArray(gitHubUser)) {
    throw new Error('GitHub User must be a string')
  }

  const parsedRequests = { gitHubUser }

  return parsedRequests
}
