import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import Swal from 'sweetalert2'
import axios from '../../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const {user} = useSelector(state => state)
  const [refresh, setrefresh] = React.useState(false)
  const [result, setresult] = React.useState([])
  const formRef = React.useRef(null);
  const dispatch = useDispatch()
  const notify = (err) => toast(err);

  React.useEffect(() => {
   let id=user.details._id;
    axios.get('/viewurl',{params:{id}}).then((response)=>{
      setresult(response.data.result)
    }).catch((error)=>{
      console.log(error);
    })
  }, [refresh])
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
  const handledelete=(id)=>{
    Swal.fire({
      title: 'Are you sure to delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Delete!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.get(`/delete/${id}`)
        setrefresh(!refresh)
      }
    })
  }

  const handlesubmit=(event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    if(data.get('title').trim() && data.get('longurl').trim()){
      let title=data.get('title'),longurl=data.get('longurl'), userId=user.details._id;
     axios.post('/urlshorten',{title,longurl,userId}).then((response)=>{
      if(!response.data.err){
        formRef.current.reset();
        setrefresh(!refresh)
      }
    }).catch((error)=>{
      console.log(error);
     })
    }
  }
  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log('URL copied to clipboard');
        notify('copied to clipboard!')      })
      .catch((error) => {
        console.log('Failed to copy URL:', error);
        toast.error('Failed to copy URL');
      });
  };
  return (
    <div>
      <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
        />
      <div className='inner-div'>
        {window.innerWidth > 800 ?
       <button onClick={()=>{handlelogout()}} className='logout-btn'>Logout</button> :
       <svg  onClick={()=>{handlelogout()}} style={{ position:'absolute',right:'-10%',top:'-9%' }} xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
     </svg>
        }
       <div className='sub-div1'>
       <Box component="form" ref={formRef}  onSubmit={handlesubmit} noValidate>
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
              name="longurl"
              label="Paste your link"
              type="text"
              id="longurl"
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
       <div className='sub-div2'>
          {result.map((item)=>{
            return (
              <div className='card'>
                <div style={{ width:'90%' }}>
                <p className='para'>{item.title}</p>
                <a href={item.shorturl}>{item.shorturl}</a>
                <p className='para'>Created at {new Date(item.createdDate).toLocaleDateString()}</p>
                </div>
                <div style={{ width:'10%',paddingTop:'10px', cursor:'pointer' }}>
                <svg  onClick={() => handleCopyUrl(item.shorturl)} xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
             <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
             <svg onClick={()=>handledelete(item._id)} style={{ marginTop:'20px' }} xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
             </svg>
                </div>
              </div>
            )
          })}
       </div>
      </div>
    </div>
  )
}

export default Home
