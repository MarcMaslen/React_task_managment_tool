import "./contact.scss";
import ContactForm from "../email/Email";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h2>Contact.</h2>
        <ContactForm />
      </div>
    </div>
  );
}