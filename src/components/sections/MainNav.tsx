"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


export default function MainNav() {
  const [isBlink, setIsBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlink((prev) => !prev);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-20 z-40 bg-[#e6e6e6] border-t border-gray-300">
      <div className="max-w-auto mx-auto flex justify-between items-center py-2 px-3 font-semibold text-[15px] text-[#0a2b66]">
        <div className="flex items-center font-semibold cursor-pointer ml-20">
          {[
            {
              label: "HOME",
              items: [],
            },
            {
              label: "ABOUT",
              items: [
                "Overview",
                "Administration",
                "Mission & Vision",
                "Board of Trustees"
              ],
            },
            {
              label: "DEPARTMENTS",
              items: [
                "Basic Science and Humanities",
                "Civil Engineering",
                "Computer Science and Design",
                "Computer Science and Engineering",
              ],
            },
            {
              label: "ACADEMICS",
              items: [
                "Programmes", 
                "Acedimic Calender", 
                "Faculty Profile", 
                "R & D cell", 
                "Scholarships"],
            },
            {
              label: "INFRASTRUCTURE",
              items: [
                "LAbs & Workshops",
                "Auditorium",
                "Smart Class",
                "Safty and Security",
                "ATM and Banking Facilitiy",
              ],
            },
            {
              label: "ADMISSION",
              items: [
                "Apply",
                "Admission Enquiry",
                "Admission Process",
                "Pay Fee Online BCREC",
                "Pay Fee Online BCREC APC",
              ],
            },
            {
              label: "TENDERS",
              items: [
                "Tender Notice", 
                "Tender Notice for Computer & Accessories & Equipments",
                "BCREC Purchase Rules", 
                "Vendor Enlistment", 
                "Rate Contracts & Licensing Agreements", 
              ],
            },
            {
              label: "EXAMINATION",
              items: [],
            },
            {
              label: "PLACEMENT",
              items: [
                "General Information",
                "Placement Details",
                "Training Details",
              ],
            },
            {
              label: "LIBRARY",
              items: [],
            },
            {
              label: "CAREER",
              items: [],
            },
            {
              label: "CONTACT",
              items: [],
            },
          ].map((menu, i, arr) => (
            <div key={i} className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-black hover:text-blue-800 text-md h-auto px-2 py-1 flex items-center gap-0"
                  >
                    {menu.label}
                    {menu.items.length > 0 && (
                      <ChevronDown className="h-2 w-2 opacity-80" />
                    )}
                  </Button>
                </DropdownMenuTrigger>

                {menu.items.length > 0 && (
                  <DropdownMenuContent className="text-lg bg-white text-black rounded-none cursor-pointer">
                    {menu.items.map((item, idx) => (
                      <DropdownMenuItem key={idx}>{item}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            </div>
          ))}
        </div>

        {/* Blinking CIACON 2026 */}
        <motion.div
          animate={{ opacity: isBlink ? 1 : 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-red-600 cursor-pointer mr-10"
        >
          CIACON 2026
        </motion.div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-[#0a2b66]" />
        </div>
      </div>
    </div>
  );
}
