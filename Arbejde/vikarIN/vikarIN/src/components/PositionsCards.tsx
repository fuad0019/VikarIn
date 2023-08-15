import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material/'
import { Job } from './JobSection';
import styles from './HeroSection.module.scss'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (job: Job)=> (
  <React.Fragment>

    
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {job.type}
      </Typography>
      <Typography variant="h5" component="div">
        {job.title}
      </Typography>

      <Typography variant="body2">
      {job.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{marginLeft: '7px'}} sx={{ width: 'fit-content', backgroundColor: 'rgb(210, 108, 193)', ":hover": {backgroundColor: 'rgb(182, 97, 168)'} }} variant='contained' size="small">Ansøg Nu</Button>
    </CardActions>
  </React.Fragment>
);

interface PositionCardProp{
  job: Job
}
export default function PositionCard({job}:PositionCardProp) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Paper elevation={3}>
 <Card  variant="outlined" >{card(job)}</Card>
      </Paper>
     
    </Box>
  );
}