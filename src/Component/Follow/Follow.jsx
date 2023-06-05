import { ItemFollow } from "."
import image from 'Assets/image-product-12.svg'
import styled from "styled-components"

const FollowStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5vw;
    padding-right: 5vw;
   .titleFollow{
    font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 50px;
line-height: 59px;
/* identical to box height */

text-align: center;
text-transform: capitalize;

/* Dark */

color: #000000;
   } 
   .listItemFollow{
    display: flex;
    justify-content: space-between;
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
        </FollowStyled>
    )
}
export {Follow}