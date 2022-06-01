import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor: {control: 'color'} //color picker
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});

Basic.args = {
    size: 'normal', //config solo de la historia basic
    allCaps: false, //capitaliza todo la palabra
}

export const AllCaps = Template.bind({});

AllCaps.args = {
    size: 'normal',
    'allCaps': true, //All capitalize
}

export const Secondary = Template.bind({});

Secondary.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
}
