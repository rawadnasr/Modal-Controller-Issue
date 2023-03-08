import {
    fireEvent,
    render, 
    screen, 
    waitFor
} from '@testing-library/react';
import Home from './Home';


describe('renders normally', () => {
    it('Should open the modal onClick', async () => {
        render(<Home />);
        const btn = screen.getByText('Open')
        fireEvent.click(btn)
        await waitFor(() => {
            expect(screen.getByText("Modal Content")).toBeInTheDocument()
        })
    }
    )
});