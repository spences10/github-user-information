import { IncomingMessage } from 'http'
import { parse } from 'url'

export function parseRequests(req: IncomingMessage) {
  const { query = {} } = parse(req.url || '', true)
  const { username, interactive, year: contributionsYear } = query

  if (Array.isArray(username)) {
    throw new Error('GitHub User must be a string')
  }
  if (Array.isArray(contributionsYear)) {
    throw new Error('Contributions year must be a string')
  }

  const parsedRequests = { username, interactive, contributionsYear }

  return parsedRequests
}
