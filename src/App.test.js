// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchMeadow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchMeadow/i);
    expect(titleElement).toBeInTheDocument();
});
