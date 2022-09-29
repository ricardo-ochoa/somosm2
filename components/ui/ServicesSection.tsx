import { Star } from '@mui/icons-material'
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

export const ServicesSection = () => {
  return (
    <Grid container display='flex'  alignItems='center' spacing={ 6 }  mb={ 10 }>

    <Grid item xs={ 12 } md={ 6 } display='flex' justifyContent='flex-end' >
      <img width='100%' height='auto' src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663011195/somosm2/Texto_cuandrado_3_auhfkj.png' alt='Somos main banner' />
    </Grid>

    <Grid item xs={ 12 } md={ 6 }>
      <Typography variant='h4' component='h2' mb={ 1 } >Servicios</Typography>

      <List>
          <ListItem  alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }} color='secondary' />
            <ListItemText>Colocación de revestimientos de Mosaico Vítreo en diversos formatos, técnicas tales como tecnicolor, mosaico bizantino, trabajos especiales en mármol y tapetes de piedras naturales, especialistas en piscinas y jacuzzis, productos especiales (materiales epóxicos). </ListItemText>
          </ListItem>

          <ListItem alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }} color='secondary' />
            <ListItemText>Colocación de pisos y recubrimientos, de tipo cerámico, porcelanicos mármoles, piedras naturales y aparentes, etc.</ListItemText>
          </ListItem>

          <ListItem alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }}  color='secondary'/>
            <ListItemText>Aplicación de revestimientos tipo pebble, acabados diversos de albercas, aplicación de chukum Premium, Pastas decorativa y acabados en general.</ListItemText>
          </ListItem>

          <ListItem alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }}  color='secondary'/>
            <ListItemText>Construcción y remodelación de piscinas en general.</ListItemText>
          </ListItem>

          <ListItem alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }} color='secondary' />
            <ListItemText>Servicios generales de construcción y mantenimiento general.</ListItemText>
          </ListItem>

          <ListItem alignItems='flex-start'>
            <Star style={{ marginRight:'15px' }} color='secondary' />
            <ListItemText>Renta general de equipo ligero.</ListItemText>
          </ListItem>
      </List>

    </Grid>

  </Grid>
  )
}
