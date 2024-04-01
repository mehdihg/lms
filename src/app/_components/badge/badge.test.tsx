import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { Badge } from "./badge";

describe('badge test',()=>{
    it('default badge exists',()=>{
        const badge=render(<Badge>Default badge</Badge>)
        expect(badge.getByText('Default badge')).toBeInTheDocument()
        
    })
    it('if values of variant passes, show correct css color',()=>{
        const {rerender}=render(<Badge variant="primary" >badge</Badge>)
        const element =screen.queryByTestId('badge')
        expect(element).toHaveClass('badge-primary')
        rerender(<Badge variant="error" data-testid='badge'>badge</Badge>)
        expect(screen.getByTestId('badge')).toHaveClass('badge-error')
    })
    it('if values of sizes passes,show correct css sizes ',()=>{
        const {rerender}=render(<Badge variant="primary" size="tiny" >tiny</Badge>)
        const element =screen.queryByTestId('badge')
        expect(element).toHaveClass('badge-xs')
        rerender(<Badge variant="primary" data-testid='badge'>Default badge</Badge>)
        expect(screen.queryByTestId('badge')).toHaveClass('badge-md')
    })
})