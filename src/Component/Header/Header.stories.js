import { Header } from "./Header";

export default{
    title:"Example/Buttion",
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = (args)=><Header></Header>;
// export const PrimaryHeader = Template.bind();
export const PrimaryHeader = {
    args:{
        
    }
}