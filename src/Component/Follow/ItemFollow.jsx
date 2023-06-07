import styled from "styled-components"
import inta from "Assets/inta.svg"

const ItemStyled = styled.div`
    width: 180px;
    display: flex;
    height: 180px;
    margin: 1vw;
    justify-content: center;
    align-items: center;
    z-index: 1;
    :not(:hover){
        .itemTop{
            display: none;
        }
    }
    .itemBottom{
        width: 100%;
        height: 100%;
    }
    .itemTop{
      display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
       flex-wrap: wrap;
        gap: 2vw;
        background-color:rgba(1, 3, 1, 0.4);
    }
.imageItemTop{
        width: 80px;
        align-items: center;
        justify-content: center;
    }
`
const ItemFollow = ({ image }) => {
    return (
        <ItemStyled style={{ backgroundImage: `url(${image})` }}>
            <div className="itemTop" >
                <img className="imageItemTop" src={inta} alt="" />
            </div>
        </ItemStyled>
    )
}
export { ItemFollow }