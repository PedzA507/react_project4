import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import BackgroundImage from './assets/BG.png'; // นำเข้าภาพพื้นหลัง

export default function MainAdmin() {
  return (
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
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // พื้นหลังโปร่งใส
            borderRadius: '20px',
            padding: '60px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h3" sx={{ backgroundColor: '#3b3b9f', padding: '20px 40px', borderRadius: '15px', color: 'white', width: '100%', textAlign: 'center', mb: 6 }}>
            Management
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              width: '100%', // ใช้ความกว้างทั้งหมด
              maxWidth: '1100px', // จำกัดความกว้างของกล่องที่บรรจุปุ่ม
            }}
          >
            <Button
              sx={{
                flexGrow: 1, // ขยายปุ่มให้เต็มความกว้างที่มี
                backgroundColor: 'rgba(0, 0, 128, 0.8)',
                color: 'white',
                fontSize: '28px',
                padding: '40px 0', // ปรับขนาดของปุ่ม
                borderRadius: '25px',
                borderWidth: '4px', // เพิ่มความหนาของขอบ
                borderStyle: 'solid',
                borderColor: '#b3b3ff',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 128, 0.9)',
                },
              }}
            >
              User
            </Button>
            <Button
              sx={{
                flexGrow: 1, // ขยายปุ่มให้เต็มความกว้างที่มี
                backgroundColor: 'rgba(0, 0, 128, 0.8)',
                color: 'white',
                fontSize: '28px',
                padding: '40px 0', // ปรับขนาดของปุ่ม
                borderRadius: '25px',
                borderWidth: '4px', // เพิ่มความหนาของขอบ
                borderStyle: 'solid',
                borderColor: '#b3b3ff',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 128, 0.9)',
                },
              }}
            >
              Product
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
