import { Card } from "./Card";
import image1 from "Assets/image-product-3.svg"

export default {
    title: "Example/Card",
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Card {...args}></Card>;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
    image: image1,
    name: "Nike Sportswear Futura Luxe",
    category: 'Dress',
    price: 63.85,
};