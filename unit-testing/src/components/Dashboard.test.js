import { render, screen, fireEvent, getByText, findByText } from "@testing-library/react";
import axios from "axios";
import Dashboard from "./Dashboard";

test('should render some text', () => {
    render(<Dashboard username={'Nishat'}/>);
    const span = screen.getByText(/Nishat/i)
    expect(span).toBeInTheDocument();
})

test('should render some value', () => {
    render(<Dashboard username={'Nishat'}/>);
    const span = screen.getByText(/Value/)
    expect(span).toBeInTheDocument();

})

test('should render other value after click', () => {
    render(<Dashboard username={'Nishat'}/>);
    const button = screen.getByText(/Toggle/)
    fireEvent.click(button);

    const span = screen.getByText(/other value/)
    expect(span).toBeInTheDocument();
})
test('should set the state value to be equal to the input value', () => {
    render(<Dashboard username={'Nishat'}/>);
    const input = screen.getByLabelText(/State value/)
    fireEvent.change(input, { target: { value: 'Nishat Khan' } })

    const span = screen.getByText(/Nishat Khan/)
    expect(span).toBeInTheDocument();
})

test('should set content visible on button click', async () => {
    render(<Dashboard username={'Nishat'}/>);
    const button = screen.getByText(/visible/)
    fireEvent.click(button);
    const div = await screen.findByText('Content visible')
    expect(div).toBeInTheDocument();
    fireEvent.click(button)
    expect(div).not.toBeInTheDocument();
})
jest.mock('axios')
test('should make api call and set data', async () => {
    axios.post.mockResolvedValue({
        data: {
            name: 'Nis1234'
        }
    })
    render(<Dashboard username={'Nishat'}/>);
    const button = screen.getByText(/Fetch/)
    fireEvent.click(button)
    const div = await screen.findByText(/Nishat/);
    expect(div).toBeInTheDocument();
})

