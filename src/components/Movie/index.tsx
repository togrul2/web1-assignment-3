import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


import {Props} from "./types";
import {useNavigate} from "react-router-dom";


export default function ({item}: Props) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${item.id}`);
  };

  const truncateString = (text: string, limit: number) =>
    text.length > limit ?
      text.substring(0, limit - 3) + "..." :
      text;

  return (
    <Card sx={{maxWidth: 345, height: 360}}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={item.Poster_Link}
          alt={item.Series_Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" height="4rem">
            {truncateString(item.Series_Title, 30)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateString(item.Overview, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}