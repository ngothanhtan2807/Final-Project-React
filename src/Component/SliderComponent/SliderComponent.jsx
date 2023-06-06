import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "Assets/image-product-3.svg"
import { Card } from 'Component/Card';
 const SliderComponent =()=> {
   
        return (
            <Carousel >
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
                <div>
                <Card image = {image1} name ="Nike Sportswear Futura Luxe" category="Dress" price = {63.85}></Card>
                </div>
            </Carousel>
        );
    
};
  export {SliderComponent}