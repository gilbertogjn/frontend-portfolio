import Card from "../../components/Card";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";
import { CardsContainer, ProjectsContainer } from "./styles";

const Projects = () => (
  <ProjectsContainer id="projects">
    <Heading title="Projetos" subtitle="Meus projetos" />
    <CardsContainer>
      <Card></Card>
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
