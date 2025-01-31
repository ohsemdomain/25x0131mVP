import { motion } from "framer-motion"
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

const navigationItems = [
  { 
    id: 1, 
    label: 'Dashboard', 
    path: '/'
  },
  { 
    id: 2, 
    label: 'Quotations', 
    path: '/quotations'
  },
  { 
    id: 3, 
    label: 'Settings', 
    path: '/settings'
  },
] as const

type NavigationItem = typeof navigationItems[number]

interface NavigationMenuProps {
  items?: typeof navigationItems;
}

export const MainNavigation = ({ items = navigationItems }: NavigationMenuProps) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<NavigationItem | null>(null);
  const activeItem = items.find(item => item.path === location.pathname) || items[0];

  return (
    <ul className="flex -mb-px">
      {items.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          className={`relative transition-colors hover:text-primary ${
            activeItem.id === item.id ? "text-primary py-2" : "py-2 text-slate-400"
          }`}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="px-5 py-2 relative">
            {item.label}
            {hoveredItem?.id === item.id && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 bg-primary/10 rounded-md"
              />
            )}
          </div>
          {activeItem.id === item.id && (
            <motion.div
              layoutId="active"
              className="absolute inset-x-0 -bottom-1.5 h-[1px] bg-primary"
            />
          )}
          {hoveredItem?.id === item.id && (
            <motion.div
              layoutId="hover"
              className="absolute inset-x-0 -bottom-1.5 h-[1px] bg-primary"
            />
          )}
        </Link>
      ))}
    </ul>
  )
}