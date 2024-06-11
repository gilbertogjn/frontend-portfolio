import Heading from "../Heading";
import { ContactContainer } from "./styles";

const Contact = () => (
    <ContactContainer>
        <Heading title="Contato" subtitle="Fale comigo" />
        <div className="links"></div>
    </ContactContainer>
);

export default Contact;