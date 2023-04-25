import { answering } from "@/utils/ai/answering"
import { checkIfRelatedQuestion } from "@/utils/ai/check-if-related-question"

export async function POST(request: Request) {
  const {chatHistory, userContent} = await request.json()

  const isRelatedQuestion = await checkIfRelatedQuestion(userContent)
  if (!isRelatedQuestion) {
    return new Response(JSON.stringify({isRelatedQuestion}))
  }

  const answer = await answering({chatHistory, userContent})
  return new Response(JSON.stringify({isRelatedQuestion, answer}))
}