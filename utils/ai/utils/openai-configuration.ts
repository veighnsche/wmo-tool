import {
  ChatCompletionRequestMessage,
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
} from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const chatCompletion = async (
  completionName: string,
  system: ChatCompletionRequestMessage & { role: "system" },
  messages: (ChatCompletionRequestMessage & { role: "user" | "assistant" })[],
  modelOptions?: Omit<CreateChatCompletionRequest, "model" | "messages">,
) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages:  [
      system,
      ...messages,
    ],
    ...modelOptions,
  })

  const message = completion.data.choices[0].message

  if (!message) {
    throw new Error("No data from OpenAI : " + completionName)
  }

  return message.content
}