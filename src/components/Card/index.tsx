import { ReactNode } from "react";
import Button from "../Button";
import { CardContainer } from "./styles";

type Props = {
  img: string;
  alt: string;
  title: string;
  skills: ReactNode;
  description: string;
  githubLink: string;
  liveLink: string;
};

const Card = ({
  img,
  alt,
  title,
  skills,
  description,
  githubLink,
  liveLink,
}: Props) => (
  <CardContainer>
    <div>
      <img src={img} alt={alt} />
      <div className="title-bar">
        <h3>{title}</h3>
        <span>{skills}</span>
      </div>
      <p>{description}</p>
    </div>
    <div className="buttons">
      <Button className="project" href={githubLink}>
        Github
      </Button>
      <Button className="project" href={liveLink}>
        Live Demo
      </Button>
    </div>
  </CardContainer>
);

export default Card;
