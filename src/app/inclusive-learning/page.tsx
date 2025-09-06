'use client'

import { useState } from 'react'
import { ArrowLeft, Heart, Volume2, Eye, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const inclusiveCourses = [
  {
    id: 1,
    title: 'Visual Learning Math',
    description: 'Math concepts taught through visual aids and interactive elements',
    targetGroup: 'Autism Spectrum',
    features: ['Visual cues', 'Structured learning', 'Sensory-friendly'],
    color: 'from-blue-200 to-blue-300',
    icon: Eye
  },
  {
    id: 2,
    title: 'Audio-First Science',
    description: 'Science lessons with enhanced audio narration and sound cues',
    targetGroup: 'Visual Impairments',
    features: ['Audio descriptions', 'Voice navigation', 'Sound effects'],
    color: 'from-green-200 to-green-300',
    icon: Volume2
  },
  {
    id: 3,
    title: 'Simplified Reading',
    description: 'Reading comprehension with dyslexia-friendly fonts and pacing',
    targetGroup: 'Dyslexia',
    features: ['Special fonts', 'Adjustable speed', 'Phonetic support'],
    color: 'from-purple-200 to-purple-300',
    icon: Brain
  },
  {
    id: 4,
    title: 'Life Skills Learning',
    description: 'Practical life skills taught through repetition and visual guides',
    targetGroup: 'Down Syndrome',
    features: ['Step-by-step guides', 'Repetitive practice', 'Real-world examples'],
    color: 'from-pink-200 to-pink-300',
    icon: Heart
  }
]

export default function InclusiveLearningPage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Inclusive Learning</h1>
            <div className="w-9"></div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Specialized courses designed for different learning needs and abilities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Learning for Everyone</h2>
          <p className="text-sm text-gray-600">
            We believe every student deserves access to quality education. Our inclusive courses are designed with accessibility features to support diverse learning needs.
          </p>
        </div>

        {/* Accessibility Features */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Accessibility Features</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 text-center">
              <Volume2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 text-sm">Audio Support</h4>
              <p className="text-xs text-gray-600">Voice narration and audio cues</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <Eye className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 text-sm">Visual Aids</h4>
              <p className="text-xs text-gray-600">Enhanced visual learning tools</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <Brain className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 text-sm">Cognitive Support</h4>
              <p className="text-xs text-gray-600">Structured and simplified content</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 text-sm">Emotional Support</h4>
              <p className="text-xs text-gray-600">Encouraging and patient learning</p>
            </div>
          </div>
        </div>

        {/* Inclusive Courses */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Specialized Courses</h3>
          <div className="space-y-4">
            {inclusiveCourses.map((course) => {
              const IconComponent = course.icon
              return (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className={`h-24 bg-gradient-to-br ${course.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-white opacity-60" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                        {course.targetGroup}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-1">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">Free Access</span>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Support Resources */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Support</h3>
          <div className="space-y-3">
            <Link href="/support/tickets" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <h4 className="font-medium text-gray-900">Get Help</h4>
                <p className="text-sm text-gray-600">Connect with specialized educators</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </Link>
            
            <Link href="/resources/parents" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <h4 className="font-medium text-gray-900">Parent Resources</h4>
                <p className="text-sm text-gray-600">Guides for supporting learning at home</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </Link>
            
            <Link href="/community" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <h4 className="font-medium text-gray-900">Community Forum</h4>
                <p className="text-sm text-gray-600">Connect with other families and educators</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
