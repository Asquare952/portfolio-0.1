import Styles from "./hero.module.css"
import HeroImg from "../../Asset/hero img.png"
const Home = () => {
  return (
    <>
      <section className={Styles.heroContainer} id="hero">
        <div className={Styles.heroContent}>
          <div className={Styles.heroImg}>
            <img src={HeroImg} alt="" />
          </div>
          <div className={Styles.banner}>
            <h4>
              Hello I'am Abdul Afeez Olamilkan. A frontend{" "}
              developer.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Home;