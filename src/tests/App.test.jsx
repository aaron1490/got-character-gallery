import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect } from 'vitest';

describe('<App/> Component', () => {

  it('Renders Without Error', () => {
    render(<App />);
  });


  it('header component check', () => {
    render(<App />);

    const header = screen.getByText('LOTR Project');

    expect(header).toBeDefined();
  });
});
