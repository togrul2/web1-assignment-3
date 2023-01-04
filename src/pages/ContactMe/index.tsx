import './ContactMe.scss';
import {Button} from '@mui/material';
import React, {FormEvent, useRef, useState} from "react";

import {sendEmail} from "@/actions/contactMeActions";
import SuccessMessage from "@/components/SuccessMessage";


export default function ContactMe() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
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
    error ? setSuccess(false) : setSuccess(true);
  }

  if (success) {
    return <SuccessMessage goBackHandler={() => {
      setSuccess(null);
    }}/>;
  }

  return (
    <>
      <form className="contact-form-container" onSubmit={submitHandler}>
        <div className="contact-form-title">
          <h2>Contact us</h2>
          <p>If you want to say us something, you can leave a message here.</p>
        </div>

        <div className="contact-form-inputs">
          <input ref={subjectRef} className="contact-details" placeholder="Subject" required/>
          <input ref={emailAddressRef} type="email" className="contact-details" placeholder="Email address" required/>
          <textarea ref={messageRef} className="contact-details" placeholder="Your message" required/>
        </div>

        <Button type="submit" variant="contained">Submit</Button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
}
