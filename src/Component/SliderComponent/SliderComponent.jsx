
import Carousel from 'Component/Carousel/Carousel';
import { Card } from 'Component/Card';
import image1 from "Assets/image-product-3.svg"
const SliderComponent = () => {

    return (

        <div style={{ maxWidth: 90 +"vw", marginLeft: 'auto', marginRight:0+ 'vw', marginTop: 1+'vh' }}>
        <Carousel
            show={4}
        >
            <div>
                <div style={{padding: 0.5+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
            <div>
                <div style={{padding: 1+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
            <div>
                <div style={{padding: 1+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
            <div>
                <div style={{padding: 1+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
            <div>
                <div style={{padding: 1+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
            <div>
                <div style={{padding: 1+'vw'}}>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>

                </div>
            </div>
        </Carousel>
    </div>
        );

};
export { SliderComponent }