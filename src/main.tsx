import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import About from './pages/about.tsx'
import Impact from "./pages/impact.tsx";
import Media from "./pages/media.tsx"
import Contact from "./pages/contact.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/media" element={<Media /> } />

    </Routes>
  </BrowserRouter>,
)
