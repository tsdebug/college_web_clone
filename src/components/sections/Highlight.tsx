export default function Highlight() {
  return (
    <div className="relative w-full h-10 bg-[#00247d] flex items-center overflow-hidden text-white group">
      {/* Red Trapezoid */}
      <div className="absolute left-0 top-0 h-full w-40 bg-[#e53935] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"></div>

      {/* Label */}
      <div className="relative pl-10 pr-10 font-medium text-lg z-10">Highlights</div>

      {/* Marquee */}
      <div className="flex-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          <span className="mx-4">Notice dated 16.10.2025 Kali Puja...</span>
          <span className="mx-4">|</span>
          <span className="mx-4">Tender Notice 14.10.2025</span>
          <span className="mx-4">|</span>
          <span className="mx-4">Tender Notice </span>
          <span className="mx-4">|</span>
          <span className="mx-4">Admission Notice</span>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
