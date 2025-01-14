import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'

import { ChatGPTAPI } from '.'

dotenv.config()

/**
 * Example CLI for testing functionality.
 *
 * ```
 * npx tsx src/demo.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({ sessionToken: process.env.SESSION_TOKEN })
  await api.ensureAuth()

  const conversation = api.getConversation()

  const prompt = 'What is OpenAI?'

  const response = await oraPromise(conversation.sendMessage(prompt), {
    text: prompt
  })

  console.log(response)

  const prompt2 = 'Did they made OpenGPT?'

  console.log(
    await oraPromise(conversation.sendMessage(prompt2), {
      text: prompt2
    })
  )

  const prompt3 = 'Who founded this institute?'

  console.log(
    await oraPromise(conversation.sendMessage(prompt3), {
      text: prompt3
    })
  )

  const prompt4 = 'Who is that?'

  console.log(
    await oraPromise(conversation.sendMessage(prompt4), {
      text: prompt4
    })
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
