import { useEffect } from 'react'
import { Typography, Container, Grid, Button, ButtonGroup } from '@mui/material'

export function StyleGuide ({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <main>
      <section className='page-descriptor'>
        <Container className='page-title-container' justify='center' maxWidth='sm'>
          <h1>{ pageName }</h1>
        </Container>
      </section>
      <section className='page-content'>
        <Container>
          <p><span className='title-style-1'>Header Style 1 / Title or Typography style 1</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
        <Container>
          <p><span className='title-style-2'>Header Style 2 / Title or Typography style 2</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
        <Container>
          <p><span className='title-style-3'>Header Style 3 / Title or Typography style 3</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
        <Container>
          <p><span className='title-style-4'>Header Style 4 / Title or Typography style 4</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
        <Container>
          <p><span className='title-style-5'>Header Style 5 / Title or Typography style 5</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
        <Container>
          <p><span className='title-style-6'>Header Style 6 / Title or Typography style 6</span></p>
          <p>Humans are omnivores finding sustenance in vegetables, fruits, cooked meat, milk, eggs, mushrooms and seaweed. Humans only eat about 200 out of the worlds 400 000 plant species, despite at least half of them being edible.</p>
          <p>Plants also absorb important nutrients and minerals from the air, water and soil. Carbon, oxygen and hydrogen are absorbed from the air or water and are the basic nutrients needed for plant survival. The three main nutrients absorbed from the soil for plant growth are nitrogen, phosphorus and potassium, with other important nutrients including calcium, sulfur, magnesium, iron boron, chlorine, manganese, zinc, copper molybdenum and nickle.</p>
        </Container>
      </section>
    </main>
  )
}
