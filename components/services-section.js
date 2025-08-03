"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Zap, Users, BarChart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies to modernize your business.",
      features: ["Technology Consulting", "Digital Roadmaps", "Process Optimization", "Team Training"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with advanced optimization.",
      features: ["Core Web Vitals", "Database Optimization", "CDN Setup", "Caching Strategies"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & SEO",
      description: "Data-driven insights and search engine optimization to grow your online presence.",
      features: ["Google Analytics", "SEO Optimization", "Performance Tracking", "Conversion Optimization"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-display text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                <CardDescription className="font-body text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-body text-sm text-slate-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
