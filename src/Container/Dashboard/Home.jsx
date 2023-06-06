import { Content } from "Component/Content";
import { Layout } from "Component/Layout";
import styled from "styled-components";
const HomeStyled = styled.div`
body{

    margin: 0;
    padding: 0;
}
`

const Home = ()=>{
    return(
        <HomeStyled>

        <Layout>
            <Content>
            </Content>
        </Layout>
        </HomeStyled>
    )
}
export default Home;