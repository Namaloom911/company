"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Search, Megaphone, Brain, Zap, Bot } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Cutting-edge web applications built with React, Next.js, Node.js, and modern technologies that scale with your business.",
    features: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that captivate users and drive conversions through research-backed design principles.",
    features: ["User Research", "Wireframing & Prototyping", "Brand Identity", "Design Systems"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost your search rankings and drive organic traffic to your business.",
    features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics & Reporting"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing campaigns that amplify your brand and generate qualified leads.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Marketing"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description:
      "Strategic AI implementation guidance to transform your business processes and unlock new opportunities.",
    features: ["AI Strategy Development", "Implementation Planning", "ROI Analysis", "Team Training"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    description: "Intelligent automation systems that streamline workflows, reduce costs, and boost productivity.",
    features: ["Workflow Automation", "API Integrations", "Process Optimization", "Custom Solutions"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Advanced AI chatbots that provide 24/7 customer support and enhance user engagement.",
    features: ["Natural Language Processing", "Multi-platform Support", "Integration Ready", "Analytics Dashboard"],
    gradient: "from-teal-500 to-blue-500",
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions that drive growth and innovation for
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-gray-700 text-white hover:bg-white/10 transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  )
}
