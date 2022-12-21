import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </BrowserRouter>
);

serviceWorker.unregister();
