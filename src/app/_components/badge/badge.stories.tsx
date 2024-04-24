import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { withTests } from "@storybook/addon-jest";
import results from '../../../../.jest-test-results.json';
const meta:Meta<typeof Badge>  ={
component:Badge,
tags:['autodocs'],
decorators:[
    (Story)=>{
        document.documentElement.classList.add('dark')
        return <Story/>
    }
]
}
export default meta;
type Story = StoryObj<typeof Badge>
export const Tests:Story={
    render:(args)=>(<Badge {...args}>Badge</Badge>)
}
Tests.decorators=(withTests({results}))
export const BadgeColors:Story={
    render:()=>{
        return(
            <>
            <Badge variant="primary">Badge</Badge>
            <Badge variant="neutral">Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="accent">Badge</Badge>
            <Badge variant="ghost">Badge</Badge>
            <Badge variant="info">Badge</Badge>
            <Badge variant="success">Badge</Badge>
            <Badge variant="warning">Badge</Badge>
            <Badge variant="error">Badge</Badge>
            </>
        )
    }
}
export const BadgeSize:Story={
    render:()=>{
        return(
            <>
            <Badge variant="primary" size="tiny">tiny</Badge>
            <Badge variant="primary" size="small">small</Badge>
            <Badge variant="primary" size="normal">normal</Badge>
            <Badge variant="primary" size="large">large</Badge>
            </>
        )
    }
}


