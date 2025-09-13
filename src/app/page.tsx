'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: '🤖',
      title: 'AI-driven traffic light optimization',
      description: 'Smart algorithms that adapt traffic signals in real-time based on traffic patterns and congestion levels.'
    },
    {
      icon: '📊',
      title: 'Real-time congestion monitoring',
      description: 'Live traffic data analysis with predictive insights to prevent bottlenecks before they occur.'
    },
    {
      icon: '🚑',
      title: 'Emergency vehicle route prioritization',
      description: 'Automatic green wave creation for emergency vehicles to ensure faster response times.'
    },
    {
      icon: '📈',
      title: 'Data-driven traffic insights',
      description: 'Comprehensive analytics and reporting to help city planners make informed decisions.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">🚦 IntelliRoute</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="btn-primary text-sm">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/login" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-sm block text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 gradient-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full floating" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl md:text-8xl floating">🚦</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up">
              IntelliRoute
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              Optimizing Roads, Empowering Cities
            </p>
            <p className="text-lg text-primary-200 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
              Revolutionize urban mobility with AI-powered traffic management that reduces congestion, 
              improves safety, and creates smarter cities for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 pulse-glow">
                Get Started 🚀
              </Link>
              <Link href="/login" className="btn-secondary text-lg px-8 py-4 glass-effect">
                Officer Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Traffic Solutions 🛣️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge technology transforms how cities manage traffic flow, 
              creating safer and more efficient transportation networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card group hover:scale-105 transition-all duration-300 fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-slow floating">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full floating"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full floating" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up">
            Ready to Transform Your City? 🌟
          </h2>
          <p className="text-xl text-primary-100 mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
            Join the smart traffic revolution and make your city more efficient, 
            safer, and environmentally friendly.
          </p>
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/signup" className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 pulse-glow">
              Start Your Journey Today 🚀
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary-400 mb-4 block">🚦 IntelliRoute</span>
            <p className="text-gray-400 mb-4">
              Smart Traffic System for Modern Cities
            </p>
            <p className="text-sm text-gray-500">
              © 2024 IntelliRoute. Built for Hackathon Innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
