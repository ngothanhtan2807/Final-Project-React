import { ListBestSeller } from "./ListBestSeller";

export default{
   
        title: "Example/Buttion",
        component: ListBestSeller,
        tags: ['autodocs'],
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    };
const Template = (args)=><ListBestSeller></ListBestSeller>

export const PrimaryListSeller = Template.bind();