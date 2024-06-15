import Card from "../../components/Card";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";
import { CardsContainer, ProjectsContainer } from "./styles";

import project1 from "../../images/efood-project.webp";
import project2 from "../../images/tenzies-project.webp";
import project3 from "../../images/ocado-project.webp";
import project4 from "../../images/contacts-project.webp";
import project5 from "../../images/2001-project.webp";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Projects = () => (
  <ProjectsContainer id="projects">
    <Heading title="Projetos" subtitle="Meus projetos" />
    <CardsContainer>
      <Card
        img={project1}
        alt="Efood"
        title="Efood"
        skills={
          <>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <SiTypescript />
          </>
        }
        description="WebApp de delivery de comida feito com HTML, CSS, JS, TypeSript e React com Redux."
        githubLink="https://github.com/gilbertogjn/efood"
        liveLink="https://efood-v2-ten.vercel.app/"
      />
      <Card
        img={project2}
        alt="Tenzies"
        title="Tenzies"
        skills={
          <>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
          </>
        }
        description="Jogo de dados feito com HTML, CSS, JS e React."
        githubLink="https://github.com/gilbertogjn/tenzies"
        liveLink="https://tenzies-chi-teal.vercel.app/"
      />
      <Card
        img={project3}
        alt="Ocado Reserved"
        title="Ocado"
        skills={
          <>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <SiTypescript />
          </>
        }
        description="Interface de pedido de reservas de compras feita com HTML, CSS, JS, TypeScript e React com Redux."
        githubLink="https://github.com/gilbertogjn/ocado_reserved"
        liveLink="https://ocado-reserved.vercel.app/"
      />
      <Card
        img={project4}
        alt="Lista de Contatos"
        title="Contatos"
        skills={
          <>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
          </>
        }
        description="Lista de contatos feita com HTML, CSS, JS e React com Redux."
        githubLink="https://github.com/gilbertogjn/contact_list"
        liveLink="https://contact-list-five-iota.vercel.app/"
      />
      <Card
        img={project5}
        alt="Landing Page 2001"
        title="2001"
        skills={
          <>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
          </>
        }
        description="Landing Page fictícia de 2001 - Uma Odisséia no Espaço feita com HTML, CSS e JS."
        githubLink="https://github.com/gilbertogjn/landing-page-space-odissey"
        liveLink="https://landing-page-space-odissey.vercel.app/"
      />
      <Card></Card>
    </CardsContainer>
    <ScrollButton anchor="#contact" />
  </ProjectsContainer>
);

export default Projects;
