import Button from "../Button";
import { CardContainer } from "./styles";

type Props = {
  img: string;
  alt: string;
  title: string;
  githubLink: string;
  liveLink: string;
};

const Card = ({ img, alt, title, githubLink, liveLink }: Props) => (
  <CardContainer>
    <img src={img} alt={alt} />
    <h3>{title}</h3>
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
