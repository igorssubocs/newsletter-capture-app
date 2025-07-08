import React from 'react'
import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'
import { ThemeProvider } from '../ui/ThemeContext'

export default function MainPage() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-neutral-100 flex justify-center">
        <div className="container flex flex-col min-h-screen">
          <header className="pt-6">
            <Header />
          </header>
          
          <main className="flex-grow flex items-center justify-center">
            <Form />
          </main>
          
          <footer className="pb-6">
            <Footer />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
