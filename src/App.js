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
        <Route path='/jk-meal-wheel-2023/' element={<Home pageName={`${appTitleLead}`} activeFeature={activeAdditionalFeatures}/>}/>
        <Route path='/jk-meal-wheel-2023/edit-food' element={<FoodForm pageName={`${appTitleLead}- Edit Food Form`}/>}/>
        <Route path='/jk-meal-wheel-2023/style-guide' element={<StyleGuide pageName={`${appTitleLead}- Style Guide`}/>}/>
        <Route path='/jk-meal-wheel-2023/food-places/:id' element={<FoodPlaces pageName={`${appTitleLead}- Food Places`} />}/>
      </Routes>
      <Footer activeAdditionalFeatures={activeAdditionalFeatures}/>
    </>
  )
}

export default App
