import { createHash } from 'crypto'
import { writeFile } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import { promisify } from 'util'

const promiseWriteFile = promisify(writeFile)

export async function writeTempFile(fileName: string, html: string) {
  const hashedFilename =
    createHash('md5').update(fileName).digest('hex') + '.html'

  const filePath = join(tmpdir(), hashedFilename)

  await promiseWriteFile(filePath, html)

  return filePath
}
