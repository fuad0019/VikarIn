import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

import Products from './pages/Products';
import Contact from './pages/Contact';
import Substitutes from './pages/Substitutes';
import '@fontsource-variable/open-sans';
import '@fontsource/roboto';
// Supports weights 100-900
import '@fontsource-variable/inter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Produkter" element={<Products />} />
        <Route path="Kontakt" element={<Contact />} />
        <Route path="Vikarer" element={<Substitutes />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
