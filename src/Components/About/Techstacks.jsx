import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaJira, FaGitlab} from "react-icons/fa";
import {
  SiHtml5,
  SiCypress,
  SiNotion,
  SiPostman,
  SiTrello,
  SiJest,
  SiGrafana,
  SiGit
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiCypress />
            <h5>Cypress</h5>
          </div>

          <div>
            <FaJira />
            <h5>Jira</h5>
          </div>

          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiTrello />
            <h5>Trello</h5>
          </div>
          <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiNotion />
            <h5>Notion</h5>
          </div>
          <div>
            <FaGitlab />
            <h5>Gitlab</h5>
          </div>
          <div>
            <BiSpreadsheet />
            <h5>Spreadsheet</h5>
          </div>
          <div>
            <SiJest />
            <h5>Jest</h5>
          </div>
          <div>
            <SiGrafana />
            <h5>K6</h5>
          </div>
          <div>
            <SiGit />
            <h5>Git</h5>
          </div>
        </div>
      </div>
    </>
  );
};
