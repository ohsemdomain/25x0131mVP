// src/zmodules/quotations/_Quotations.tsx
import { type FC } from 'react'
import { Card } from '@/components/ui/card'
import { BaseLayout } from '@/components/layouts/BaseLayout'

const Quotations: FC = () => {
  return (
     <BaseLayout>     
      {/* Main Content */}
      <div className="flex fixed top-16 inset-x-0 bottom-0">
        {/* Left Panel */}
        <div className="w-[55%] pl-6 py-6 h-full">
          <Card withHoverEffect className="p-6 relative h-full">
            <h1>Left Panel (Data List)</h1>
          </Card>
        </div>

        {/* Right Panel */}
        <div className="w-[45%] p-6 h-full">
          <Card withHoverEffect className="p-6 relative h-full">
            <h1>Right Panel (Details Preview)</h1>
          </Card>
        </div>
      </div>
     </BaseLayout>      
  )
}

export default Quotations