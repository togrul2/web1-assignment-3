import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/material';
import { Box } from '@mui/material';
import './ContactMe.scss';
import { Button } from '@mui/material';

export default function ContactMe() {
  document.title = "Contact me";

  return (
    <>
      {/*<FormControl>*/}
      {/*  <Box mb={1}>*/}
      {/*    <TextField id="outlined-basic" label="Subject" variant="outlined" />*/}
      {/*  </Box>*/}

      {/*  <Box mb={2}>*/}
      {/*    <TextField id="outlined-basic" label="Email address" variant="outlined" />*/}
      {/*  </Box>*/}

      {/*  <Box mb={1}>*/}
      {/*    <TextareaAutosize*/}
      {/*        aria-label="minimum height"*/}
      {/*        minRows={3}*/}
      {/*        placeholder=" Message"*/}
      {/*        style={{ width: 195 }}*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*  <Button variant="contained">Submit</Button>*/}
      {/*</FormControl>*/}
      <form className="contact-form-container">
        <input className="contact-details" placeholder="Subject" />
        <input className="contact-details" placeholder="Email address" />
        <textarea className="contact-details" placeholder="Your message" />
        <Button variant="contained">Submit</Button>
      </form>
    </>
  );
}
