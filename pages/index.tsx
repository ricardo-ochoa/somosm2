import { ImageAspectRatio } from '@mui/icons-material'
import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomeLayout } from '../components/layouts'
import { ServicesSection, TextImageSection } from '../components/ui'
import { Star } from '@mui/icons-material';


const Home: NextPage = () => {
  return (
    <div>
      <HomeLayout title={'Somos m²'} pageDescription={'MANTENIMIENTO · RENTA DE EQUIPOS · MATERIALES · ALBERCAS'}
      imageFullUrl='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663011195/somosm2/Texto_cuandrado_3_auhfkj.png'>

      <TextImageSection />
      <ServicesSection />

      <Grid container >
        <Grid item xs={ 12 } mb={ 4 }>
          <Typography variant='h4' component='h3' textAlign='center' >Nuestros clientes</Typography>
        </Grid>
      </Grid>

        <Grid container spacing={3}>
          
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


      




      </HomeLayout>
    </div>
  )
}

export default Home
