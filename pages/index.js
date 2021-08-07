// Dependencies
import React from 'react'

// Components
import { Container, Grid, Typography } from '@material-ui/core'

export default function Home() {
  return (
    <div className='page-home'>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{'height': '100vh' }}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2">Material UI Boilerplate (Next.js)</Typography>
            <Typography align="center" variant="h5">by Frolyn Raguindin</Typography>
            <Typography align="center" variant="subtitle1">
              A Material Design based boilerplate with Server-Side Rendering via Next.js.
            </Typography>
          </Grid>
        </Grid>
    </div>
  )
}
