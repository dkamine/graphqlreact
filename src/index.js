import React from 'react';
import ReactDOM from 'react-dom';
import App from 'container/app';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from './registerServiceWorker';

import 'assets/index.css';

const client = new ApolloClient({
  uri: "https://graphtest-yeonnnfrj37t.runkit.sh"
});

const GraphqlApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<GraphqlApp />, document.getElementById('root'));
registerServiceWorker();
