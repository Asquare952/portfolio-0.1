import Styles from "./about.module.css"
import AboutImg from "../../Asset/about img.png"
const AboutMe = () => {
  return (
    <>
      <section className={Styles.AboutMeContainer} id="aboutMe">
        <div className={Styles.aboutMeContent}>
          <div className={Styles.aboutMeImg}>
            <img src={AboutImg} alt="dummy img of me" />
          </div>
          <div className={Styles.aboutMe}>
            <div className={Styles.title}>
              <h4>
                About <span>me</span>
              </h4>
            </div>
            <p className={Styles.firstPara}>
              I'm a passionate, web developer who specializes frontend
              development (HTML, CSS, JAVASCRIPT and REACT.JS). I am very
              enthusiastic about bringing the technical and visual aspect of
              digital products to life. User experience, pixel perfect design,
              and writing clear,readable,highly performant code matters to me.
            </p>
            <p className={Styles.secondPara}>I began my journey as a web developer in 2023, and since then i've continue to grow and evolve as a developer, taking on new challenges and learning new technologies along the way. Now i'm building cutting-edge web application using modern technologies such as React.js, Next.js, Tailwindcss.</p>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default AboutMe;