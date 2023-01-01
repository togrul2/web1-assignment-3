import './ContactMe.scss';
import { Button } from '@mui/material';
import {FormEvent, useRef, useState} from "react";
import {sendEmail} from "@/actions/contactMeActions";

export default function ContactMe() {
  const [error, setError] = useState<string | null>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  document.title = "Contact me";

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {error} = await sendEmail({
      subject: subjectRef.current!.value,
      email: emailAddressRef.current!.value,
      content: messageRef.current!.value,
    });

    error ? setError(error) : setError(null);
  }
  return (
    <>
      <form className="contact-form-container" onSubmit={submitHandler}>
        <input ref={subjectRef} className="contact-details" placeholder="Subject" required/>
        <input ref={emailAddressRef} type="email" className="contact-details" placeholder="Email address" required/>
        <textarea ref={messageRef} className="contact-details" placeholder="Your message" required/>
        <Button type="submit" variant="contained">Submit</Button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
}
