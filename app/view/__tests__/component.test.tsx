import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from "../component";

describe('component renders properly', () => {
  it('says hello react', () => {
    
    render(<Component />);

    expect(screen.queryByText(/Hello React/)).toBeInTheDocument();
  });
});