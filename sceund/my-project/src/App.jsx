import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/home/home'
import Layout2 from './components/Layout2/Layout2'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Layout2/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
