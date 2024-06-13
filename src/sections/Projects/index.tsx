import Card from "../../components/Card";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";
import { CardsContainer, ProjectsContainer } from "./styles";
import project1 from "../../images/efood-project.webp";

const Projects = () => (
  <ProjectsContainer id="projects">
    <Heading title="Projetos" subtitle="Meus projetos" />
    <CardsContainer>
      <Card
        img={project1}
        alt="Efood"
        title="Efood"
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
