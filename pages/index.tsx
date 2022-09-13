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
      <HomeLayout title={'Somos m²'} pageDescription={'MANTENIMIENTO · RENTA DE EQUIPOS · MATERIALES · ALBERCAS'}
      imageFullUrl='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663011195/somosm2/Texto_cuandrado_3_auhfkj.png'>

      <TextImageSection />
      <ServicesSection />
      <Clients />
      <Curriculum />

      </HomeLayout>
    </div>
  )
}

export default Home
