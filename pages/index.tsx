import { ImageAspectRatio } from '@mui/icons-material'
import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomeLayout } from '../components/layouts'
import { ServicesSection, TextImageSection, Clients } from '../components/ui'
import { Star } from '@mui/icons-material';
import { Curriculum } from '../components/ui/Curriculum'


const Home: NextPage = () => {
  return (
    <div>
      <HomeLayout title={'Somos m²'} pageDescription={'Albercas · Mantenimiento · Materiales · Renta de Equipos'}
      imageFullUrl='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663180467/somosm2/imagenes_web_ro5dez.jpg'>

      <TextImageSection />
      <ServicesSection />
      <Clients />
      <Curriculum />

      </HomeLayout>
    </div>
  )
}

export default Home
