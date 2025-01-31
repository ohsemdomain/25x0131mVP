// src/components/elements/Header.tsx
import { type FC } from 'react'
import { Twitch, LogOut } from 'lucide-react'
import { MainNavigation } from '@/components/navigations/MainNavigation'

// Single Responsibility: Logo component only handles logo rendering
const Logo: FC = () => (
  <Twitch className="h-8 w-8" />
)

// Single Responsibility: LogoutButton component handles logout functionality
const LogoutButton: FC = () => {
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...')
  }

  return (
    <button 
      className="p-2 hover:bg-muted rounded-md"
      aria-label="Log out"
      onClick={handleLogout}
    >
      <LogOut className="h-5 w-5" />
    </button>
  )
}

// Interface Segregation: Define clear interfaces for header props
interface HeaderProps {
  className?: string;
}

// Open/Closed: Header can be extended through props without modification
export const Header: FC<HeaderProps> = ({ className = '' }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="h-16 px-4 flex items-center justify-between border-b border-border-default">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-6">
          <Logo />
          <MainNavigation />
        </div>
        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}