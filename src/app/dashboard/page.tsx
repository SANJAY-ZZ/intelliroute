'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: string
  email: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user as User)
      } else {
        router.push('/login')
      }
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          router.push('/login')
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">🚦 IntelliRoute</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to IntelliRoute 🚦
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your smart traffic management dashboard is ready. Monitor traffic patterns, 
            optimize routes, and make data-driven decisions for your city.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="card group hover:scale-105 transition-all duration-300 fade-in-up">
            <div className="text-4xl mb-4 floating">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Traffic Analytics
            </h3>
            <p className="text-gray-600 mb-4">
              Real-time traffic data and insights to optimize city flow.
            </p>
            <div className="text-2xl font-bold text-primary-600 pulse-glow">
              1,247
            </div>
            <div className="text-sm text-gray-500">
              Active sensors
            </div>
          </div>

          <div className="card group hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl mb-4 floating">🚦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Signals
            </h3>
            <p className="text-gray-600 mb-4">
              AI-optimized traffic light timing for reduced congestion.
            </p>
            <div className="text-2xl font-bold text-green-600 pulse-glow">
              98.5%
            </div>
            <div className="text-sm text-gray-500">
              Efficiency rate
            </div>
          </div>

          <div className="card group hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-4 floating">🚑</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Emergency Routes
            </h3>
            <p className="text-gray-600 mb-4">
              Priority routing for emergency vehicles and first responders.
            </p>
            <div className="text-2xl font-bold text-red-600 pulse-glow">
              12
            </div>
            <div className="text-sm text-gray-500">
              Active routes
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/20 fade-in-up" style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Actions 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="btn-primary text-center pulse-glow">
              View Traffic Map
            </button>
            <button className="btn-secondary text-center">
              Generate Report
            </button>
            <button className="btn-primary text-center">
              Emergency Override
            </button>
            <button className="btn-secondary text-center">
              System Settings
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/20 fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Activity 📈
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🟢</div>
                <div>
                  <p className="font-medium text-gray-900">Traffic optimization completed</p>
                  <p className="text-sm text-gray-500">Downtown intersection - 2 minutes ago</p>
                </div>
              </div>
              <span className="text-sm text-green-600 font-medium">+15% efficiency</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🚑</div>
                <div>
                  <p className="font-medium text-gray-900">Emergency route activated</p>
                  <p className="text-sm text-gray-500">Main Street corridor - 5 minutes ago</p>
                </div>
              </div>
              <span className="text-sm text-blue-600 font-medium">Route cleared</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-2xl mr-3">📊</div>
                <div>
                  <p className="font-medium text-gray-900">Daily report generated</p>
                  <p className="text-sm text-gray-500">System analytics - 1 hour ago</p>
                </div>
              </div>
              <span className="text-sm text-purple-600 font-medium">View report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
