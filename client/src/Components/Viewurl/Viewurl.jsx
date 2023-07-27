import axios from '../../axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Viewurl() {
    let {id}=useParams()
    console.log(id,"******");
    useEffect(() => {
        axios.get(`/url/${id}`)
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Viewurl
