// layout cannot be rendered like other file in index.jsx, this has different syntax 
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// react-router-dom gives us a prop, outlet, which helps us to dynamically change the part it is written. For example in here the header and the footer remains the same but the middle part will be dynamically changed here using outlet

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout