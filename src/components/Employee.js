import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert'; // นำเข้า Alert

const defaultTheme = createTheme();

export default function MainAdmin() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [positionID, setPositionID] = useState(''); // ใช้ positionID เพื่อระบุตำแหน่ง
  const [message, setMessage] = useState(''); // สร้าง state เพื่อเก็บข้อความแจ้งเตือน
  const [status, setStatus] = useState(null); // เก็บสถานะของผลลัพธ์

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // แก้ไข URL เพื่อไม่ให้มี /api ซ้ำกัน
      const response = await axios.post(process.env.REACT_APP_BASE_URL + '/employee',
        {
          username,
          firstName,
          lastName,
          email,
          gender,
          positionID
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // ตรวจสอบว่าคุณมีการส่ง token ด้วยหรือไม่
          }
        }
      );
      const result = response.data;
      setMessage(result['message']);
      setStatus(result['status']);

      if (result['status'] === true) {
        // รีเซ็ตค่าฟิลด์
        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender('');
        setPositionID('');
      }
    } catch (err) {
      console.log(err);
      setMessage('เกิดข้อผิดพลาดในการเพิ่มพนักงาน');
      setStatus(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography component="h1" variant="h4">
            Add Employee
          </Typography>

          {/* แสดงข้อความแจ้งเตือน */}
          {message && (
            <Alert severity={status ? 'success' : 'error'} sx={{ width: '100%', mb: 2 }}>
              {message}
            </Alert>
          )}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={username} // แสดงค่าจาก state
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  value={firstName} // แสดงค่าจาก state
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="lastname"
                  label="Last Name"
                  id="lastname"
                  value={lastName} // แสดงค่าจาก state
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  id="email"
                  value={email} // แสดงค่าจาก state
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="gender"
                  label="Gender"
                  id="gender"
                  value={gender} // แสดงค่าจาก state
                  onChange={(e) => setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="positionID"
                  label="Position ID"
                  id="positionID"
                  value={positionID} // แสดงค่าจาก state
                  onChange={(e) => setPositionID(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Employee
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
