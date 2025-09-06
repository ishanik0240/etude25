import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, MessageCircle, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StudySphere</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/auth/login">
                <Button variant="outline" className="rounded-xl">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Column - Content */}
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Personalized Learning for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Every Student
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                StudySphere provides inclusive, accessible education with AI-powered learning methods, 
                expert teacher support, and specialized features for students with diverse learning needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium w-full sm:w-auto">
                    Start Learning Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-medium w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-1" />
                  <span>10,000+ students</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full -translate-y-8 -translate-x-8 opacity-60"></div>
                
                {/* Mock Dashboard */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">My Dashboard</h3>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
                      <h4 className="font-medium mb-2">Continue Learning</h4>
                      <p className="text-sm opacity-90">Algebra 101 - 65% complete</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                        <div className="bg-white h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 rounded-xl p-3">
                        <div className="w-8 h-8 bg-green-500 rounded-lg mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Biology</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">History</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learning That Adapts to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with inclusive design to create 
              personalized learning experiences for students of all abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Learning Methods</h3>
              <p className="text-gray-600">AI-generated notes, flashcards, quizzes, and audio narration to suit every learning style.</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Education</h3>
              <p className="text-gray-600">Specialized features for Autism, Down Syndrome, Dyslexia, and other learning differences.</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Direct access to qualified teachers and educational specialists when you need help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already learning with StudySphere
          </p>
          <Link href="/auth/signup">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">StudySphere</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making quality education accessible to every student, regardless of their learning needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/inclusive-learning" className="hover:text-white">Accessibility</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/support" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 StudySphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
