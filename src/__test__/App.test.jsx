import { screen, render } from '@testing-library/react';

import App from '../App';

it('test h1 text is rendered', () => {
    render(<App />);

    const h1El = screen.getByRole('heading', {name: /hihihi/i});

    expect(h1El).toBeInTheDocument();
});