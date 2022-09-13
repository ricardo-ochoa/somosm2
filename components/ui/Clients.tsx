import { Typography, Grid } from '@mui/material'
import React from 'react'

export const Clients = () => {
  return (
    <>
        <Typography mb={ 4 } variant='h4' component='h3' textAlign='center' >Nuestros clientes</Typography>
        <Grid container spacing={3} mb={ 8 }>
          
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030217/somosm2/bluebay_ma9fke.jpg' alt='Blue Bay'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/country-towers_uewpdu.jpg' alt='Country Towers'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/hrhotel_eksi1e.jpg' alt='Hard Rock'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/rr_nlhxz8.jpg' alt='Royal Resorts'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030217/somosm2/pbc_gzcobn.jpg' alt='Paradise Cozumel'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/mm_gcbbiz.jpg' alt='Mayan Monckey'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030217/somosm2/unico_t5q777.jpg' alt='Unico Riviera maya'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/puertocan_llcpny.jpg' alt='Puerto Cancún'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030216/somosm2/aqua_gnh9pl.jpg' alt='Aqua Residencial'></img> 
          </Grid>
          <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
            <img style={{ margin:'0.5rem' }} width='80%' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663030217/somosm2/lo_eyffps.jpg' alt='Country Olas'></img> 
          </Grid>

        </Grid>
    </>
  )
}
