import { FC, useEffect } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { SeedICurriculum } from '../../database/data';

interface Props {
    curriculum: SeedICurriculum; 
}


export const CurriculumCard: FC<Props> = ( {curriculum} ) => {
  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } display='flex'>
        <Card sx={{ width:'100%' }}>
        <CardActionArea >
            <CardMedia
            component="img"
            height="200px"
            image={curriculum.images[0]}
            alt={curriculum.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div" >
            {curriculum.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={ 2 }>
            Contratista o Contacto:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
            {curriculum.contacto}
            </Typography>

            </CardContent>
        </CardActionArea>
    </Card>
    </Grid>
  )
}
