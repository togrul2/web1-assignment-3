import {Button} from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import {Props} from "@/components/SuccessMessage/types";

export default function (props: Props) {
  return (
    <>
      <h2>Success</h2>
      <p>Your message has been sent successfully!</p>
      <Button className={styles.button} variant="contained" onClick={props.goBackHandler}>Go back</Button>
    </>
  );
}