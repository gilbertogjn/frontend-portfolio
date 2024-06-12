import Heading from "../Heading";
import { ContactContainer } from "./styles";

import { ImMail } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <ContactContainer>
    <Heading title="Contato" subtitle="Fale comigo" />
    <div className="links">
      <a href="gilbertogjn@gmail.com">
        <ImMail className="icon" />
        gilbertogjn@gmail.com
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/gilbertogarcia-frontend/"
      >
        <FaLinkedin className="icon" />
        Linkedin
      </a>
    </div>
  </ContactContainer>
);

export default Contact;
