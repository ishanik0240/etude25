'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Star, Users, BookOpen, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const pricingPlans = [
  {
    id: 'free',
    name: 'Free Explorer',
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out StudySphere',
    features: [
      'Access to 3 courses',
      'Basic learning methods',
      'Community support',
      'Mobile app access'
    ],
    limitations: [
      'Limited course selection',
      'No premium features',
      'Standard support only'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'student',
    name: 'Student Plus',
    price: 9.99,
    period: 'month',
    description: 'Ideal for individual students',
    features: [
      'Unlimited course access',
      'All learning methods (AI notes, flashcards, quizzes, audio)',
      'Priority teacher support',
      'Progress analytics',
      'Offline content download',
      'Inclusive learning features'
    ],
    limitations: [],
    popular: true,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'family',
    name: 'Family Plan',
    price: 19.99,
    period: 'month',
    description: 'Great for families with multiple learners',
    features: [
      'Up to 4 student accounts',
      'All Student Plus features',
      'Parent dashboard & progress tracking',
      'Family learning challenges',
      'Dedicated family support',
      'Special needs resources'
    ],
    limitations: [],
    popular: false,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'school',
    name: 'School Edition',
    price: 'Custom',
    period: 'contact us',
    description: 'Designed for educational institutions',
    features: [
      'Unlimited student accounts',
      'Teacher dashboard & analytics',
      'Curriculum integration',
      'Bulk course management',
      'Priority support & training',
      'Custom accessibility features'
    ],
    limitations: [],
    popular: false,
    color: 'from-green-500 to-green-600'
  }
]

export default function PricingPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    if (planId === 'free') {
      router.push('/auth/signup?plan=free')
    } else if (planId === 'school') {
      router.push('/contact/school')
    } else {
      router.push(`/checkout?plan=${planId}&billing=${billingCycle}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Choose Your Plan</h1>
            <div className="w-9"></div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6">
              Unlock your learning potential with personalized education for every student
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  billingCycle === 'yearly' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly <span className="text-green-600 text-xs ml-1">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-br ${plan.color} ${plan.popular ? 'mt-10' : ''}`}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm opacity-90">{plan.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Price */}
                <div className="text-center mb-6">
                  {typeof plan.price === 'number' ? (
                    <>
                      <div className="text-3xl font-bold text-gray-900">
                        ${billingCycle === 'yearly' ? (plan.price * 12 * 0.8).toFixed(0) : plan.price}
                      </div>
                      <div className="text-gray-600 text-sm">
                        per {billingCycle === 'yearly' ? 'year' : plan.period}
                      </div>
                      {billingCycle === 'yearly' && plan.price > 0 && (
                        <div className="text-green-600 text-xs mt-1">
                          Save ${(plan.price * 12 * 0.2).toFixed(0)} annually
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                      <div className="text-gray-600 text-sm">{plan.period}</div>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-xl font-medium ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.id === 'free' ? 'Start Free' : 
                   plan.id === 'school' ? 'Contact Sales' : 
                   'Get Started'}
                </Button>

                {plan.id === 'student' && (
                  <p className="text-center text-xs text-gray-500 mt-2">
                    7-day free trial • Cancel anytime
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose StudySphere?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600 text-sm">
                AI-powered content that adapts to each student's learning style and pace
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Inclusive Education</h3>
              <p className="text-gray-600 text-sm">
                Specialized features for students with learning disabilities and diverse needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Direct access to qualified teachers and educational specialists
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-600 text-sm">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What accessibility features are included?</h3>
              <p className="text-gray-600 text-sm">
                All plans include screen reader support, keyboard navigation, adjustable text sizes, audio narration, and specialized content for learning disabilities.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Student Plus and Family plans include a 7-day free trial. No credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
