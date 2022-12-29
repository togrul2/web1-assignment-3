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
      <form className="contact-form-container">
        <input className="contact-details" placeholder="Subject" />
        <input className="contact-details" placeholder="Email address" />
        <textarea className="contact-details" placeholder="Your message" />
        <Button variant="contained">Submit</Button>
      </form>
    </>
  );
}
