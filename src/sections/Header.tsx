import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="shrink-0">
          <Image
            src="/bcrec_logo.png"
            alt="Dr. B. C. Roy Engineering College, Durgapur Full Logo"
            width={700}
            height={200}
            priority
            className="h-auto max-w-full"
          />
        </div>

        <div className="shrink-0 ml-8 mr-8">
          <Image
            src="/affiliation-logos.png"
            alt="Affiliation Logos"
            width={300}
            height={80}
            priority
            className="h-auto max-w-full"
          />
        </div>

        <div className="flex flex-col items-end text-sm text-gray-700 space-y-0.5">
          <div className="flex items-center gap-2">
            <Phone className="h-10 w-10 text-blue-700" />
            <span className="font-bold text-blue-900 uppercase text-2xl">CALL US</span>
          </div>

          <div className="font-bold text-lg text-blue-900">
            (9343)-2501353,2501046
          </div>

          <div className="font-bold text-blue-900 text-lg">
            Mob: +91-6297128554 | Email: info@bcrec.ac.in
          </div>
        </div>
      </div>
    </div>
  );
}