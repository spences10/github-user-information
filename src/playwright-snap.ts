// https://github.com/microsoft/playwright/issues/822
import playwright from 'playwright-aws-lambda'

export async function playwrightSnap(fileUrl: string) {
  // launch browser
  const browser = await playwright.launchChromium()

  // create context
  const context = await browser.newContext()

  // create page
  const page = await context.newPage()
  // do things with the browser
  await page.goto(fileUrl)
  await page.screenshot({
    path: `output/ewew.png`,
  })

  // close the browser
  await browser.close()
}
