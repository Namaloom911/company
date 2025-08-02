"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Let's Start Your <span className="gradient-text-purple">Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help your
            business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We're here to help you succeed. Reach out to us through any of these channels and we'll respond within
                  24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="ml-6">
                    <div className="text-lg font-medium text-white">Email</div>
                    <div className="text-gray-300 text-lg">hello@digivelopers.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="ml-6">
                    <div className="text-lg font-medium text-white">Phone</div>
                    <div className="text-gray-300 text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="ml-6">
                    <div className="text-lg font-medium text-white">Office</div>
                    <div className="text-gray-300 text-lg">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-white/10">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-white mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg p-4 rounded-xl"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-white mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg p-4 rounded-xl"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="company" className="block text-lg font-medium text-white mb-3">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg p-4 rounded-xl"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-lg font-medium text-white mb-3">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="" className="bg-black">
                          Select a service
                        </option>
                        <option value="web-development" className="bg-black">
                          Web Development
                        </option>
                        <option value="ui-ux-design" className="bg-black">
                          UI/UX Design
                        </option>
                        <option value="seo" className="bg-black">
                          SEO Optimization
                        </option>
                        <option value="digital-marketing" className="bg-black">
                          Digital Marketing
                        </option>
                        <option value="ai-consulting" className="bg-black">
                          AI Consulting
                        </option>
                        <option value="automation" className="bg-black">
                          Automation Solutions
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-white mb-3">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg p-4 rounded-xl"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white hover:bg-gray-100 text-black text-lg font-medium py-4 rounded-xl group transition-all duration-200"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
