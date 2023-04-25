import { ChangeEvent, KeyboardEvent, useState } from "react"

interface UserInputProps {
  loading: boolean
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export const UserInput = ({loading, value, onChange, onSubmit}: UserInputProps) => {
  const [error, setError] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (error) {
      setError(false)
    }
    onChange(e.target.value)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  function handleSubmit() {
    if (value.trim() !== "") {
      onSubmit()
    } else {
      setError(true)
    }
  }

  return (
    <div className="h-full flex justify-center p-4">
      <div className="h-full w-[900px] flex space-x-4">
        <input
          type="text"
          className={`w-full h-full rounded-full pl-16 ${error ? "ring-2 ring-red-500" : ""}`}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className={`bg-[#D57251] text-white border-0 px-6 rounded-full ${loading ? "opacity-50" : "hover:bg-[#C56D4C]"}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          Verzenden
        </button>
      </div>
    </div>
  )
}