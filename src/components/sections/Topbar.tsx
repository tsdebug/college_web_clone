"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Facebook, Twitter, Youtube, Instagram, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <nav className="bg-blue-900 text-white p-1.5 text-xs sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-3 ml-11">
          {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="text-white hover:text-gold-700 h-6 w-6 opacity-80 hover:opacity-100 ml-1 transition-all cursor-pointer"
            >
              <Icon className="h-7 w-7 opacity-70" />
            </Button>
          ))}
        </div>

        {/* Dropdown Section */}
        <div className="flex items-center font-semibold mr-12">
          {[
            {
              label: "Activities",
              items: ["News", "Events", "NSS Activities"],
            },
            {
              label: "Notice",
              items: [],
            },
            {
              label: "Alumni",
              items: [
                "Alumni",
                "Alumni Membership Registration",
                "Alumni Event Registration",
              ],
            },
            {
              label: "Approval/Accreditation",
              items: ["AICTE", "MAKAUT", "NBA", "NAAC", "NIRF(Engineering)"],
            },
            {
              label: "IQAC",
              items: [
                "About IQACs",
                "Compositions",
                "Meetings",
                "Reports",
                "NAAC SSR",
                "NAAC AQAR 2020-21",
                "NAAC AQAR 2021-22",
                "NAAC AQAR 2022-23",
                "NAAC AQAR 2023-24",
              ],
            },
            {
              label: "Feedback",
              items: ["Current (2024 onwards)", "Previous"],
            },
            {
              label: "Gallery",
              items: ["Images", "Videos"],
            },
            {
              label: "Disclosure",
              items: [],
            },
            {
              label: "Collaboration",
              items: ["Foreign Collaboration", "Corporate Collaboration"],
            },
            {
              label: "Downloads",
              items: ["AICTE Approvals", "Other Approvals"],
            },
            {
              label: "Employee Corner",
              items: ["Sign Up", "Links/Downloads"],
            },
          ].map((menu, i, arr) => (
            <div key={i} className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-yellow-400 text-xs h-auto px-2 py-1 flex items-center gap-1 cursor-pointer"
                  >
                    {menu.label}
                    {menu.items.length > 0 && (
                      <ChevronDown className="h-2 w-2 opacity-80" />
                    )}
                  </Button>
                </DropdownMenuTrigger>

                {menu.items.length > 0 && (
                  <DropdownMenuContent className="text-xs bg-blue-700 text-white rounded-none">
                    {menu.items.map((item, idx) => (
                      <DropdownMenuItem key={idx}>{item}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>

              {/* Divider except for last item */}
              {i < arr.length - 1 && (
                <span className="text-white/50 px-1">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
