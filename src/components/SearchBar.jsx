import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

function SearchBar() {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  // console.log(searchTerm)


  return (
    <Paper component='form' onSubmit={handleSubmit} sx={{borderRadius: 20, border: '1px solid', 
    paddingLeft: 2, boxShadow: 'none', marginRight: {sm: 5}}}>
        <input onChange={(e)=>{setSearchTerm(e.target.value)}} 
        type='text' placeholder='Search...' value={searchTerm} className='search-bar'/>
        <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar
