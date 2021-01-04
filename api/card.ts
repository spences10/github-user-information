import { IncomingMessage, ServerResponse } from 'http'
import { getScreenshot } from './chromium'
import { writeTempFile } from './create-file'
import { topLanguages } from './data-transform'
import { getGitHubData } from './github-query'
import { getHtml } from './html-templates'
import { parseRequests } from './parser'

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

    const isDev = process.env.NOW_REGION === 'dev1'
    const fileName = username || ``
    const filePath = await writeTempFile(fileName, html)
    const fileUrl = `file://${filePath}`

    const file = await getScreenshot(fileUrl, isDev)

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    res.setHeader(
      'Cache-Control',
      'public,immutable,no-transform,s-max-age=21600,max-age=21600'
    )
    res.end(file)

    // === Use this to get HTML output ===
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.end(html)
  } catch (error) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, an error. I derp!</p>')
    console.error(error)
  }
}
