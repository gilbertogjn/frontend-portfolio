import { ButtonContainer } from "./styles";

type Props = {
  children: string;
  className?: string;
  href?: string;
};

const Button = ({ children, className, href }: Props) => (
  <a target="_blank" href={href}>
    <ButtonContainer className={className}>{children}</ButtonContainer>
  </a>
);

export default Button;
