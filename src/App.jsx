import './App.css'
import { useState } from 'react'
import { headerLinks } from './data/data'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [currentPage, setCurrentPage] = useState(headerLinks[0].link)


  return (
    <>
      <Header isHome={currentPage === "Home"} setCurrentPage={setCurrentPage} headerLinks={headerLinks}/>
      <Main setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <Footer isHome={currentPage !== "Home"} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App
