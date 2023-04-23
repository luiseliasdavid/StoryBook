import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from '../../components/MyLabel';

export default {
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        color: {control:'select'},
        fontColor:{control:'color'}

    },
    tags: ['autodocs'],
} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allCaps:false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps:true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color:'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'normal',
    color:'tertiary',
    }
export const CustomFontColor = Template.bind({});
Tertiary.args = {
    size:'h1',
    color:'tertiary',
    fontColor:'#5517ac'
    }
