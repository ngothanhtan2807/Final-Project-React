import styled from "styled-components"
import shopping from "Assets/shopnow.svg";
import { Button } from "Component/Button";
import heart from "Assets/heart.svg"
import search from "Assets/search (2).svg"
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props => `${props.widthCard}vw`)};
    /* height: 60vh; */
    /* background-color: aqua; */
    .imageProduct{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        :not(:hover){
            .hiden-bottom{
                display: none;
            }
        }
        .prodImage{

            width: 100%;
        }
        /* height: 400px; */
        
    
    }
    .hiden-bottom{
        /* position: absolute;
        width: 100%;
        height: 40px;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        */
        position: absolute;
        /* padding-top: 2vw; */
        height:40px;
        display: flex;
        justify-content: flex-start;
        bottom:0;
        width:100%;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .is-hot-product{
        position: absolute;
        padding-top: 2vw;
        display: flex;
        justify-content: flex-start;
    }
    .nameProduct{
        width: 100%;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #000000;
    }
    .descripProduct{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .category{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            color: rgba(0, 0, 0, 0.5);
        }
        .sale-price{
            font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
/* identical to box height */

text-align: right;
text-decoration-line: line-through;
text-transform: capitalize;

/* Dark 50 */

color: rgba(0, 0, 0, 0.5);


        }
        .price{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-align: right;
            text-transform: capitalize;
            color: #000000;
        }
    }
    
    .left-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            padding-left: 1vw;
            padding-right: 1vw;
            width: 20px;
        }
    }
`

const Card = ({ widthCard, image, name, category, price, isHot, salePrice }) => {
    return (
        <CardStyled
            widthCard={widthCard}
            isHot={isHot}
         
            salePrice={salePrice}
        >
            <div className="imageProduct">
                <img className="prodImage" src={image} alt="" />
                
                    <div className="is-hot-product">
                        {isHot ?
                        <Button label='Hot'
                        width={52}
                        height={24}
                        textColor="#FFFFFF"
                        bgColor="#FF6F61"
                        bradius={0}
                        borderColor='rgba(0,0,0,0)'
                        fontSize={12}
                        ffamily='Roboto'></Button> : salePrice?<Button label='Sale'
                        width={52}
                        height={24}
                        textColor="#FFFFFF"
                        bgColor="#1E2832"
                        bradius={0}
                        borderColor='rgba(0,0,0,0)'
                        fontSize={12}
                        ffamily='Roboto'></Button>: <div/>}
                    </div>
                
                <div className="hiden-bottom">
                    <div className="left-icon">
                        <div><img src={heart} alt="" /></div>
                        <div><img src={search} alt="" /></div>
                    </div>
                    <div className="right-icon"><Button label='Shop Now'
                        width={150}
                        height={32}
                        textColor="#FFFFFF"
                        bgColor="#000000"
                        // bradius: 40,
                        borderColor='#000000'
                        icon={shopping}
                        widthIcon={20}
                        fontSize={18}
                        ffamily='Roboto'></Button></div>
                </div>
            </div>
            <div className="nameProduct">{name}</div>
            <div className="descripProduct">
                <span className="category">{category}</span>
                <div>

               {salePrice? <span className="sale-price">${salePrice}</span> :<span/>}
                <span className="price">  ${price}</span>
                </div>
            </div>

        </CardStyled>
    )
}
export { Card };
Card.defaultProps = {
    widthCard: 21,
}