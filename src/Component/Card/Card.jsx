import styled from "styled-components"

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    /* height: 60vh; */
    /* background-color: aqua; */
    .imageProduct{
        width: 100%;
        /* height: 400px; */
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
`

const Card = ({image, name, category, price})=>{
    return(
        <CardStyled>
            <div className="imageProduct"><img src={image} alt="" /></div>
            <div className="nameProduct">{name}</div>
            <div className="descripProduct">
                <span className="category">{category}</span>
                <span className="price">${price}</span>
            </div>
        </CardStyled>
    )
}
export {Card}