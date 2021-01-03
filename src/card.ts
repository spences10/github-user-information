// import fs from 'fs'
import { IncomingMessage, ServerResponse } from 'http'
import { topLanguages } from './data-transform'
import { getGitHubData } from './github-query'
import { getHtml } from './html-templates'
import { parseRequests } from './parser'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const { gitHubUser } = parseRequests(req)
    // const html = fs.readFileSync('pie.html')
    const data = await getGitHubData({ gitHubUser })
    const { chartData } = topLanguages(data)
    const html = getHtml(chartData)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  } catch (error) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, an error. I derp!</p>')
    console.error(error)
  }
}
