import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiMaterialui,
  SiCypress,
  SiNotion,
  SiPostman,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { BiSpreadsheet } from "react-icons/bi";
import demoblazePic from "../../assets/Demoblaze web.png"
import simpleBookAPI from "../../assets/simpleBook API.png"
import cypressPng from "../../assets/cypress.png"

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={demoblazePic}
                    alt="Test Case"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Web Testing</h2>
                <p>
                  Perform manual testing on the demoBlaze demo website to check the functionality of the website.
                </p>
                <div>
                  <BiSpreadsheet />
                </div>
                <div>
        
                  <a
                    href="https://docs.google.com/spreadsheets/d/18FiBfFwAkiSHYwo2EpHopr_cVKH9N5RnbuXXbBjOcM0/edit#gid=0&range=C1:H1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Testcase
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={simpleBookAPI}
                    alt="Test Case"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>API Testing</h2>
                <p>
                  Perform manual API testing on simpleBook API using Postman
                </p>
                <div>
                  <BiSpreadsheet />
                  <SiPostman />
                </div>
                <div>
        
                  <a
                    href="https://docs.google.com/spreadsheets/d/18FiBfFwAkiSHYwo2EpHopr_cVKH9N5RnbuXXbBjOcM0/edit#gid=919556578&range=C1:L1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Testcase
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={cypressPng}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Cypress Automation</h2>
                <p>
                  Sample project to demonstrate end to end automation testing using cypress
                </p>
                <div>
                  <IoLogoJavascript />
                  <SiCypress />
                </div>
                <div>
                  <a
                    href="https://github.com/SyifanIkhtiardi/Cypress-Automation#cypress-automation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
