import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//ToastContainer =>notifications package
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createHttpLink, InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';

const URI= process.env.URI;
// link to graphql server
const link= createHttpLink({
  uri: `${URI}`
});
const cache = new InMemoryCache();
//to create ApolloClient
const client = new ApolloClient({
  link, 
  cache
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
            <App />
            <ToastContainer />

    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
