import { Grid, Typography, Box, Button } from '@mui/material'
import React from 'react'

export const TextImageSection = () => {
  return (
    <Grid container display='flex'  alignItems='center' spacing={ 6 } mb={ 20 }>

    <Grid item xs={ 12 } md={ 6 }>
      <Typography variant='h3' component='h1' mb={ 1 } >Somos alta calidad.</Typography>
      <Typography variant='subtitle1' component='h2' mb={ 4 } >Mantenimiento · Renta de Equipos · Materiales · Albercas</Typography>
      <Typography variant='subtitle2' component='h1'
      >Contamos con más de 15 años de experiencia en el ramo, dando servicio a particulares, constructoras, y cadenas hoteleras en todo el sureste y el país en general.</Typography>
      
      <Box mt={ 4 }>
        <Typography variant='subtitle1' component='h6' mb={ 2 } >Contactar:</Typography>
        
        <Box display='flex' maxWidth='280px' justifyContent='space-between' >
          <Button href='https://wa.me/529982921163' target='_blank' style={{ paddingRight:'1rem', paddingLeft:'1rem', backgroundColor:'#25D366', color:'white' }} >WhatssApp</Button>
          <Button href='tel:9982921163' target='_blank' style={{ paddingRight:'1rem', paddingLeft:'1rem', backgroundColor:'#000', color:'white' }} >Teléfono</Button>
          <Button href='mailto:rosaura.pat@somosm2.mx' style={{ paddingRight:'1rem', paddingLeft:'1rem', backgroundColor:'#000', color:'white' }} >Email</Button>
        </Box>
        
      </Box>
    </Grid>

    <Grid item xs={ 12 } md={ 6 } display='flex' justifyContent='flex-end' >
      <img width='100%' height='auto' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663011266/somosm2/main_hf2zwu.jpg' alt='Somos main banner' />
    </Grid>

  </Grid>
  )
}
