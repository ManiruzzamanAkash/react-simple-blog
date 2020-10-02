import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import App from "./App";

/**** Start Import CSS ***********/
import "./assets/css/adminCustom.css";
/**** End Import CSS ***********/


import * as serviceWorker from "./serviceWorker";

// Import reducer
import { Provider } from "react-redux";

// Import Store
import store from "./redux/backend/Store";


ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
