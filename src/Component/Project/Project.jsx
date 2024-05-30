import Styles from "./project.module.css";
import MyProjectsData from "../../utils/MyWorksData";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useState } from "react";
const Project = () => {
  const [project, setProject] = useState(MyProjectsData);
  return (
    <>
      <section className={Styles.projectContainer} id="project">
        <div className={Styles.projectContent}>
          <div className={Styles.title}>
            <h4>
              My <span>Projects</span>
            </h4>
          </div>
          <div className={Styles.projects}>
            {project.map((projects) => {
              const { id, image, title, description } = projects;
              return (
                <div key={id} className={Styles.project}>
                  {/* <a className={Styles.projectImg} href=""> */}
                    <img src={image} alt={image} />
                  {/* </a> */}
                  <div className={Styles.details}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href="">
                      <LiaExternalLinkAltSolid />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
