import { useState } from 'react'
import Hero from './components/Hero'
import WhatWeOffer from './components/WhatWeOffer'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <WhatWeOffer />
      <Blogs />
      <Contact />
      {/* <Footer /> Will need all the links and data for this to build properly */}
    </>
  )
}

export default App
