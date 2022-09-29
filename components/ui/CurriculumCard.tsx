import { FC, useEffect } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box, Modal } from '@mui/material'
import { SeedICurriculum } from '../../database/data';
import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{ xs:'90%', sm:'425px', md:'500px' },
  border: '2px solid #fff',
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

interface Props {
    curriculum: SeedICurriculum; 
}


export const CurriculumCard: FC<Props> = ( {curriculum} ) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } display='flex'>
        <Card sx={{ width:'100%' }}>
        <CardActionArea onClick={ handleOpen }>
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

            <Typography id="modal-modal-title" variant="subtitle2" component="h6" mt={ 1 }>
              Año de ejecución: {curriculum.ano}
            </Typography>

            {/* <Typography variant="body2" color="text.secondary" mt={ 2 }>
            Contratista o Contacto:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
            {curriculum.contacto}
            </Typography> */}

            </CardContent>
        </CardActionArea>
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={6}>
          <CardMedia             
            component="img"
            image={curriculum.images[0]}
            alt={curriculum.title}
            ></CardMedia>

          <Typography id="modal-modal-title" variant="h6" component="h2" mt={ 2 }>
          {curriculum.title}
          </Typography>

          <Typography id="modal-modal-title" variant="subtitle2" component="h6" mt={ 1 }>
          Año de ejecución: {curriculum.ano}
          </Typography>

          <Typography variant="body2" color="text.primary" mt={ 2 }>
            Descripción de los trabajos:
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {curriculum.description}
          </Typography>

        </Box>
      </Modal>

    </Grid>
  )

}
