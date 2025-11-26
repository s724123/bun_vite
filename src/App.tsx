// src/App.jsx
//import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* 頁面標題列 */}
      <Header />
      {/* 主要內容區域 */}
      <main className="flex-1 px-4 py-8">
        {/* React Router 的 Outlet 會在此渲染對應的頁面元件 */}
        <Outlet />
      </main>
      {/* 頁面底部 */}
      <Footer />
    </div>
  )
}

export default App
