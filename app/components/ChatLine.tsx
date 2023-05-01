export interface ChatLineProps {
  role: "user" | "assistant"
  content: string
}

export const ChatLine = ({role, content}: ChatLineProps) => {
  if (role === "user") {
    return (
      <div className="py-5 bg-[#D572511A] min-h-2 flex justify-center">
        <div className="w-8">👤</div>
        <span className="font-bold w-[800px]">{content}</span>
      </div>
    )
  }

  return (
    <div className="py-5 min-h-20 flex justify-center">
      <div className="w-8">🤖</div>
      <span className="w-[800px] whitespace-pre-wrap">{content}</span>
    </div>
  )
}