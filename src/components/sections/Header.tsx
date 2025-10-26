"use client"

import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        {/* 3-column layout: logo+title | affiliation logos | contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4">
          
          {/* LEFT: Logo + Title (keeps the coloured stripe as part of the logo image if you have it together) */}
          <div className="flex items-center gap-4">
            {/* Use your bcrec_logo image here (the main one that includes college name/text) */}
            <div className="w-[340px] max-w-full">
              <Image
                src="/bcrec_logo.png"   // <-- replace with your path
                alt="Dr. B. C. Roy Engineering College - Logo"
                width={700}
                height={200}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* CENTER: Affiliation logos image (one file with all badges) */}
          <div className="flex justify-center md:justify-center">
            <div className="w-[300px] max-w-full">
              <Image
                src="/affiliation-logos.png" // <-- replace with your affiliation logos image path
                alt="Affiliations and accreditations"
                width={300}
                height={80}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Contact box */}
          <div className="flex justify-start md:justify-end">
            <div className="flex flex-col items-start md:items-end text-right">
              <div className="inline-flex items-center gap-2 bg-white/0">
                <span className="inline-flex items-center justify-center rounded-md bg-blue-50 text-blue-800 px-2 py-1 text-sm font-semibold border border-blue-100">
                  CALL US
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-800">
                <div className="font-semibold text-blue-900">(0343)-2501353, 2504106</div>
                <div className="mt-1">Mob: +91-6297128554</div>
                <div className="mt-1">
                  <a href="mailto:info@bcrec.ac.in" className="text-blue-700 underline">info@bcrec.ac.in</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
