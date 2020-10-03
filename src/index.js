import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';

import App from "./App";

/**** Start Import CSS & JS ***********/
import "./assets/css/adminCustom.css";
import "./assets/css/oneui.min.css";
import 'react-toastify/dist/ReactToastify.css';

// import "./assets/js/oneui.core.min.js";
// import "./assets/js/oneui.app.min.js";
/**** End Import CSS ***********/


import * as serviceWorker from "./serviceWorker";

// Import reducer
import { Provider } from "react-redux";

// Import Store
import store from "./redux/backend/Store";

toast.configure();


ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </HttpsRedirect>
    <ToastContainer />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
