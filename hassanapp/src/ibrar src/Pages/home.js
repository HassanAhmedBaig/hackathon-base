import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../muiComponents/appbar'
import { getData } from '../config/firebase/firebasemethod'
import CardGrid from '../muiComponents/cardGrid'

function Home() {





  useEffect(() => {
    {
      getData(`user`)

    }

  }, [])



  return (
    <>
      <Box>
        <PrimarySearchAppBar />
      </Box>

      <CardGrid/>

      
    </>
  )
}

export default Home