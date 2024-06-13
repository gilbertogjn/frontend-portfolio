import Link from "../Link";

const Menu = () => (
    <nav>
        <ul>
            <li><Link href={"#about"}>Sobre</Link></li>
            <li><Link href={"#experience"}>Experiência</Link></li>
            <li><Link href={"#projects"}>Projetos</Link></li>
            <li><Link href={"#contact"}>Contato</Link></li>
        </ul>
    </nav>
)

export default Menu