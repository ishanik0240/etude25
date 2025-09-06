'use client'

import { useState } from 'react'
import { ArrowLeft, BookOpen, Play, FileText, Headphones, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const enrolledCourses = [
  {
    id: 1,
    title: 'Algebra 101',
    instructor: 'Dr. Smith',
    progress: 65,
    nextLesson: 'Quadratic Equations',
    totalLessons: 20,
    completedLessons: 13,
    learningMethods: ['notes', 'flashcards', 'quizzes', 'audio']
  },
  {
    id: 2,
    title: 'Biology Basics',
    instructor: 'Prof. Johnson',
    progress: 40,
    nextLesson: 'Cell Structure',
    totalLessons: 15,
    completedLessons: 6,
    learningMethods: ['notes', 'videos', 'quizzes']
  }
]

const learningMethodIcons = {
  notes: FileText,
  flashcards: Brain,
  quizzes: BookOpen,
  audio: Headphones,
  videos: Play
}

export default function MyCoursesPage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <div className="hidden lg:block bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="text-gray-600 mt-1">Continue your learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
              </div>
              <Link href="/dashboard">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Browse More Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">My Courses</h1>
            <div className="w-9"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md lg:max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 lg:p-8 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-xl lg:text-2xl font-bold mb-2">Learning Progress</h2>
                  <p className="text-blue-100">Keep up the great work! You're making excellent progress.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                  <div className="text-center lg:text-left">
                    <p className="text-blue-100 text-sm">Courses Enrolled</p>
                    <p className="text-2xl lg:text-3xl font-bold">{enrolledCourses.length}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-blue-100 text-sm">Average Progress</p>
                    <p className="text-2xl lg:text-3xl font-bold">
                      {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-blue-100 text-sm">Total Lessons</p>
                    <p className="text-2xl lg:text-3xl font-bold">
                      {enrolledCourses.reduce((acc, course) => acc + course.totalLessons, 0)}
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-blue-100 text-sm">Completed</p>
                    <p className="text-2xl lg:text-3xl font-bold">
                      {enrolledCourses.reduce((acc, course) => acc + course.completedLessons, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Continue Learning</h3>
          {enrolledCourses.length > 0 ? (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`}>
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{course.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>•</span>
                        <span>{course.progress}% complete</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
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

                  {/* Next Lesson */}
                  <div className="bg-blue-50 rounded-xl p-3 mb-4">
                    <p className="text-sm text-blue-600 font-medium">Next: {course.nextLesson}</p>
                  </div>

                  {/* Learning Methods */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Learning Methods</p>
                    <div className="flex space-x-2">
                      {course.learningMethods.map((method) => {
                        const IconComponent = learningMethodIcons[method as keyof typeof learningMethodIcons]
                        return (
                          <Link key={method} href={`/courses/${course.id}/learn/${method}`}>
                            <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm transition-colors">
                              <IconComponent className="w-4 h-4" />
                              <span className="capitalize">{method}</span>
                            </button>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link href={`/courses/${course.id}/learn`} className="flex-1">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                        Continue Learning
                      </Button>
                    </Link>
                    <Button variant="outline" className="px-4 rounded-xl">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">No courses enrolled yet</p>
              <Link href="/dashboard">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                  Explore Courses
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/dashboard">
              <button className="w-full bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center transition-colors">
                <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-900">Browse Courses</span>
              </button>
            </Link>
            <Link href="/support/tickets">
              <button className="w-full bg-green-50 hover:bg-green-100 p-4 rounded-xl text-center transition-colors">
                <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-900">Get Help</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
