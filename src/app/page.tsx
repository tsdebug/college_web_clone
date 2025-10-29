import Topbar from "@/components/sections/Topbar"; // Section 1
import Logosec from "@/components/sections/Logosec"; // Section 2
import MainNav from "@/components/sections/MainNav"; // Section 3
import Highlight from "@/components/sections/Highlight"; // Section 4
import Slider from "@/components/sections/Slider"; // Section 5
import Welcome from "@/components/sections/Welcome"; // Section 6


export default function Home() {
  return (
    <>
      <Topbar />
      <Logosec />
      <MainNav />
      <Highlight/>
      <Slider/>
      <Welcome />
    </>
  );
}
