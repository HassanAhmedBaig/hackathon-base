import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import MediaCard from '../muiComponents/cards'

const CardGrid = () => {
  return (
    <Box>
          <Grid container  spacing={2} sx={{padding:4}}>

            <Grid item xs={2}>
              <MediaCard />
            </Grid>

            <Grid item xs={2}>

              <MediaCard />
            </Grid>

            <Grid item xs={2}>

              <MediaCard />
            </Grid>
            <Grid item xs={2}>
              <MediaCard />
            </Grid>

            <Grid item xs={2}>

              <MediaCard />
            </Grid>

            <Grid item xs={2}>

              <MediaCard />
            </Grid>

          </Grid>
        </Box>
  )
}

export default CardGrid