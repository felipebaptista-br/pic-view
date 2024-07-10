import React, { Dispatch, ReactNode, SetStateAction } from "react"

import { Input } from "@/components/ui/input"

interface NavBarProps {
  children: ReactNode
}

export const NavBar = ({ children }: NavBarProps) => {
  return (
    <div className="w-full h-28 p-5">
      <div className="w-full h-full flex items-center justify-between gap-5 p-5 shadow shadow-neutral-300 rounded-xl">
        {children}
      </div>
    </div>
  )
}

interface NavBarSearchProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const NavBarSearch = ({ search, setSearch }: NavBarSearchProps) => {
  return <Input placeholder="Procurar imagens..." type="text" className="w-[420px]" value={search} onChange={(event) => setSearch(event.target.value)} />
}