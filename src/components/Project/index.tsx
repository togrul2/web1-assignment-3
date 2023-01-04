import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardProps, TagProps} from "@/components/Project/types";
import styles from "./styles.module.scss";
import {Link} from "@mui/material";

function Tag(props: TagProps) {
  return <span className={styles.tag}>{props.children}</span>
}

export default function (props: CardProps) {
  const project = props.project;

  return (
    <Card sx={{minWidth: 275}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          By: {project.author}
        </Typography>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          Technologies:
          <div className={styles.tags}>{project.technologies.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}</div>
        </Typography>
        <Typography variant="body2">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.github_link && <Link href={project.github_link} underline="hover">
          GitHub Pages
        </Link>}
      </CardActions>
    </Card>
  );
}
