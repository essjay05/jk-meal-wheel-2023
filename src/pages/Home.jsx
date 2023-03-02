import { useEffect } from 'react'
import { Grid, Button } from '@mui/material'

import Spinner from '../components/Spinner/Spinner'

export function Home ({ pageName, activeFeature }) {

  useEffect(() => {
    document.title = pageName
  }, [pageName])

  return (
    <main>
      <section className='page-descriptor' align='start'>
        <div className='page-title-container'>
          <h1 className='page-title-text'>Indecisive on your next meal? Spin the wheel!</h1>
        </div>
        { activeFeature ?
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
          :
          ''
        }
      </section>
      <Spinner />
    </main>
  )
}
