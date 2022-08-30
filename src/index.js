import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  // uri : 'https://graphql.anilist.co/',
  uri: 'https://api-ap-south-1.hygraph.com/v2/cl5wc0itv0z6101uk0asl9dvk/master',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);
