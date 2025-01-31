import { type FC, type ReactNode } from 'react'
import { Header } from '@/components/elements/Header'
import Background from '@/components/ui/background'

export interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen">
      <Background />
      <Header />
      {children}
    </div>
  )
}