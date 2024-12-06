import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import AboutUS from './pages/AboutUs'
import Content from './pages/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/about-us" element={<AboutUS />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
