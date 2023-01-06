import Grid from '@mui/material/Grid';

import Project from "@/components/Project";
import projects from "./projects.json";
import styles from "./style.module.scss"

export default function Home() {
  document.title = "Home";

  return (
    <>
      <h1>Welcome to our website!</h1>
      <h4 className={styles.subtitle}>Here you can see our projects we have done so far.</h4>
      <Grid container spacing={2}>
        {projects.map(project => (
          <Grid key={project.id} item sm={10} md={5} lg={4} xl={3}>
            <Project project={project}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}