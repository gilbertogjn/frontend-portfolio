import Heading from "../Heading";
import {
  ExperienceCard,
  ExperienceContainer,
  IconContainer,
} from "./styles";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => (
  <ExperienceContainer id="experience">
    <div className="container">
      <Heading title="Experiência" subtitle="Minha jornada" />
      <ExperienceCard>
        <h3>Frontend Development</h3>
        <div className="icons">
          <IconContainer>
            <FaHtml5 className="icon" />
            <span>
              <h4>HTML5</h4>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaCss3Alt className="icon" />
            <span>
              <h4>CCS3</h4>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaReact className="icon" />
            <span>
              <h4>React</h4>
              <p>Intermediário</p>
            </span>
          </IconContainer>
          <IconContainer>
            <IoLogoJavascript className="icon" />
            <span>
              <h4>JavaScript</h4>
              <p>Intermediário</p>
            </span>
          </IconContainer>
          <IconContainer>
            <SiTypescript className="icon" />
            <span>
              <h4>TypeScript</h4>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaFigma className="icon" />
            <span>
              <h4>UX & UI</h4>
              <p>Intermediário</p>
            </span>
          </IconContainer>
          <IconContainer>
            <SiSass className="icon" />
            <span>
              <h4>SASS</h4>
              <p>Intermediário</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaBootstrap className="icon" />
            <span>
              <h4>Bootstrap</h4>
              <p>Intermediário</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaVuejs className="icon" />
            <span>
              <h4>VueJS</h4>
              <p>Básico</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaGitAlt className="icon" />
            <span>
              <h4>Git</h4>
              <p>Básico</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaNodeJs className="icon" />
            <span>
              <h4>NodeJS</h4>
              <p>Básico</p>
            </span>
          </IconContainer>
        </div>
      </ExperienceCard>
    </div>
  </ExperienceContainer>
);

export default Experience;
