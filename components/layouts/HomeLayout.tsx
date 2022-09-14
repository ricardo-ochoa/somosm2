import { FC } from "react";
import Head from "next/head"
import { Navbar } from "../ui";
import { Box, Typography } from "@mui/material";


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: any;
    robots?: string;
}

export const HomeLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl, robots }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ pageDescription }></meta>

            <meta name="og:title" content={ title }></meta>
            <meta name="og:description" content={ pageDescription }></meta>
            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }></meta>
                )
            }

            <meta property="og:url"                content="http://www.somosm2.mx/" />
            <meta property="og:type"               content="text/html" />
            <meta property="og:title"              content={ title } />
            <meta property="og:description"        content={ pageDescription} />
            <meta property="og:image"              content={ imageFullUrl} />

            <meta name="author" content="Ricardo Ochoa"></meta>
            <meta name="copyright" content="somosm2"></meta>
            <meta name="robots" content={ robots }></meta>



            <meta name="twitter:account_id" content="18ce55hprg3"/>
            <meta property="twitter:domain" content={ title }></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@ochoagram"></meta>
            <meta name="twitter:creator" content="@ochoagram"></meta>
            <meta property="twitter:image:src" content={ imageFullUrl }></meta>
            
        </Head>

        <nav>
            <Navbar />
        </nav>

        <main className='main' style={{
            margin: '50px auto',
            maxWidth: '1200px',
            padding: '0 20px',
        }}>
            { children }
        </main>

        <footer>
            <Box width='100%' height='60px' style={{ backgroundColor:'#000' }} display='flex' alignItems='center' justifyContent='center' >
                <Typography style={{ color:'white' }}>© 2022 Somos m². All rights reserved</Typography>
            </Box>
            {/* { custom footer} */}
        </footer>
    </>
  )
}