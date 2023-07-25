import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockResetTwoToneIcon from '@mui/icons-material/LockResetTwoTone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Otpverification() {
  const [err, seterr] = React.useState('')
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('otp').trim()){
            console.log({
                otp: data.get('otp'),
            });
    }else{
        seterr('otp is required')
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockResetTwoToneIcon />
          </Avatar>
          <Typography sx={{mt:5}} component="h1" variant="h5">
            OTP
          </Typography>
          <p style={{ height:'30px', color:'red' , fontFamily:'monospace', fontSize:'18px' }}>{err}</p>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              type='text'
              fullWidth
              id="otp"
              label="Enter the otp"
              name="otp"
              autoComplete="otp"
              autoFocus
              aria-required
            />
          
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}