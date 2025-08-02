"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Gradient Rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Animated Gradient Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-[600px] h-[600px] rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-yellow-500 animate-spin-slow opacity-30"></div>
          <div className="absolute inset-4 w-[568px] h-[568px] rounded-full bg-black"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Breakthrough
            </span>{" "}
            <span className="text-white">AI from</span>
            <br />
            <span className="text-white">Vision to</span>{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Reality
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Digivelopers delivers cutting-edge digital solutions, AI innovations, and transformative experiences to
            startups, enterprises, and visionary companies worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Book a Demo →
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Services →
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <p className="text-sm text-gray-400 mb-8 tracking-wider uppercase">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              AI FOR THE ENTERPRISE
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            <div className="text-2xl font-bold text-white">Meta</div>
            <div className="text-2xl font-bold text-white">OpenAI</div>
            <div className="text-2xl font-bold text-white">Microsoft</div>
            <div className="text-2xl font-bold text-white">Google</div>
            <div className="text-2xl font-bold text-white">Amazon</div>
          </div>
        </div>
      </div>
    </section>
  )
}
