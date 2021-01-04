import { IncomingMessage } from 'http'
import { parse } from 'url'

export function parseRequests(req: IncomingMessage) {
  const { query = {} } = parse(req.url || '', true)
  const { username } = query

  if (Array.isArray(username)) {
    throw new Error('GitHub User must be a string')
  }

  const parsedRequests = { username }

  return parsedRequests
}
