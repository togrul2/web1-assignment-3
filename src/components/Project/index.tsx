import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

import {CardProps, TagProps} from "@/components/Project/types";
import styles from "./styles.module.scss";

function Tag(props: TagProps) {
  return <span className={styles.tag}>{props.children}</span>
}

export default function (props: CardProps) {
  const project = props.project;

  return (
    <Card sx={{minWidth: 275, minHeight: 280}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          By: {project.author}
        </Typography>
        <Typography variant="h5">
          {project.title}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary" component="div" className={styles.tags}>
          {project.technologies.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </Typography>
        <Typography variant="body2" sx={{minHeight: 80}}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.github_link && <Link href={project.github_link} underline="hover">
            GitHub Pages
        </Link>}
        {project.website && <Link href={project.website} underline="hover">
            Website
        </Link>}
      </CardActions>
    </Card>
  );
}
