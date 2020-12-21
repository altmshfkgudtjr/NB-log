import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from "react-helmet-async"
import store from 'store/index'

ReactDOM.render(
  <BrowserRouter>
	  <Provider store={store}>
  		<HelmetProvider>
				<App />
			</HelmetProvider>
    </Provider>
 	</BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();