import Styles from "./skills.module.css";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
const MySkills = () => {
  return (
    <>
      <section className={Styles.mySkillsContainer} id="skills">
        <div className={Styles.mySkillsContent}>
          <div className={Styles.title}>
            <h4>
              My <span>skills</span>
            </h4>
          </div>
          <div className={Styles.skills}>
            {/* <div className={Styles.column}> */}
              <div className={Styles.skillItem}>
                <TiHtml5 className={Styles.icon} />
                <p>HTML</p>
              </div>

              <div className={Styles.skillItem}>
                <IoLogoCss3 className={Styles.icon} />
                <p>CSS</p>
              </div>

              <div className={Styles.skillItem}>
                <IoLogoJavascript className={Styles.icon} />
                <p>JavaScript</p>
              </div>

              <div className={Styles.skillItem}>
                <FaReact className={Styles.icon} />
                <p>React</p>
              </div>

              <div className={Styles.skillItem}>
                <FaGitAlt className={Styles.icon} />
                <p>Git</p>
              </div>

              <div className={Styles.skillItem}>
                <FaGithub className={Styles.icon} />
                <p>Github</p>
              </div>

              <div className={Styles.skillItem}>
                <TbBrandNextjs className={Styles.icon} />
                <p>Next.js</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
