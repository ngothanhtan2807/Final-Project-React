import account from "Assets/account.svg"
import shoping from "Assets/shoping.svg"
import styled from "styled-components"
import search from "Assets/icon.svg"


const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    background: #F0F0F0;
    align-items: center;
    .logo{
        font-family: 'AmstelvarAlpha';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 50px;
        color: #000000;     
    }
    .icon{
        span{
            font-size: 18px;
            padding-right: 1vw;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            img{
                padding-right: 0.8vw;
                width: 16px;
            }
        }
    }

 `

const Header = () => {
    return (
        <HeaderStyled>
            <div className="search"><img src={search} alt="" /></div>
            <div className="logo">Lisa Store</div>
            <div className="icon">
                <span><img src={account} alt="" />Account</span>
                <span><img src={shoping} alt="" />Shoping</span>
            </div>
        </HeaderStyled>
    )
}
export { Header }