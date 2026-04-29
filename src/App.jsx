import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import WritingPage from './pages/Writing'
import ArticlePage from './pages/Article'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/writing"       element={<WritingPage />} />
        <Route path="/writing/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
