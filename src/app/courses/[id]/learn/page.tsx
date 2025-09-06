'use client'

import { useState } from 'react'
import { ArrowLeft, Play, FileText, Headphones, Brain, Volume2, Eye, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const learningMethods = [
  {
    id: 'notes',
    title: 'AI-Generated Notes',
    description: 'Comprehensive study notes tailored to your learning pace',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    features: ['Key concepts', 'Visual diagrams', 'Practice problems']
  },
  {
    id: 'flashcards',
    title: 'Interactive Flashcards',
    description: 'Spaced repetition flashcards for better retention',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    features: ['Adaptive learning', 'Progress tracking', 'Memory techniques']
  },
  {
    id: 'quizzes',
    title: 'Practice Quizzes',
    description: 'Test your knowledge with adaptive quizzes',
    icon: Play,
    color: 'from-green-500 to-green-600',
    features: ['Instant feedback', 'Difficulty adjustment', 'Performance analytics']
  },
  {
    id: 'audio',
    title: 'Audio Narration',
    description: 'Listen to lessons with professional narration',
    icon: Headphones,
    color: 'from-orange-500 to-orange-600',
    features: ['Multiple voices', 'Speed control', 'Offline listening']
  }
]

const currentLesson = {
  title: 'Quadratic Equations',
  chapter: 'Chapter 5: Advanced Algebra',
  duration: '25 minutes',
  difficulty: 'Intermediate'
}

export default function LearnPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  if (selectedMethod === 'audio') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => setSelectedMethod(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-lg font-bold text-gray-900">Audio Learning</h1>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Volume2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-6">
          {/* Audio Player */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Headphones className="w-12 h-12" />
              </div>
              <h2 className="text-xl font-bold mb-2">{currentLesson.title}</h2>
              <p className="text-orange-100">{currentLesson.chapter}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>3:45</span>
                <span>25:00</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-1/6"></div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6">
              <button className="p-3 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-white/20 hover:bg-white/30 rounded-full"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </button>
              <button className="p-3 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Accessibility Options</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Playback Speed</span>
                <select className="bg-gray-100 rounded-lg px-3 py-1 text-sm">
                  <option>0.5x</option>
                  <option>0.75x</option>
                  <option selected>1x</option>
                  <option>1.25x</option>
                  <option>1.5x</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Voice Type</span>
                <select className="bg-gray-100 rounded-lg px-3 py-1 text-sm">
                  <option>Standard</option>
                  <option>Clear Speech</option>
                  <option>Slow & Clear</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Captions</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                  On
                </button>
              </div>
            </div>
          </div>

          {/* Transcript */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Live Transcript</h3>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
              <p className="mb-2">
                <span className="bg-yellow-200 px-1 rounded">Quadratic equations are polynomial equations of degree two.</span> They have the general form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.
              </p>
              <p className="text-gray-500">
                These equations appear frequently in mathematics and have many real-world applications...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Learning Methods</h1>
            <div className="w-9"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Current Lesson Info */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">{currentLesson.title}</h2>
          <p className="text-gray-600 mb-4">{currentLesson.chapter}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>⏱️ {currentLesson.duration}</span>
            <span>📊 {currentLesson.difficulty}</span>
          </div>
        </div>

        {/* Learning Methods */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Your Learning Style</h3>
          <div className="space-y-4">
            {learningMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className="w-full bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {method.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <Eye className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Accessibility Features</h3>
              <p className="text-sm text-gray-600 mb-3">
                All learning methods include accessibility features like screen reader support, keyboard navigation, and adjustable text sizes.
              </p>
              <Button variant="outline" size="sm" className="rounded-lg">
                Accessibility Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
