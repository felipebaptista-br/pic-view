import React from "react"
import { ApertureIcon } from "lucide-react"

interface LogoProps {
  size: number
  variant: 'dark' | 'light'
}

export default function Logo({ size, variant }: LogoProps) {
  return (
    <h1
      style={{ fontSize: size }}
      className={`flex items-center select-none gap-2 uppercase ${variant === 'dark' ? 'text-white' : 'text-neutral-800'}`}
    >
      <ApertureIcon size={size} className='text-teal-500' />
      pic<span className="text-teal-500">view</span>
    </h1>
  )
}