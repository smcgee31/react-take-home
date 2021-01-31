import { render } from '@testing-library/react';
import Magic from './index';

test('renders', () => {
  const { container } = render(<Magic />);
  expect(container).toBeInTheDocument();
});
