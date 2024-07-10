'use client'

import React, { useState } from "react"
import { NavBar, NavBarSearch } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Logo from "@/assets/logo"

export default function NavBarHome() {
  const [search, setSearch] = useState<string>('')

  return (
    <NavBar>
      <Logo variant="light" size={25} />
      <div className="flex items-center gap-2">
        <NavBarSearch search={search} setSearch={setSearch} />
        <Button variant="default">
          <Search size={15} />
        </Button>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </NavBar>
  )
}