import React from 'react'
import Feedback from './components/Feedback'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <div className="flex min-h-screen gap-8 pt-20">
        <aside className="w-64 flex-shrink-0 max-w-xs flex flex-col">
          <div className="sticky top-20 flex-grow overflow-auto"></div>
        </aside>
        <main className="flex-1">
          <Header />
          <FeedbackList />
        </main>
      </div>
    </div>
  )
}

export default App
