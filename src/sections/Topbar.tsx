"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Topbar() {
  const links = [
    { name: "Activities", dropdown: true },
    { name: "Notice" },
    { name: "Alumni", dropdown: true },
    { name: "Approval/Accreditation", dropdown: true },
    { name: "IQAC" },
    { name: "Feedback", dropdown: true },
    { name: "Gallery" },
    { name: "Disclosure" },
    { name: "Collaboration" },
    { name: "Downloads", dropdown: true },
    { name: "Employee Corner", dropdown: true },
  ]

  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left - Social Icons */}
        <div className="flex items-center gap-3">
          <Link href="#"><Facebook className="w-4 h-4 hover:text-yellow-300 transition" /></Link>
          <Link href="#"><Twitter className="w-4 h-4 hover:text-yellow-300 transition" /></Link>
          <Link href="#"><Youtube className="w-4 h-4 hover:text-yellow-300 transition" /></Link>
          <Link href="#"><Instagram className="w-4 h-4 hover:text-yellow-300 transition" /></Link>
        </div>

        {/* Right - Nav Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-x-2">
            {links.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                {item.dropdown ? (
                  <NavigationMenuTrigger className="bg-transparent hover:text-yellow-300 text-white text-sm">
                    {item.name}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href="#" className="text-white hover:text-yellow-300 text-sm px-1">
                    {item.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
