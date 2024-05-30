import Styles from "./footer.module.css";
import Logo from "../../Asset/logo.png";
import { LiaCopyright } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <section className={Styles.footerContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.copyWrite}>
            <div className={Styles.footerLogo}>
              <a href="">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <p>
              Copyright <LiaCopyright /> 2024 | All Right Reserved
            </p>
            <div className={Styles.socialAcc}>
              <a href="https://x.com/lekan_coder">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/abdul-afeez-abdul-azeez-16a4bb303/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Asquare952">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
