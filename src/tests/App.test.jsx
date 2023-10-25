import { render, screen } from "@testing-library/react"
import App from "../App.jsx"
import userEvent from '@testing-library/user-event';

describe('App', () => {
    it('Curves render', () => {
        render(<App />);
        const CurvesElement = screen.getByText("Curves!!!");
        expect(CurvesElement).toBeInTheDocument();
    });
});