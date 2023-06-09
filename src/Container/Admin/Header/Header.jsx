import styled from "styled-components"
// import { ReactComponent as Search } from "Assets/search (2).svg"
import Search  from "Assets/search (2).svg"
import notification from "Assets/notification.svg"
import avatar from "Assets/avt (2).svg"
import dot from "Assets/dot.svg"



const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    margin-bottom: 35px;

    .header-title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        color: #535353;
    }
    .input-wraper{
        position: relative;
        display: flex;
        img{
            position: absolute;
            margin: 1vw;
        }
    }
    .input-text{
        width: 562px;
        height: 55px;
        left: 794px;
        top: 55px;
        background: #FFFFFF;
        border-radius: 10px;
        text-indent: 56px;
        font-size: 18px;
    }
    .icon-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dot-header{
        margin-right:1vw;
    }
    .notif-header{
        position: relative;
        display: flex;
        margin-right:1vw;
        img{
            width: 20px;
        }
        .has-noti{
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: blue;
            position: absolute;
            margin-left: 15px;
        }
    }
    .avt-header{
        width: 65px;
    }
`
const Header = ()=>{
    return (
        <HeaderStyled>
            <div className="header-title">Overview</div>
            <div className="input-wraper">
                <img src={Search} alt="" />
                <input type="text" className="input-text" placeholder="Search..."/>
            </div>
            <div className="icon-header">
                <div className="dot-header"><img src={dot} alt="" /></div>
                <div className="notif-header">
                    <img src={notification} alt="" />
                    <div className="has-noti"></div>
                </div>
                <div className="avt-header"><img src={avatar} alt="" /></div>
            </div>
        </HeaderStyled>
    )
}
export {Header}