'use client'

import { useState } from 'react'
import { Search, Bell, Home, BookOpen, User, Settings, Menu, MessageCircle, TrendingUp, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const featuredCourses = [
  {
    id: 1,
    title: 'Algebra 101',
    instructor: 'Dr. Smith',
    rating: 4.8,
    students: 1234,
    image: '/api/placeholder/300/200',
    category: 'Math',
    difficulty: 'Beginner',
    progress: 65,
    enrolled: true
  },
  {
    id: 2,
    title: 'Biology Basics',
    instructor: 'Prof. Johnson',
    rating: 4.9,
    students: 856,
    image: '/api/placeholder/300/200',
    category: 'Science',
    difficulty: 'Intermediate',
    progress: 0,
    enrolled: false
  },
  {
    id: 3,
    title: 'Chemistry Essentials',
    instructor: 'Prof. Davis',
    rating: 4.6,
    students: 1876,
    category: 'Science',
    difficulty: 'Intermediate',
    progress: 0,
    enrolled: false
  },
  {
    id: 4,
    title: 'World History',
    instructor: 'Dr. Brown',
    rating: 4.8,
    students: 1456,
    category: 'History',
    difficulty: 'Beginner',
    progress: 0,
    enrolled: false
  }
]

const recentActivity = [
  { type: 'completed', course: 'Algebra 101', lesson: 'Quadratic Equations', time: '2 hours ago' },
  { type: 'started', course: 'Biology Basics', lesson: 'Cell Structure', time: '1 day ago' },
  { type: 'achievement', course: 'Math Fundamentals', lesson: 'Completed Chapter 3', time: '2 days ago' }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const categories = ['All', 'Math', 'Science', 'History', 'Language', 'Special Needs']

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">StudySphere</span>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              <Link href="/dashboard" className="bg-blue-50 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Home className="text-blue-500 mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <BookOpen className="text-gray-400 mr-3 h-5 w-5" />
                My Courses
              </Link>
              <Link href="/support/tickets" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <MessageCircle className="text-gray-400 mr-3 h-5 w-5" />
                Get Help
              </Link>
              <Link href="/inclusive-learning" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <User className="text-gray-400 mr-3 h-5 w-5" />
                Inclusive Learning
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Star className="text-gray-400 mr-3 h-5 w-5" />
                Upgrade Plan
              </Link>
              <Link href="/settings" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Settings className="text-gray-400 mr-3 h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="ml-2 lg:ml-0 text-2xl font-bold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:block relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden bg-white border-b px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Enrolled Courses</p>
                    <p className="text-2xl font-semibold text-gray-900">3</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Average Progress</p>
                    <p className="text-2xl font-semibold text-gray-900">68%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Study Hours</p>
                    <p className="text-2xl font-semibold text-gray-900">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Achievements</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                {/* Category Tabs */}
                <div className="mb-6">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                          activeTab === category
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured Courses */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Courses</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-40 bg-gradient-to-br from-blue-200 to-indigo-300 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="w-16 h-16 text-white opacity-60" />
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 text-xs font-medium px-3 py-1 rounded-full">
                              {course.category}
                            </span>
                          </div>
                          {course.enrolled && (
                            <div className="absolute top-4 right-4">
                              <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Enrolled
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                          
                          {course.enrolled && course.progress > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium text-gray-900">{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span>{course.rating}</span>
                              </div>
                              <span>{course.students.toLocaleString()} students</span>
                            </div>
                            <Button 
                              size="sm" 
                              className={`rounded-lg ${course.enrolled ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                            >
                              {course.enrolled ? 'Continue' : 'Enroll'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusive Learning Section */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Learning</h3>
                  <p className="text-gray-600 mb-6">
                    Specialized courses and support for students with learning disabilities including Autism, Down Syndrome, and Dyslexia.
                  </p>
                  <Link href="/inclusive-learning">
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
                      Explore Inclusive Courses
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'completed' ? 'bg-green-500' :
                          activity.type === 'started' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.lesson}</p>
                          <p className="text-xs text-gray-500">{activity.course}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/support/tickets">
                      <Button variant="outline" className="w-full justify-start rounded-lg">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Ask a Question
                      </Button>
                    </Link>
                    <Link href="/courses">
                      <Button variant="outline" className="w-full justify-start rounded-lg">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Browse All Courses
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="w-full justify-start rounded-lg">
                        <Star className="w-4 h-4 mr-2" />
                        Upgrade Plan
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="px-4 py-2">
          <div className="flex justify-around">
            <Link href="/dashboard" className="flex flex-col items-center py-2 text-blue-500">
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/courses" className="flex flex-col items-center py-2 text-gray-400">
              <BookOpen className="w-6 h-6" />
              <span className="text-xs mt-1">Courses</span>
            </Link>
            <Link href="/support/tickets" className="flex flex-col items-center py-2 text-gray-400">
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs mt-1">Help</span>
            </Link>
            <Link href="/settings" className="flex flex-col items-center py-2 text-gray-400">
              <Settings className="w-6 h-6" />
              <span className="text-xs mt-1">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
