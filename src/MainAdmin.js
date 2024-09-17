// MainAdmin.js
import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from './assets/BG.png';

const defaultTheme = createTheme();

export default function MainAdmin() {
  const navigate = useNavigate(); 

  const handleAddEmployeeClick = () => {
    navigate('/addemployee');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard'); // 
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${BackgroundImage})`,
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
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              minHeight: '300px',
            }}
          >
            <Typography component="h1" variant="h4" sx={{ backgroundColor: '#b3b3ff', padding: '10px 30px', borderRadius: '15px 15px 15px 15px', color: 'white', width: '100%', textAlign: 'center', mb: 4 }}>
              Admin Options
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={handleAddEmployeeClick}
              sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2', color: 'white', padding: '12px', fontSize: '20px' }}
            >
              Add Employee
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleDashboardClick}
              sx={{ mt: 3, mb: 2, backgroundColor: '#d32f2f', color: 'white', padding: '12px', fontSize: '20px' }}
            >
              Dashboard
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
