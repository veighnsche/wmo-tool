"use client"

import { ChatLine, ChatLineProps } from "@/app/components/ChatLine"
import { Disclaimer } from "@/app/components/Disclaimer"
import { Header } from "@/app/components/Header"
import { Loading } from "@/app/components/Loading"
import { NotRelated } from "@/app/components/NotRelated"
import { UserInput } from "@/app/components/UserInput"
import { useState } from "react"

export default function Home() {
  const [userInput, setUserInput] = useState("")
  const [lines, setLines] = useState<ChatLineProps[]>([])
  const [loading, setLoading] = useState(false)
  const [notRelated, setNotRelated] = useState(false)

  async function handleSubmit() {
    setLines(lines => {
      const newLines = [...lines]
      if (notRelated) {
        newLines.pop()
      }
      return [...newLines, {role: "user", content: userInput}]
    })
    setNotRelated(false)
    setUserInput("")
    setLoading(true)

    console.log("Before:", {chatHistory: lines, userContent: userInput})

    const {isRelatedQuestion, answer} = await fetch("/api/assistant", {
      method: "POST",
      body: JSON.stringify({chatHistory: lines, userContent: userInput}),
    }).then((res) => res.json())
    setLoading(false)

    console.log("After:", {isRelatedQuestion, answer})

    if (isRelatedQuestion) {
      setLines(lines => [...lines, {role: "assistant", content: answer}])
      return
    }

    setNotRelated(true)
  }

  return (
    <main className="w-full h-screen flex flex-col">
      <Header/>
      <div className="bg-[#F8F4F2] h-full flex flex-col justify-end">
        <Disclaimer/>
        {lines.map(({role, content}, index) => (
          <ChatLine key={index} role={role} content={content}/>
        ))}
        {loading ? (
          <div className="w-full h-12 flex justify-center items-center">
            <Loading/>
          </div>
        ) : null}
        {notRelated ? (
          <div className="w-full flex justify-center">
            <NotRelated/>
          </div>
        ) : null}
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
