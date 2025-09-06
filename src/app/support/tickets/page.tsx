'use client'

import { useState } from 'react'
import { ArrowLeft, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const existingTickets = [
  {
    id: 1,
    subject: 'Math Problem Help',
    category: 'Mathematics',
    status: 'open',
    teacher: 'Dr. Smith',
    lastReply: '2 hours ago',
    priority: 'medium'
  },
  {
    id: 2,
    subject: 'Science Lab Question',
    category: 'Science',
    status: 'resolved',
    teacher: 'Prof. Johnson',
    lastReply: '1 day ago',
    priority: 'low'
  }
]

export default function SupportTicketsPage() {
  const router = useRouter()
  const [showNewTicket, setShowNewTicket] = useState(false)
  const [newTicket, setNewTicket] = useState({
    subject: '',
    category: '',
    priority: 'medium',
    description: ''
  })

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New ticket:', newTicket)
    setShowNewTicket(false)
    setNewTicket({ subject: '', category: '', priority: 'medium', description: '' })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-orange-600 bg-orange-100'
      case 'resolved': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <Clock className="w-4 h-4" />
      case 'resolved': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <MessageCircle className="w-4 h-4" />
      default: return <MessageCircle className="w-4 h-4" />
    }
  }

  if (showNewTicket) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setShowNewTicket(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">New Support Ticket</h1>
              <div className="w-9"></div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-6">
          <form onSubmit={handleSubmitTicket} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <Input
                type="text"
                placeholder="Brief description of your question"
                value={newTicket.subject}
                onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={newTicket.category}
                onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              >
                <option value="">Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Language Arts">Language Arts</option>
                <option value="Special Education">Special Education</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={newTicket.priority}
                onChange={(e) => setNewTicket({...newTicket, priority: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="low">Low - General question</option>
                <option value="medium">Medium - Need help soon</option>
                <option value="high">High - Urgent assistance needed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Please describe your question or issue in detail..."
                value={newTicket.description}
                onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none h-32"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium">
              <Send className="w-4 h-4 mr-2" />
              Submit Ticket
            </Button>
          </form>
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
            <h1 className="text-xl font-bold text-gray-900">Support Tickets</h1>
            <button 
              onClick={() => setShowNewTicket(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Send className="w-5 h-5 text-blue-500" />
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Get help from subject-specific teachers
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Quick Actions */}
        <div className="mb-6">
          <Button 
            onClick={() => setShowNewTicket(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Ask a Question
          </Button>
          
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white rounded-xl p-3 text-center hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">📚</span>
              </div>
              <span className="text-xs text-gray-600">Math Help</span>
            </button>
            <button className="bg-white rounded-xl p-3 text-center hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">🔬</span>
              </div>
              <span className="text-xs text-gray-600">Science</span>
            </button>
            <button className="bg-white rounded-xl p-3 text-center hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🎨</span>
              </div>
              <span className="text-xs text-gray-600">Special Ed</span>
            </button>
          </div>
        </div>

        {/* Existing Tickets */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Tickets</h3>
          {existingTickets.length > 0 ? (
            <div className="space-y-3">
              {existingTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 flex-1">{ticket.subject}</h4>
                    <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {getStatusIcon(ticket.status)}
                      <span className="ml-1 capitalize">{ticket.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{ticket.category}</span>
                    <span>Teacher: {ticket.teacher}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Last reply: {ticket.lastReply}</span>
                    <Button size="sm" variant="outline" className="rounded-lg">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No tickets yet</p>
              <p className="text-sm text-gray-400">Ask your first question to get started</p>
            </div>
          )}
        </div>

        {/* Help Resources */}
        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Live Chat</h4>
                <p className="text-sm text-gray-600">Available 9 AM - 6 PM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">📞</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Emergency Support</h4>
                <p className="text-sm text-gray-600">Call: 1-800-STUDY-HELP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
