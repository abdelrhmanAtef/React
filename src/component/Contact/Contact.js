import React from 'react';
import {ContactSection,ContactTitle,Span,Form,InputSub,FormInput,TextArea,
InputEmail,InputText,InputEx} from './ContactStyle';
const Contact = () => {

  return (
    <ContactSection>
    <div className="container">
        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
        <Form>
            <FormInput>
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputEx type="text" className="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSub type="submit" value="Send Message"/>
        </Form>
    </div>
</ContactSection>
  );
}


export default Contact;
