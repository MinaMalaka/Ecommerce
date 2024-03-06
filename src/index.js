import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import TokenContextProvider from './Context/TokenContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { QueryClient, QueryClientProvider, } from 'react-query'
import AddtoCartContextProvider from './Context/AddtoCart';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store';
import { WishlistcontextProvider } from './Context/WishListcontext';
let queryClient = new QueryClient()

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistcontextProvider>
      <Provider store={store}>
        <AddtoCartContextProvider>
          <QueryClientProvider client={queryClient}>
            <TokenContextProvider>
              <App />
            </TokenContextProvider>
          </QueryClientProvider>
        </AddtoCartContextProvider>
      </Provider>
    </WishlistcontextProvider>
  </React.StrictMode>
);


