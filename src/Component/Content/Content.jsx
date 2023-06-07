import styled from "styled-components"
import frame from "Assets/Frame.svg"
import vector from "Assets/Vector.svg"
import { Button } from "Component/Button"
import search from "Assets/shopnow.svg";
import banner from "Assets/engin-akyurt-jaZoffxg1yc-unsplash 1.svg"
import branch1 from "Assets/brand-1.svg"
import branch2 from "Assets/brand-2.svg"
import branch3 from "Assets/brand-3.svg"
import branch4 from "Assets/brand-4.svg"
import branch5 from "Assets/brand-5.svg"
import popularImg from "Assets/image-category-1.svg"
import plist1 from "Assets/item-category-hover 1.svg"
import plist2 from "Assets/item-category-2.svg"
import plist3 from "Assets/item-category-1.svg"
import plist4 from "Assets/item-category.svg"
import { ListBestSeller, ListProduct } from "Component/ListProduct";
import bannerzara from "Assets/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.svg"
import logo10241 from "Assets/1024px-Zara_Logo 1.svg"
import logo10242 from "Assets/1024px-Zara_Logo 2.svg"
import { SliderComponent } from "Component/SliderComponent";
import { Follow } from "Component/Follow";
import { FooterComponent } from "Component/Footer";
const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    .line{
        display: flex;
        width: 73vw;
        height: 0px;
        background-color: #F0F0F0;
       /* justify-content: center; */
        align-items: center;
        border: 1px solid #E3E3E3;
    }
    .topBanner{
        width: 100%;
        height: 80vh;
        display: flex;
        background-color: #F0F0F0;
        
    }
    .topBannerLeft{
        float: left;
        width: 77%;
        /* margin-left: 11.5vw; */
        display:  flex;
        .leftImageBn{
            padding-top: 50vh;
            img{
                width: 10vh;
            }
        }
        .leftContenBn{
            padding-top: 25vh;
            padding-left: 15vh;
            display: flex;
            flex-direction: column;
            font-family: 'Roboto';
                font-style: normal;
            .title{
             
                font-weight: 300;
                font-size: 74px;
                line-height: 55px;
                /* identical to box height, or 74% */

                text-transform: capitalize;

                /* Dark */

                color: #000000;

            }
            .descTitle{
                padding-top: 3vh;
           
                font-weight: 400;
                font-size: 30px;
                line-height: 55px;
                /* or 183% */

                text-transform: capitalize;

                /* Dark */

                color: #000000;
            }
            .btnShopnow{
                padding-top: 10vh;
            }
        }
    }
    .topBannerRight{
        float: right;
        width: 50%;
        /* margin-right: 11.5vw; */
        display: flex;
        justify-content: space-between;
        .rightImageBnLeft{
            margin-top: 10vh;
            margin-left: 3vw;
            width: 350px;
            height: 446px;
            left: 1102px;
            top: 245px;
            border: 2px solid rgba(0, 0, 0, 0.25);
            border-radius: 160px 0px;
            img{
               width: 350px;
            /* height: 65vh;  */
            border: 2px solid rgba(0, 0, 0, 0.25);
            border-radius: 160px 0px;
            transform: translate(-5%, -4%);
            }
        }
        .rightImageBn{
            padding-top: 30vh;
            img{
                width: 15vh;
            }
        }
    }
    .branch{
        padding-top: 6vh;
        padding-bottom: 6vh;
        display: flex;
        justify-content: space-between;
        img{
            width: 15vw;
        }
    }
    .popular-style{
        /* width: 100px;
        height: 40px; */
        display: flex;
        height: 43vw;
        margin-bottom: 2vw;
        .title-popular{
            writing-mode: tb-rl;
            width: 10vh;
            margin: 0;
            display: flex;
            padding-top: 1vw;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 33px;
            line-height: 40px;
            text-align: center;
            text-transform: uppercase;
            justify-content: flex-end;
            /* Dark */

            color: #000000;

            transform: rotate(180deg);
        }
        .popular-image{
            img{
                width: 43vw;
                /* height: 43vw; */
            }
        }
        .popular-list-image{
            margin-left: 1vw;
            width: 43vw;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5vw;
            justify-content: space-between;
            img{
                height: 21vw;
            }
        }
    }
    .banner-zara{
       width: 100vw;
       
       display: flex;
        /* background-image: url("${bannerzara}"); */
        position: relative;
        .background-image{
            width: 100%;
        }
    }
    .content-banner-zara{
        float: right;
        margin-left: 50vw;
        width: 50vw;
        position: absolute;
    }
    .zara-img1{
        width: 33vw;
        padding-top: 5vh;
        padding-left: 16.5vw;
        position: relative;
        /* margin-left: 17vw; */
    }
    .zara-img2{
        width: 13vw;
        transform: translate(5vw, -8vw);
    }
    .title-banner-zara{
        font-family: 'Roboto';
        padding-left: 7vw;
        width: 504px;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 40px;
        /* or 154% */

        text-transform: capitalize;

        /* Primary */

        color: #FF6F61;
    }
    .btn-banner-zara{
        padding-left: 7vw;
    }
    .best-seller{
        display: flex;
        width: 100vw;
    flex-direction: column;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-bottom: 5vh;
    padding-top: 4vh;
    .best-seller-content{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;
        color: #000000;
    }
   
    }
  
    .best-seller-menu{
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
`
const Content = () => {
    return (
        <ContentStyled>
            <div className="line">
            </div>
            <div className="topBanner">
                <div className="topBannerLeft">
                    <div className="leftImageBn">
                        <img src={frame} alt="" />
                    </div>
                    <div className="leftContenBn">
                        <div className="title">Collections</div>
                        <div className="descTitle">you can explore ans shop many differnt collection from various barands here.</div>
                        <div className="btnShopnow"><Button label='Shop Now'
                            width={223}
                            height={72}
                            textColor="#FFFFFF"
                            bgColor="#1E2832"
                            // bradius: 40,
                            borderColor='#FFFFFF'
                            icon={search}
                            fontSize={29}
                            ffamily='Roboto'></Button></div>
                    </div>

                </div>
                <div className="topBannerRight">
                    <div className="rightImageBnLeft">
                        <img src={banner} alt="" />
                    </div>
                    <div className="rightImageBn">
                        <img src={vector} alt="" />
                    </div>

                </div>
            </div>
            <div className="branch">
                <div><img src={branch1} alt="" /></div>
                <div><img src={branch2} alt="" /></div>
                <div><img src={branch3} alt="" /></div>
                <div><img src={branch4} alt="" /></div>
                <div><img src={branch5} alt="" /></div>
            </div>

            <div className="popular-style">
                <p className="title-popular">
                    Explore new and popular styles
                </p>
                <div className="popular-image">
                    <img src={popularImg} alt="" />
                </div>
                <div className="popular-list-image">
                    <img src={plist1} alt="" />
                    <img src={plist2} alt="" />
                    <img src={plist3} alt="" />
                    <img src={plist4} alt="" />
                </div>
            </div>
            <ListProduct ></ListProduct>

            <div className="banner-zara" >
                <img className="background-image" src={bannerzara} alt="" />
                <div className="content-banner-zara">
                    <div>
                        <img className="zara-img1" src={logo10241} alt="" />
                        <img className="zara-img2" src={logo10242} alt="" />
                    </div>
                    <div className="title-banner-zara">
                        Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                    </div>
                    <div className="btn-banner-zara">
                        <Button label='See Collection'
                            width={223}
                            height={72}
                            textColor="#1E2832"
                            bgColor="#FFFFFF"
                            bradius={0}
                            borderColor='#FFFFFF'

                            fontSize={29}
                            ffamily='Roboto'></Button>
                    </div>
                </div>
            </div>
            <ListBestSeller></ListBestSeller>

            <Follow></Follow>

        </ContentStyled>
    )
}
export { Content }