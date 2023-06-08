import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/IMG_20230518_024730843.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Syifan Ikhtiardi </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Magelang, Indonesia
                </span>
                . I have completed my graduation Industrial Engineering
                from{" "}
                <span className="different">
                  Universitas Islam Indonesia, Yogyakarta
                </span>
                . I have experience as Software Quality Assurance Intern at{" "}
                <span className="different">PrivyID</span>, a company that offers a trusted digital identity and digital signatures that are legally binding using digital certificates. 
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
