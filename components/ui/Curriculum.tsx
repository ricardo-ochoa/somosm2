import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import { useEffect } from 'react';
import { initialDataCard, SeedICurriculum } from '../../database/data'
import { CurriculumCard } from './CurriculumCard';



export const Curriculum = () => {

  return (
    <>
    <Typography mb={ 4 } variant='h4' component='h3' textAlign='center'>Currículum</Typography>
    
    <Grid container spacing={2} mt={ 4 }>

    {
            initialDataCard.curriculum.map( (curriculum) => (

                <CurriculumCard
                    curriculum={ curriculum as any }
                    key={ curriculum.title }
                />
            ))
    }
    </Grid>
</>
  )
}
