import Card from "../../components/Card";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";
import { CardsContainer, ProjectsContainer } from "./styles";

import project1 from "../../images/efood-project.webp";
import project2 from "../../images/tenzies-project.webp";
import project3 from "../../images/ocado-project.webp";
import project4 from "../../images/contacts-project.webp";
import project5 from "../../images/2001-project.webp";
import project6 from "../../images/disney-project.webp";
import project7 from "../../images/pedals-project.webp";
import project8 from "../../images/tarefas-project.webp";
import project9 from "../../images/bender-project.webp";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";

const Projects = () => (
  <ProjectsContainer id="projects">
    <div className="container">
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
          githubLink="https://github.com/gilbertogjn/efood_v2"
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
        <Card
          img={project6}
          alt="Clone Disney+"
          title="Disney+"
          skills={
            <>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
            </>
          }
          description="Clone fictício de Disney+ feito com HTML, CSS e JS."
          githubLink="https://github.com/gilbertogjn/clone_disneyplus"
          liveLink="https://clone-disneyplus-zeta-three.vercel.app/"
        />
        <Card
          img={project7}
          alt="PedalBoard Store"
          title="PedalBoard"
          skills={
            <>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <FaBootstrap />
            </>
          }
          description="Homepage de uma loja de pedais de guitarra feita com HTML, CSS, JS e Bootstrap."
          githubLink="https://github.com/gilbertogjn/loja_pedalboard"
          liveLink="https://loja-pedalboard.vercel.app/"
        />
        <Card
          img={project8}
          alt="Lista de Tarefas"
          title="Tarefas"
          skills={
            <>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <FaVuejs />
              <FaBootstrap />
            </>
          }
          description="WebApp de lista de tarefas feito com HTML, CSS, JS e VueJS."
          githubLink="https://github.com/gilbertogjn/to_do-vue"
          liveLink="https://to-do-vue-lime.vercel.app/"
        />
        <Card
          img={project9}
          alt="Bender Guitars"
          title="Bender"
          skills={
            <>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
            </>
          }
          description="Homepage de uma loja de guitarras feita com HTML, CSS e JS."
          githubLink="https://github.com/gilbertogjn/bender-guitars"
          liveLink="https://bender-guitars.vercel.app/"
        />
      </CardsContainer>
    </div>
    <ScrollButton anchor="#contact" />
  </ProjectsContainer>
);

export default Projects;
