import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackgroundImage from './assets/BG.png'; // นำเข้าภาพพื้นหลัง
import { Link } from 'react-router-dom'; // เพิ่มการนำเข้า Link

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function WelcomeCustomer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${BackgroundImage})`, // ใช้ภาพพื้นหลัง
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // พื้นหลังโปร่งใส
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              minHeight: '200px',
            }}
          >
            <Typography component="h1" variant="h4" sx={{ backgroundColor: '#b3b3ff', padding: '10px 30px', borderRadius: '15px 15px 15px 15px', color: 'white', width: '100%', textAlign: 'center', mb: 4 }}>
              Welcome
            </Typography>
            <Typography component="p" variant="h6">
              You have successfully logged in as a customer!
            </Typography>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
