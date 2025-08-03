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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight text-balance">
            Digital Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              That Transform
            </span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            We craft innovative digital experiences that drive growth, enhance user engagement, and deliver measurable
            results for forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="font-body font-medium text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              size="lg"
              className="font-body font-medium text-lg px-8 py-4 border-2 border-slate-300 hover:border-slate-400 transition-all duration-300 bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="font-body text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="font-body text-slate-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="font-body text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-60 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-60 animate-pulse delay-500" />
    </section>
  )
}
