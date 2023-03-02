import { useEffect } from 'react'
import { Typography, Container, Grid, Button, ButtonGroup } from '@mui/material'


export function FoodForm ({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <main>
      <section className='page-descriptor'>
        <div className='page-title-container'>
          <h1>{ pageName }</h1>
        </div>
        <div>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained'>Edit Food Selections</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined'>Secondary Action</Button>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className='form-container'>
        <div>

        </div>
      </section>
    </main>
  )
}
