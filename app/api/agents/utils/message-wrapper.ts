import { ChatCompletionRequestMessage } from "openai"

export const user = (content: string): ChatCompletionRequestMessage & { role: "user" } => ({
  role: "user",
  content,
})

export const assist = (content: string): ChatCompletionRequestMessage & { role: "assistant" } => ({
  role: "assistant",
  content,
})

export const system = (content: string): ChatCompletionRequestMessage & { role: "system" } => ({
  role: "system",
  content,
})