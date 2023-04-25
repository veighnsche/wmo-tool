import { Logo } from "@/app/components/Logo"

export const Header = () => {
  return (
    <div className="h-32 w-full flex flex-col justify-end p-4 border-b-2">
      <div className="flex space-x-4 pl-6">
        <Logo/>
        <h2 className="font-serif text-3xl font-bold">
          De WMO-tool van Zorggenoot
        </h2>
      </div>
    </div>
  )
}