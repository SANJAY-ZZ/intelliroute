'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showResend, setShowResend] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        setMessage('Check your email for the confirmation link!')
        setShowResend(true)
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        router.push('/dashboard')
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleResendEmail = async () => {
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.resend({
        email,
        type: 'signup',
      })
      if (error) throw error
      setMessage('Confirmation email resent! Check your inbox.')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100/30 rounded-full floating"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-200/20 rounded-full floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary-300/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-6xl floating">🚦</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 fade-in-up">
            {mode === 'login' ? 'Welcome back!' : 'Join IntelliRoute'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 fade-in-up" style={{animationDelay: '0.2s'}}>
            {mode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                  Sign up here
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                  Sign in here
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-sm py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-white/20 fade-in-up" style={{animationDelay: '0.4s'}}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
                {message}
                {showResend && mode === 'signup' && (
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={handleResendEmail}
                      disabled={loading}
                      className="text-sm text-primary-600 hover:text-primary-500 underline disabled:opacity-50"
                    >
                      Didn&apos;t receive the email? Resend confirmation
                    </button>
                  </div>
                )}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </div>
                ) : (
                  mode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-primary-500"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
