'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ShortcutAction {
  key: string
  description: string
  action: () => void
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
}

export function useKeyboardShortcuts() {
  const router = useRouter()
  const [showHelp, setShowHelp] = useState(false)

  const shortcuts: ShortcutAction[] = [
    {
      key: 'h',
      description: 'Show keyboard shortcuts help',
      action: () => setShowHelp(true),
      ctrlKey: true
    },
    {
      key: 'd',
      description: 'Go to Dashboard',
      action: () => router.push('/dashboard'),
      ctrlKey: true
    },
    {
      key: 'c',
      description: 'Go to My Courses',
      action: () => router.push('/courses'),
      ctrlKey: true
    },
    {
      key: 'p',
      description: 'Go to Profile',
      action: () => router.push('/profile'),
      ctrlKey: true
    },
    {
      key: 's',
      description: 'Search (focus search bar)',
      action: () => {
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
        }
      },
      ctrlKey: true
    },
    {
      key: 'Escape',
      description: 'Close modals/overlays',
      action: () => {
        setShowHelp(false)
        // Close any open modals
        const closeButtons = document.querySelectorAll('[data-close-modal]')
        closeButtons.forEach(button => (button as HTMLElement).click())
      }
    },
    {
      key: '/',
      description: 'Quick search',
      action: () => {
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
        }
      }
    },
    {
      key: 'ArrowUp',
      description: 'Navigate up in lists',
      action: () => {
        // Handle list navigation
        const focusedElement = document.activeElement
        if (focusedElement && focusedElement.previousElementSibling) {
          (focusedElement.previousElementSibling as HTMLElement).focus()
        }
      }
    },
    {
      key: 'ArrowDown',
      description: 'Navigate down in lists',
      action: () => {
        // Handle list navigation
        const focusedElement = document.activeElement
        if (focusedElement && focusedElement.nextElementSibling) {
          (focusedElement.nextElementSibling as HTMLElement).focus()
        }
      }
    }
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement) {
        // Allow Escape to blur input fields
        if (event.key === 'Escape') {
          (event.target as HTMLElement).blur()
        }
        return
      }

      const shortcut = shortcuts.find(s => 
        s.key === event.key &&
        !!s.ctrlKey === (event.ctrlKey || event.metaKey) &&
        !!s.shiftKey === event.shiftKey &&
        !!s.altKey === event.altKey
      )

      if (shortcut) {
        event.preventDefault()
        shortcut.action()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])

  return { showHelp, setShowHelp, shortcuts }
}

export function KeyboardShortcutsHelp() {
  const { showHelp, setShowHelp, shortcuts } = useKeyboardShortcuts()

  if (!showHelp) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Keyboard Shortcuts</h2>
            <button
              onClick={() => setShowHelp(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              data-close-modal
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2">Use these keyboard shortcuts to navigate faster</p>
        </div>
        
        <div className="p-6">
          <div className="grid gap-4">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-gray-700">{shortcut.description}</span>
                <div className="flex items-center space-x-1">
                  {shortcut.ctrlKey && (
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">
                      {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}
                    </kbd>
                  )}
                  {shortcut.shiftKey && (
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">
                      Shift
                    </kbd>
                  )}
                  {shortcut.altKey && (
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">
                      Alt
                    </kbd>
                  )}
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">
                    {shortcut.key === ' ' ? 'Space' : shortcut.key}
                  </kbd>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Pro Tips</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Press <kbd className="px-1 bg-blue-100 rounded">Tab</kbd> to navigate between interactive elements</li>
              <li>• Use <kbd className="px-1 bg-blue-100 rounded">Enter</kbd> to activate buttons and links</li>
              <li>• Hold <kbd className="px-1 bg-blue-100 rounded">Shift</kbd> while tabbing to go backwards</li>
              <li>• Most shortcuts work with <kbd className="px-1 bg-blue-100 rounded">Cmd</kbd> on Mac instead of <kbd className="px-1 bg-blue-100 rounded">Ctrl</kbd></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyboardShortcutsHelp
