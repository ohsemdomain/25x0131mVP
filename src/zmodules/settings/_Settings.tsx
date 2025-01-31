// src/zmodules/settings/_Settings.tsx
import { type FC } from 'react'
import { Card } from '@/components/ui/card'
import { BaseLayout } from '@/components/layouts/BaseLayout'

const Settings: FC = () => {
  return (
     <BaseLayout>     
      {/* Main Content */}
      <div className="flex fixed top-16 inset-x-0 bottom-0">
        <div className="w-full p-6 h-full">
          <Card withHoverEffect className="p-6 relative h-full">
            <h1>Settings</h1>
          </Card>
        </div>
      </div>
     </BaseLayout>      
  )
}

export default Settings