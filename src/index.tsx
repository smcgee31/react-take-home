import React from 'react';
import ReactDOM from 'react-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import 'tailwindcss/tailwind.css';
import './root.scss';

import App from './containers/app';
import reportWebVitals from './reportWebVitals';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

console.log('token', process.env);

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_ACCESS_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
