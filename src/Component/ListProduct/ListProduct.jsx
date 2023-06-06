import { Button } from "Component/Button"
import filter from "Assets/icon (3).svg"
import styled from "styled-components"
import { Card } from "Component/Card"
import image1 from "Assets/image-product-3.svg"

const ListProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5vw;
    padding-right: 5vw;
    margin-bottom: 5vh;
    .titleListProduct{
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
    .categoryList{
        display: flex;
        justify-content: space-between;
        ul{
            padding-left: 0;
            display: flex;
        }
        li{
            :first-child{
                color: #000000;

            }
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-transform: capitalize;

            /* Dark */

            color: rgba(0, 0, 0, 0.5);
            padding-right: 3vw;
            list-style: none;
        }
    }
    .listProduct{
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1vw;
        
    }

`

const ListProduct = () => {
    return (
        <ListProductStyled>
            <div className="titleListProduct">Or subscribe to the newsletter</div>
            <div className="categoryList">
                <div>
                    <ul>
                        <li>All Products</li>
                        <li>T-Shirt</li>
                        <li>Hoodies</li>
                        <li>Jacket</li>
                    </ul>
                </div>
                <div>
                    <Button label='Filter' width={113} height={46} textColor='white' fontSize={16}
                        bgColor='#1E2832' bradius={40} borderColor='#FFFFFF' icon={filter}></Button>
                </div>
            </div>
            <div className="listProduct">
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
               <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card> 
            </div>
        </ListProductStyled >
    )
}
export { ListProduct }