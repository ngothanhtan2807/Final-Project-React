import styled from "styled-components"

const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .line{
        display: flex;
        width: 73vw;
        height: 0px;
        background-color: #F0F0F0;
       /* justify-content: center; */
        align-items: center;
        border: 1px solid blue;
    }
    .topBanner{
        width: 100%;
        height: 794px;
        display: flex;
        background-color: #F0F0F0;
        
    }
    .topBannerLeft{
        float: left;
        width: 45%;
        margin-left: 11.5vw;
        background-color: aqua;
    }
    .topBannerRight{
        float: right;
        width: 40%;
        margin-right: 11.5vw;
        background-color: violet;
    }
`
const Content = ()=>{
    return(
        <ContentStyled>
            <div className="line"></div>
            <div className="topBanner">
                <div className="topBannerLeft">

                </div>
                <div className="topBannerRight">
                    
                </div>
            </div>
            
        </ContentStyled>
    )
}
export {Content}