import { Footer } from "Component/Footer/Footer"
import { Header } from "Component/Header"
import styled from "styled-components"
import React from "react"

const BodyStyled = styled.body`
    margin: 0;
    padding: 0;
    `
const LayoutStyled = styled.div`
    body{ 
        display: block;
   
}
    
`
const Layout = ({children})=>{

    return (
        <BodyStyled>

        <LayoutStyled >
           
            <Header></Header>
            {children}
            <Footer></Footer>
        </LayoutStyled>
        </BodyStyled>
    )
}
export {Layout}