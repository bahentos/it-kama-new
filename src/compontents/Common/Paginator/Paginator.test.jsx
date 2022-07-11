import TestRenderer from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator tests',() => {
    test('page count is 11, show only 10', () => {
        const component = TestRenderer.create(<Paginator 
            current_page={1} 
            page_size={10} 
            total_items_count={11} 
            portion_size={10} />)
        const root = component.root
        let divs = root.findAllByType('div')
        expect(divs.length).toBe(11)
    })
})