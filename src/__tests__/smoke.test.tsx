import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Smoke test', () => {
  it('renders a simple component', async () => {
    const { getByText } = render(<div>Hello test</div>);
    throw new Error('Test error');
    expect(getByText('Hello test')).toBeInTheDocument();
  });
});