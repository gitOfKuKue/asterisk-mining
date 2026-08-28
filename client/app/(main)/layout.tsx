import React from 'react'
import Sidebar from '@/src/components/layout/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 shrink-0 border-r border-foreground/10 p-4" />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
