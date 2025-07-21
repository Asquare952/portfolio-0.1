import Styles from "./contact.module.css";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4he0r0n",
        "template_dpwij6s",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };
  return (
    <>
      <section className={Styles.contactContainer} id="contact">
        <div className={Styles.content}>
          <h4>Let's talk for something special</h4>
          <p>
            I seek to push the limits of creativity to create high-engaging user
            friendly, and memorable interactive experiences.
          </p>

          <form
            className={Styles.formContainer}
            onSubmit={sendEmail}
            ref={form}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea name="message" placeholder="Message"></textarea>
            <button className={Styles.hireBtn}>Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
