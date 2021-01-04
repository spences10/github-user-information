import * as playwright from 'playwright-aws-lambda'

export async function getScreenshot() {
  const browser = await playwright.launchChromium()
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  })
  console.log('=====================')
  console.log(page)
  console.log('=====================')
}
