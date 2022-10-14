import React from 'react';
import { render } from '@testing-library/react';
import Theme from './Theme';


describe('renders Theme component', () => {
  let component;

  beforeEach(() => {
    component = render(<Theme type='dark'>test</Theme>);
  });

  it('should render page LinkedIn link', async () => {
    const { getByText } = component;
    const theme = await getByText(/test/i);
    expect(theme).toBeInTheDocument();
  });
});
