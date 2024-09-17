import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundImage from './assets/BG.png';
import ChartImage from './assets/chart.png';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Shopdee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Dashboard() {
  const stats = [
    { title: 'ผู้ใช้ทั้งหมด', value: 780 },
    { title: 'ยอดขายเดือนนี้', value: 185 },
    { title: 'ผลิตภัณฑ์ใหม่', value: 5 },
    { title: 'คำสั่งซื้อ', value: 115 },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/choice');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        
        <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '80px', 
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography component="h1" variant="h2" sx={{
              backgroundColor: '#b3b3ff',
              padding: '10px 30px',
              borderRadius: '15px',
              color: 'white',
              width: '100%',
              textAlign: 'center',
              mb: 4,
            }}>
              Dashboard2024
            </Typography>

            {/* Stats Section */}
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card elevation={3} style={{ backgroundColor: '#e3f2fd', minHeight: '150px' }}> {}
                    <CardContent 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        height: '100%'
                      }}
                    >
                      <Typography variant="h5" style={{ color: '#1976d2' }}>{stat.title}</Typography>
                      <Typography variant="h6" style={{ fontWeight: 'bold' }}>{stat.value}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Chart Section */}
            <Box
              sx={{
                width: '100%',
                height: '300px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '15px',
                mb: 4,
                mt: 4, 
              }}
            >
              <img src={ChartImage} alt="Chart" style={{ width: '80%' }} />
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
