import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import Swal from 'sweetalert2'
import axios from '../../axios'

function Home() {
  const dispatch = useDispatch()
  const handlelogout=()=>{
    Swal.fire({
      title: 'Are you sure? logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.get("/logout")
        dispatch({ type: "refresh" })
      }
    })
  }
  return (
    <div>
      <div className='inner-div'>
       <button onClick={()=>{handlelogout()}} className='logout-btn'>Logout</button>
       <div className='sub-div1'>
       <Box component="form"  noValidate>
            <TextField
              margin="normal"
              required
              type='text'
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              aria-required
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="longlink"
              label="Paste your link"
              type="text"
              id="longlink"
              autoComplete="current-password"
              aria-required
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              create
            </Button>
          </Box>
        
       </div>
       <div className='sub-div2'></div>
      </div>
    </div>
  )
}

export default Home
