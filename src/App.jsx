import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Feature from './components/features/Feature'


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto ">
      <Navbar/>
      <Banner/>
      <Feature/>
      </div>
    </div>
  )
}

export default App
