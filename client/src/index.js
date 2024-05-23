import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//ToastContainer =>notifications package
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createHttpLink,  InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';
//setting up an apollo client:
const URI= process.env.REACT_APP_URI;
console.log('URI', URI)
// link to graphql server
const link= createHttpLink({
  uri: `${URI}`,
  credentials: 'include',
});
console.log('link',link);
const cache = new InMemoryCache();
console.log('cache', cache);
//to create ApolloClient
const client = new ApolloClient({
  link, 
  cache
});
console.log('client', client)

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
