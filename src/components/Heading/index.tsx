import { HeadingContainer } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: Props) => (
  <HeadingContainer>
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </HeadingContainer>
);

export default Heading;
