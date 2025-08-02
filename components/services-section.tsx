"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Search, TrendingUp, Bot, Zap, MessageSquare, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "Performance Optimization", "E-commerce Solutions", "CMS Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers and enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Local SEO"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns across multiple channels to grow your business online.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Analytics"],
  },
  {
    icon: Bot,
    title: "AI Consulting",
    description: "Strategic AI implementation to automate processes and enhance business intelligence.",
    features: ["AI Strategy", "Process Analysis", "Implementation Planning", "ROI Optimization"],
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    description: "Streamline your workflows with intelligent automation tools and custom integrations.",
    features: ["Workflow Automation", "API Integration", "Data Processing", "Custom Tools"],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Intelligent chatbots that provide 24/7 customer support and enhance user engagement.",
    features: ["Natural Language Processing", "Multi-platform Support", "Analytics Dashboard", "Custom Training"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="gradient-text-rainbow">AI FOR THE</span> ENTERPRISE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive digital solutions that drive growth and innovation for
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass hover:bg-white/10 transition-all duration-300 border-white/10 hover:border-white/20 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl glass group-hover:bg-white/10 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-3 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="gradient-text-purple font-medium group-hover:text-white transition-colors duration-300 cursor-pointer text-lg">
                  Learn More →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
