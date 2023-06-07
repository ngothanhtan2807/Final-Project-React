import styled from "styled-components"
import footer1 from "Assets/footer1.svg"
import footer2 from "Assets/footer2.svg"
import footer3 from "Assets/footer3.svg"
import footer4 from "Assets/footer4.svg"
import footer5 from "Assets/icons_payment 1.svg"
import { Button } from "Component/Button"
const FooterStyled = styled.div`
    width: 100vw;
    height: 40vh;
    padding-top: 10vh;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .top-footer{
        padding-left: 5vw;
        padding-right: 5vw;
        display: flex;
        flex-direction: row;
        padding-bottom: 5vh;
    }
    .footer-content{
        display: flex;
        flex-direction: column;
        width: 30vw;
        padding-right: 10vw;
    }
    .footer-content1{
        display: flex;
        flex-direction: column;
        width: 15vw;
    }
    .name-shop{
        width: 52px;
        height: 34px;
       /* margin-bottom: 0; */

        font-family: 'AmstelvarAlpha';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        /* identical to box height */


        /* Dark */

        color: #000000;
    }
   .description-footer{
    width: 351px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    margin: 0;

    /* Black 75 */

    color: rgba(30, 40, 50, 0.75);


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
   }
   .footer-content-icon{
    display: flex;
   }
   .icon-footer{
    padding-right: 2vw;
   }
   .service-footer{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */

text-transform: capitalize;

/* Dark */

color: #000000;

   }
   .item-service{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

text-transform: capitalize;

/* Black */

color: #1E2832;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
   }
   .bottom-footer{
    width: 100vw;
    height: 5vh;
    background: #1E2832;
    display: flex;
    justify-content: space-around;
    align-items: center;
   }
   .bottom-content{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* identical to box height */

text-transform: capitalize;

/* White */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
   }

`

const Footer = () => {
    return (
        <FooterStyled>
            <div className="top-footer">
                <div className="footer-content">
                    <h2 className="name-shop">Lisa</h2>
                    <div className="description-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    <div className="footer-content-icon">
                        <div className="icon-footer"><img src={footer1} alt="" /></div>
                        <div className="icon-footer"><img src={footer2} alt="" /></div>
                        <div className="icon-footer"><img src={footer3} alt="" /></div>
                        <div className="icon-footer"><img src={footer4} alt="" /></div>
                    </div>
                </div>
                <div className="footer-content1">
                    <h2 className="service-footer">CATALOG</h2>

                    <div className="item-service">Necklaces</div>
                    <div className="item-service">hoodies</div>
                    <div className="item-service">Jewelry Box</div>
                    <div className="item-service">t-shirt</div>
                    <div className="item-service">jacket</div>

                </div>
                <div className="footer-content1">
                    <h2 className="service-footer">ABOUT US</h2>

                    <div className="item-service">Our Producers</div>
                    <div className="item-service">Sitemap</div>
                    <div className="item-service">FAQ</div>
                    <div className="item-service">About Us</div>
                    <div className="item-service">Terms & Conditions</div>

                </div>
                <div className="footer-content1">
                    <h2 className="service-footer">CUSTOMERS SERVICES</h2>
                    <div className="item-service">Contact Us</div>
                    <div className="item-service">Track Your Order</div>
                    <div className="item-service">Product Care & Repair</div>
                    <div className="item-service">Book an Appointment</div>
                    <div className="item-service">Shipping & Returns</div>

                </div>

            </div>
            <div className="bottom-footer">
                <div className="bottom-content">© 2023 LISA , Inc.</div>
                <div>
                    <img src={footer5} alt="" />
                </div>
                <div>
                <Button label='Scroll to top' width={113} height={30} textColor='white' fontSize={16}
                        bgColor='#1E2832' bradius={0} borderColor='rgba(0,0,0,0)' ></Button>
                </div>
            </div>
        </FooterStyled>
    )
}
export { Footer }