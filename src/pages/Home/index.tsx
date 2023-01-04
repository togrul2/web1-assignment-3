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
          <Grid item xs={4}>
            <Project key={project.id} project={project}/>
          </Grid>
        ))}
      </Grid>
      {/*<div className="home-main">*/}
      {/*  <div className="container">*/}
      {/*    <div className="main-header">*/}
      {/*      <h3>Welcome to the Project!</h3>*/}
      {/*    </div>*/}
      {/*    <div className="main-intro">*/}
      {/*      <p>This is the final project! Here you can see what we did throughout semester! </p>*/}
      {/*    </div>*/}
      {/*    <div className="main-projects">*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}