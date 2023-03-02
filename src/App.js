import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Home } from './pages/Home'
import { FoodForm } from './pages/FoodForm'
import { StyleGuide } from './pages/StyleGuide'

import { CssBaseline } from '@mui/material'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import { FoodPlaces } from './pages/FoodPlaces'

const App = () => {

  const appTitleLead = 'JK Food Wheel'

  const activeAdditionalFeatures = false

  return (
    <>
      <CssBaseline/>
      <Navbar activeAdditionalFeatures={activeAdditionalFeatures}/>
      <Routes>
        <Route path='/' element={<Home pageName={`${appTitleLead}`} activeFeature={activeAdditionalFeatures}/>}/>
        <Route path='/edit-food' element={<FoodForm pageName={`${appTitleLead}- Edit Food Form`}/>}/>
        <Route path='/style-guide' element={<StyleGuide pageName={`${appTitleLead}- Style Guide`}/>}/>
        <Route path='/food-places/:id' element={<FoodPlaces pageName={`${appTitleLead}- Food Places`} />}/>
      </Routes>
      <Footer activeAdditionalFeatures={activeAdditionalFeatures}/>
    </>
  )
}

export default App
