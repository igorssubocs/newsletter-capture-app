import React from 'react'
import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'
import { ThemeProvider } from '../ui/ThemeContext'
import PageLayout from './PageLayout' // выделим логику в отдельный компонент

export default function MainPage() {
  return (
    <ThemeProvider>
      <PageLayout />
    </ThemeProvider>
  )
}
