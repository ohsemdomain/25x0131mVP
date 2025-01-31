import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Direct imports for faster loading
import AdminDashboard from '@/zmodules/dashboard/_AdminDashboard'
import Quotations from '@/zmodules/quotations/_Quotations'
import Settings from '@/zmodules/settings/_Settings'
import PublicQuotation from '@/zmodules/quotations/_QPublic'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/q/:id" element={<PublicQuotation />} />

        {/* Protected routes */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/quotations" element={<Quotations />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}