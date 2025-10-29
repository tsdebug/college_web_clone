import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 py-10 px-8 bg-white">
      {/* Left: Welcome Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome to <span className="text-[#f4c300]">BCREC</span>
        </h2>
        <div className="w-16 h-[3px] bg-gray-800 mt-3 mb-6"></div>

        <p className="text-gray-700 leading-relaxed text-justify mb-8">
          BCREC evolved from a coming together of like–minded professionals and
          philanthropic entrepreneurs with an objective to create an institution
          of global standard of learning through synergic application of
          creativity, innovation and discipline. Established in the year 2000,
          BCREC Society within a short span of time made its mark as Centre of
          Excellence in the fields of Engineering, Pharmacy Health Science and
          Management education. Dr. B.C. Roy Engineering College has been
          recognized as an e–Govt. Campus by the Engineering Watch (in
          association with National Informatics Centre, Govt. of India) among
          the 100 prestigious colleges nationwide.
        </p>

        <Button className="bg-[#00247d] hover:bg-[#001d6b] text-white px-6 py-2 rounded-md">
          Read More
        </Button>
      </div>

      {/* Right: Principal's Corner */}
      <Card className="lg:w-1/2 bg-[#00247d] text-white shadow-xl rounded-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Principal's{" "}
              <span className="text-[#f4c300]">Corner</span>
            </h2>
            <div className="h-[1px] bg-white/40 mb-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center px-6 pb-6 gap-6">
            <img
              src="/principal.jpg"
              alt="Principal"
              className="w-60 h-50 rounded-none shadow-md object-cover"
            />
            <div className="flex-1 text-white text-justify">
              <p className="leading-relaxed mb-6">
                I welcome you all to join with me towards the journey of
                excellence in technical education. Dr. B.C. Roy Engineering
                College is a well known name looked upon by any aspirant in the
                Engineering and Technological Education.
              </p>
              <Button className="bg-[#e53935] hover:bg-[#c62828] text-white px-6 py-2 rounded-md">
                Read More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
