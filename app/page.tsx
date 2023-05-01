"use client"

import { ChatLine, ChatLineProps } from "@/app/components/ChatLine"
import { Disclaimer } from "@/app/components/Disclaimer"
import { ErrorMessage } from "@/app/components/ErrorMessage"
import { Header } from "@/app/components/Header"
import { Loading } from "@/app/components/Loading"
import { UserInput } from "@/app/components/UserInput"
import { ERRORS } from "@/utils/ai/utils/errors"
import { useState } from "react"

export default function Home() {
  const [userInput, setUserInput] = useState("")
  const [lines, setLines] = useState<ChatLineProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<false | ERRORS>(false)

  async function handleSubmit() {
    setLines(lines => {
      const newLines = [...lines]
      if (error) {
        newLines.pop()
      }
      return [...newLines, {role: "user", content: userInput}]
    })
    setError(false)
    setUserInput("")
    setLoading(true)

    console.log("Before:", {chatHistory: lines, userContent: userInput})

    const {error: resError, answer} = await fetch("/api/assistant", {
      method: "POST",
      body: JSON.stringify({chatHistory: lines, userContent: userInput}),
    }).then((res) => {
      setLoading(false)
      return res.json()
    })

    console.log("After:", {error: resError, answer})

    if (resError) {
      setError(resError)
      return
    }

    setLines(lines => [...lines, {role: "assistant", content: answer}])
  }

  return (
    <main className="w-full h-screen flex flex-col">
      <Header/>
      <div className="bg-[#F8F4F2] h-full flex flex-col justify-end overflow-auto">
        <div className="overflow-auto">
          <Disclaimer/>
          {lines.map(({role, content}, index) => (
            <ChatLine key={index} role={role} content={content}/>
          ))}
          {loading ? (
            <div className="w-full h-12 flex justify-center items-center">
              <Loading/>
            </div>
          ) : null}
          {error ? (
            <div className="w-full flex justify-center">
              <ErrorMessage error={error}/>
            </div>
          ) : null}
        </div>
      </div>
      <div className="h-24 w-full bg-[#213F3D]">
        <UserInput
          loading={loading}
          value={userInput}
          onChange={setUserInput}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  )
}
