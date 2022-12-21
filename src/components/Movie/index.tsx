import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

import {Movie} from "./types";

type Props = {
  item: Movie
};


export default function ({item}: Props) {
  // return (
  //   <div>
  //     <h3>{item.Series_Title}</h3>
  //     {item.Series_Title && <img src={item.Poster_Link} alt={item.Series_Title}/>}
  //   </div>
  // );
  return (
    <Card sx={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.Poster_Link}
          alt={item.Series_Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.Series_Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.Overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}