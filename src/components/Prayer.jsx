// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
export default function MultiActionAreaCard({name,time,image}) {
  return (
    <Card sx={{ maxWidth: 187}}>
      
        <CardMedia
          component="img"
          height="140"
          width={80}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {time}
          </Typography>
        </CardContent>
     
    
    </Card>
  );
}
