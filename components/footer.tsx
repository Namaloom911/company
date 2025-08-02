"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">Digivelopers</h3>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Transforming businesses through innovative digital solutions, cutting-edge web development, and AI-powered
              automation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  AI Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-lg">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center text-lg">
                <Mail className="w-5 h-5 mr-3" />
                hello@digivelopers.com
              </li>
              <li className="text-lg">+1 (555) 123-4567</li>
              <li className="text-lg">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">© {currentYear} Digivelopers. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
