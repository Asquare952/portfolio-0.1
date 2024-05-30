import Styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={Styles.contactContainer} id="contact">
        <div className={Styles.content}>
          <h4>Let's talk for something special</h4>
          <p>
            I seek to push the limits of creativity to create high-engaging user
            friendly, and memorable interactive experiences.
          </p>

          <button className={Styles.hireBtn}>
            <a href="https://wa.me/message/5IEGJ3MQ5I22O1">Hire Me</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
