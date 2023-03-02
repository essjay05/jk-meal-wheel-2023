import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Typography, Container, Grid, Button, ButtonGroup } from '@mui/material'

import Spinner from '../components/Spinner/Spinner'

export function FoodPlaces ({ pageName, foodCategory }) {

  const location = useLocation()

  useEffect(() => {
    document.title = pageName
    console.log(`Food category is: ${foodCategory}`)
  }, [])

  return (
    <main>
      <section className='page-descriptor' align='start'>
        <div className='page-title-container'>
          <h1>{ pageName }</h1>
        </div>
      </section>
      <section>
        <h2>List of food places nearby goes here</h2>
      </section>
    </main>
  )
}
