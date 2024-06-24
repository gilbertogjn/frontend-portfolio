import { RiArrowDownDoubleFill } from "react-icons/ri";
import { ScrollLink } from "./styles";

type Props = {
  anchor: string;
};

const ScrollButton = ({anchor}: Props) => (
  <ScrollLink href={anchor}>
    <RiArrowDownDoubleFill className="icon" />
  </ScrollLink>
);

export default ScrollButton;
