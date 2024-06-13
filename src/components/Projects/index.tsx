import Card from "../Card";
import Heading from "../Heading";
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
  </ProjectsContainer>
);

export default Projects;
