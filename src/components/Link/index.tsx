import { LinkContainer } from "./styles"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    href?: string
}
const Link = ({ children, href }: Props) => {
    return <LinkContainer href={href}>{children}</LinkContainer>
}

export default Link