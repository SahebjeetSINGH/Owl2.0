import * as React from 'react';
import { AppBar,Toolbar,IconButton, Typography, Stack, Button, Box } from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';
import Logo from "../assets/owl.png";
export const MuiNavbar = () =>{
    return(
        

        <AppBar position='static' className='fixed top-0'  >
           
            <Toolbar className='bg-black '>
            <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={Logo}
        />
           
            <Typography variant='h6' component='div' sx = { { flexGrow:1}}>
            <Button color='inherit'>STORE</Button> 
            </Typography>
            <Stack direction='row' spacing={2}></Stack>
           <Button color='inherit'>INVENTORY</Button> 
            <Button color='inherit'>MARKET PLACE</Button>
            <IconButton aria-label="fingerprint" color="success" >
             <Fingerprint style={{ color: 'white' }} />
           </IconButton>
            </Toolbar>
        </AppBar>
    );
}