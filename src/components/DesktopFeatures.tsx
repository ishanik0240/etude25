'use client'

import { useEffect, useState } from 'react'
import { useKeyboardShortcuts, KeyboardShortcutsHelp } from './KeyboardShortcuts'

interface DesktopFeaturesProps {
  children: React.ReactNode
}

export function DesktopFeatures({ children }: DesktopFeaturesProps) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
  const { showHelp } = useKeyboardShortcuts()

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (!isDesktop) return
      
      // Only show custom context menu on specific elements
      const target = e.target as HTMLElement
      if (target.closest('.course-card') || target.closest('.dashboard-item')) {
        e.preventDefault()
        setContextMenuPosition({ x: e.clientX, y: e.clientY })
        setShowContextMenu(true)
      }
    }

    const handleClick = () => {
      setShowContextMenu(false)
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('click', handleClick)
    }
  }, [isDesktop])

  // Add desktop-specific CSS classes
  useEffect(() => {
    if (isDesktop) {
      document.body.classList.add('desktop-mode')
      
      // Add smooth scrolling for desktop
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Add focus-visible styles for better keyboard navigation
      const style = document.createElement('style')
      style.textContent = `
        .desktop-mode *:focus-visible {
          outline: 2px solid #3B82F6;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        .desktop-mode .course-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .desktop-mode .dashboard-item:hover {
          transform: scale(1.02);
        }
        
        .desktop-mode .sidebar-item:hover {
          background-color: rgba(59, 130, 246, 0.1);
        }
        
        .desktop-mode button:hover:not(:disabled) {
          transform: translateY(-1px);
        }
        
        .desktop-mode .tooltip {
          position: relative;
        }
        
        .desktop-mode .tooltip:hover::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          z-index: 1000;
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    } else {
      document.body.classList.remove('desktop-mode')
    }
  }, [isDesktop])

  return (
    <>
      {children}
      
      {/* Desktop Context Menu */}
      {showContextMenu && isDesktop && (
        <div 
          className="fixed bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 min-w-[160px]"
          style={{ 
            left: contextMenuPosition.x, 
            top: contextMenuPosition.y,
            transform: 'translate(-50%, -10px)'
          }}
        >
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
            Open in New Tab
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
            Add to Favorites
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
            Share
          </button>
          <hr className="my-1 border-gray-200" />
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-600">
            Properties
          </button>
        </div>
      )}
      
      {/* Keyboard Shortcuts Help */}
      <KeyboardShortcutsHelp />
      
      {/* Desktop-only floating help button */}
      {isDesktop && !showHelp && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => {
              const event = new KeyboardEvent('keydown', {
                key: 'h',
                ctrlKey: true,
                bubbles: true
              })
              window.dispatchEvent(event)
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 tooltip"
            data-tooltip="Keyboard shortcuts (Ctrl+H)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Desktop-only breadcrumb navigation */}
      {isDesktop && (
        <div className="hidden lg:block fixed top-4 left-1/2 transform -translate-x-1/2 z-30">
          <nav className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/dashboard" className="text-blue-500 hover:text-blue-600 transition-colors">
                  Dashboard
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">Current Page</li>
            </ol>
          </nav>
        </div>
      )}
    </>
  )
}

export default DesktopFeatures
