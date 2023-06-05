import { Button } from "./Button";
import icon from "Assets/icon.svg";
import search from "Assets/shopnow.svg";

export default {
    title: "Example/Buttion",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args}></Button>;

export const PrimaryButton111 = Template.bind({});

PrimaryButton111.args = {
    label:'test button',
    width: 113,
    height: 46,
    textColor: 'white',
    fontSize:30,
    bgColor: 'rgba(0,0,0,0)',
    bradius: 40,
    borderColor: '#FFFFFF',
    icon: icon,
}
export const BlackButton = {
    args: {
        label: 'Button',
        width: 113,
        height: 46,
        textColor: 'black',
        bgColor: 'rgba(0,0,0,0)',
        bradius: 40,
        borderColor: '#FFFFFF'
    },
};
export const Shopnow = {
    args:{
        label: 'Shop Now',
        width: 223,
        height: 72,
        textColor: "#FFFFFF",
        bgColor: "#1E2832",
        // bradius: 40,
        borderColor: '#FFFFFF',
        icon: search,
        fontSize:29,
        ffamily:'Roboto',
    }
}