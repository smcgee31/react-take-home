import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App from './index';
import { BrowserRouter } from 'react-router-dom';

test('renders', () => {
  const { container } = render(
    <MockedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MockedProvider>
  );
  expect(container).toBeInTheDocument();
});
