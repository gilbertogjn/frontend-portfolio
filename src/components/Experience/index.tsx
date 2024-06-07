import Heading from "../Heading";
import {
  CardsContainer,
  ExperienceCard,
  ExperienceContainer,
  IconContainer,
} from "./styles";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Experience = () => (
  <ExperienceContainer>
    <div className="container">
      <Heading title="Experiência" subtitle="Minha jornada" />
      <CardsContainer>
        <ExperienceCard>
          <IconContainer>
            <FaHtml5 className="icon" />
            <span>
              <h3>HTML5</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaCss3Alt className="icon" />
            <span>
              <h3>CCS3</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaHtml5 className="icon" />
            <span>
              <h3>HTML5</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaCss3Alt className="icon" />
            <span>
              <h3>CCS3</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaHtml5 className="icon" />
            <span>
              <h3>HTML5</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
          <IconContainer>
            <FaCss3Alt className="icon" />
            <span>
              <h3>CCS3</h3>
              <p>Avançado</p>
            </span>
          </IconContainer>
        </ExperienceCard>
        <ExperienceCard></ExperienceCard>
      </CardsContainer>
    </div>
  </ExperienceContainer>
);

export default Experience;
