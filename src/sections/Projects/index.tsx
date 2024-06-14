import Card from "../../components/Card";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";
import { CardsContainer, ProjectsContainer } from "./styles";
import project1 from "../../images/efood-project.webp";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
          </>
        }
        description="WebApp de delivery de comida feito com HTML, CSS, JS e React com Redux"
        githubLink="https://github.com/gilbertogjn/efood"
        liveLink="https://efood-v2-ten.vercel.app/"
      />
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardsContainer>
    <ScrollButton anchor="#contact" />
  </ProjectsContainer>
);

export default Projects;
