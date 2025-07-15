import Styles from "./project.module.css";
import MyProjectsData from "../../utils/MyWorksData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
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
              const {
                id,
                image,
                title,
                description,
                liveViewLink,
                sourceCode,
              } = projects;
              return (
                <div key={id} className={Styles.project}>
                  <img src={image} alt={image} />

                  <div className={Styles.description}>
                    <div className={Styles.details}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                    <div className={Styles.links}>
                      <a href={liveViewLink}>
                        <FaExternalLinkAlt />
                      </a>
                      <a href={sourceCode}>
                        <FaCode />
                      </a>
                    </div>
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
