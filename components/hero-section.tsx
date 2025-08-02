"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Gradient Rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-ring w-96 h-96 top-20 right-20 opacity-60"></div>
        <div className="gradient-ring gradient-ring-slow w-80 h-80 bottom-32 left-16 opacity-40"></div>
        <div className="gradient-ring w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            <span className="gradient-text-purple">Breakthrough</span> AI from
            <br />
            <span className="text-white">Data to Deployment</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Digivelopers delivers proven digital solutions, AI automation, and cutting-edge development
            <br />
            to startups, enterprises, and Fortune 500 companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400 mb-16">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-medium rounded-full group transition-all duration-200"
              onClick={scrollToContact}
            >
              Book a Demo →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white/20 hover:border-white/40 bg-transparent text-white rounded-full transition-all duration-200"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Build AI →
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-gray-400 text-sm animate-fade-in-up delay-600 mb-12">
            Digivelopers works with <span className="text-white font-medium">Generative AI Companies</span>, U.S.
            Government Agencies & Enterprises
          </p>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 animate-fade-in-up delay-800">
            <div className="text-white/60 text-xl font-semibold">Meta</div>
            <div className="text-white/60 text-xl font-semibold">OpenAI</div>
            <div className="text-white/60 text-xl font-semibold">Cohere</div>
            <div className="text-white/60 text-xl font-semibold">Adept</div>
            <div className="text-white/60 text-xl font-semibold">Character.ai</div>
          </div>
        </div>
      </div>
    </section>
  )
}
