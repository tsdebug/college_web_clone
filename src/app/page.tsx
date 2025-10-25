// app/page.tsx
import Navbar from "@/sections/Navbar" ;
import Header from "@/sections/Header"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Nav-Bar */}
      <Navbar />

      {/* Section 2: Main Header */}
      <Header />

      {/* Placeholder for the rest of the page. */}
      <main className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold">Welcome to BCREC Clone!</h1>
        <p className="mt-2">This is where the rest of our content will go, organized into components.</p>
      </main>
    </div>
  );
}