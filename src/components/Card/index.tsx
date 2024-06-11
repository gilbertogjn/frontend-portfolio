import Button from "../Button";
import { CardContainer } from "./styles";

const Card = () => (
  <CardContainer>
    <img src="https://via.placeholder.com/300" alt="project 1" />
    <h3>Project 1</h3>
    <div className="buttons">
      <Button className="project" href={"#"}>
        Github
      </Button>
      <Button className="project" href={"#"}>
        Live Demo
      </Button>
    </div>
  </CardContainer>
);

export default Card;
