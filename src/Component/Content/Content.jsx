import styled from "styled-components"

const ContentStyled = styled.div`
    display: flex;
    align-items: center;
    .line{
        display: flex;
        width: 1320px;
        height: 0px;
       /* justify-content: center; */
        align-items: center;
        border: 1px solid #E3E3E3;
    }
`
const Content = ()=>{
    return(
        <ContentStyled>
            <div className="line"></div>

            
        </ContentStyled>
    )
}
export {Content}