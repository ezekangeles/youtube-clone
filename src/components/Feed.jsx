import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVidoes] = useState([])

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then ((data) =>setVidoes(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar 
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}/>

        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright SuperZeeek 2023
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#f31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
