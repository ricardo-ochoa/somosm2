import { useContext, useState } from 'react'
// import { CartContext, UiContext } from '../../context';

import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge, InputAdornment, Input, Grid } from '@mui/material';
import { FilePresent } from '@mui/icons-material'
import { useRouter } from 'next/router'



export const Navbar = () => {

//   const { asPath, push } = useRouter()
//   const { toggleSideMenu } = useContext( UiContext )
//   const { numberOfItems } = useContext( CartContext )

//   const [searchTerm, setSearchTerm ] =  useState('');
//   const [isSearchVisible, setIsSearchVisible ] =  useState( false );

//   const onSearchTerm = () => {
//     if( searchTerm.trim().length === 0 ) return;
//     push( `/search/${ searchTerm }` );
//   }


  return (
      <AppBar position="sticky">
          <Toolbar sx={{ maxWidth: '1440px', margin: '0 auto', width: '100%', height: '90px', marginTop:'2rem', backgroundColor:'white'}}>

            <Box display='flex' sx={{ flexDirection:{xs:'row', sm:'row'}, alignItems:{ xs:'center', md:'center' }}} justifyContent='space-between' width='100%'>

                <NextLink href='/' passHref>
                    <Link>
                      <Box sx={{ width: {xs:'180px', md:'300px' } }}>
                          <img width='100%' src={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663014822/somosm2/logo_ictbnp.png'} alt={'Somos m2 Logo'}></img>
                      </Box>
                    </Link>
                </NextLink>

                <Box flex={ 1 }/>
                
                
                  <Button href='https://drive.google.com/file/d/1IdC7uMSvXFMYeEaWS_PDeCB3EFJF5ZQI/view?usp=sharing'  target='_blank'
                  variant="contained" startIcon={<FilePresent />} color='secondary' style={{ width:'180px', height: '40px' }} sx={{ display:{ xs: 'none', md:'flex' } }}  >
                      Ver Currículum
                  </Button>
                

                  <IconButton
                  href='https://drive.google.com/file/d/1IdC7uMSvXFMYeEaWS_PDeCB3EFJF5ZQI/view?usp=sharing'
                  target='_blank'
                  sx={{ display:{ xs: 'flex', md: 'none' } }}
                  >
                  <FilePresent />
                  </IconButton>

            </Box>

          </Toolbar>
      </AppBar>
  )
}
