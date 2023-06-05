import { ListProduct } from "./ListProduct";

export default{
   
        title: "Example/Buttion",
        component: ListProduct,
        tags: ['autodocs'],
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    };
const Template = (args)=><ListProduct></ListProduct>

export const PrimaryList = Template.bind();