import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="shrink-0">
          <Image
            src="/bcrec_logo.png"
            alt="Dr. B. C. Roy Engineering College, Durgapur Full Logo"
            width={680}
            height={190}
            priority
            className="h-auto max-w-full ml-9"
          />
        </div>

        <div className="shrink-0 ml-4 mr-8">
          <Image
            src="/affiliation-logos.png"
            alt="Affiliation Logos"
            width={260}
            height={55}
            priority
            className="h-auto max-w-full"
          />
        </div>

        <div className="flex flex-col items-end text-sm text-gray-700 space-y-0.5 mr-8">
          <div className="flex items-center gap-1 mt-3">
            <Phone className="h-7 w-7 text-green-700" />
            <span className="font-bold text-blue-800 uppercase text-lg">CALL US</span>
          </div>
          <div className="font-bold text-xl text-blue-800">
            (0343)-2501353,2504106
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-blue-800 text-lg">Mob: +91-6297128554 | Email: info@bcrec.ac.in</span>
          </div>
        </div>
      </div>
    </div>
  );
}