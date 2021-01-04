// import fs from 'fs'
import { IncomingMessage, ServerResponse } from 'http'
import { writeTempFile } from './create-file'
import { topLanguages } from './data-transform'
import { getGitHubData } from './github-query'
import { getHtml } from './html-templates'
import { parseRequests } from './parser'
import { playwrightSnap } from './playwright-snap'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const { username } = parseRequests(req)
    // const html = fs.readFileSync('pie.html')
    const data = await getGitHubData({ username })
    const { chartData } = topLanguages(data)
    const html = getHtml(chartData)

    const fileName = username || ``
    const filePath = await writeTempFile(fileName, html)
    const fileUrl = `file://${filePath}`

    playwrightSnap(fileUrl)

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
