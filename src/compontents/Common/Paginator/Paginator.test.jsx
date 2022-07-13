import { render, screen } from "@testing-library/react";
import Paginator from './Paginator';

test('Компонента Hello без имени в пропсах', () => {
    const { getByText } = render(<Hello />)
    expect(() => getByText("Hey, stranger")).not.toThrow()
})

test('Компонента Hello c именем в пропсах', () => {
    const { getByText } = render(<Hello name='John' />)
    expect(() => getByText("Hello, John")).not.toThrow()
})

test('Компонента Hello ', () => {
    render(<Paginator 
        current_page={1} 
        page_size={10} 
        total_items_count={11} 
        portion_size={10} />)    
    expect(screen.find).toBeInTheDocument()
})





describe('Paginator tests',() => {
    test('page count is 11, show only 10', () => {
        const component = TestRenderer.create()
        const root = component.root
        let divs = root.findAllByType('div')
        expect(divs.length).toBe(11)
    })
})