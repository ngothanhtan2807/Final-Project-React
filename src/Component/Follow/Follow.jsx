import { ItemFollow } from "."
import image from 'Assets/image-product-12.svg'
import styled from "styled-components"

const FollowStyled = styled.div`
    width: 100vw;
    background: #F0F0F0;
    display: flex;
    flex-direction: column;
    /* margin-left: 10vw;
    margin-right: 10vw; */
    justify-content: center;
    align-items: center;
   .titleFollow{
    padding-top: 5vh;
    padding-bottom: 5vh;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;
        text-align: center;
        text-transform: capitalize;
        color: #000000;
   } 
   .listItemFollow{
       display: flex;
        /* padding-right: 2vw; */
   }
   /* .listItemFollow:not(:last-child){
        padding-right: 1vw;
        
   } */
   .follow-persion{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        padding-top: 4vh;
        padding-bottom: 6vh;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;

        /* Primary */

        color: #FF6F61;


        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
   }
`
const Follow = ()=>{
    return(
        <FollowStyled>
            <div className="titleFollow">Follow products and discounts on Instagram</div>
             <div className="listItemFollow">
                <ItemFollow image={image}></ItemFollow>
                <ItemFollow image={image}></ItemFollow>
                <ItemFollow image={image}></ItemFollow>
                <ItemFollow image={image}></ItemFollow>
                <ItemFollow image={image}></ItemFollow>
                <ItemFollow image={image}></ItemFollow>
             </div>
             <div className="follow-persion">
             @lisa.official
             </div>
        </FollowStyled>
    )
}
export {Follow}