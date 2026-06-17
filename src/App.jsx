import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import About from './pages/About'
import FranchiseCost from './pages/FranchiseCost'
import HowToApply from './pages/HowToApply'
import Eligibility from './pages/Eligibility'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/franchise-cost" element={<FranchiseCost />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </BrowserRouter>
  )
}

export default App
