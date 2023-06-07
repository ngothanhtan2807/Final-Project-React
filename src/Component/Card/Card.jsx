import styled from "styled-components"
import shopping from "Assets/shopnow.svg";
import { Button } from "Component/Button";
import heart from "Assets/heart.svg"
import search from "Assets/search (2).svg"
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    /* height: 60vh; */
    /* background-color: aqua; */
    .imageProduct{
        width: 100%;
        position: relative;
        :not(:hover){
            .hiden-bottom{
                display: none;
            }
        }
        .prodImage{

            width: 100%;
        }
        /* height: 400px; */
        .hiden-bottom{
        position: absolute;
        width: 100%;
        height: 40px;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translate(0%, -120%);
       
    }
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

const Card = ({image, name, category, price})=>{
    return(
        <CardStyled>
            <div className="imageProduct"><img className="prodImage" src={image} alt="" />
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
                <span className="price">${price}</span>
            </div>
            
        </CardStyled>
    )
}
export {Card}