import { Footer } from "Component/Footer"
import { Header } from "Component/Header"
import styled from "styled-components"
const LayoutStyled = styled.div`
    body{display: block;
    margin: 0;
    padding: 0;}
    
`
const Layout = ({children})=>{

    return (
        <LayoutStyled>
            <Header></Header>
            {children}
            <Footer></Footer>
        </LayoutStyled>
    )
}
export {Layout}