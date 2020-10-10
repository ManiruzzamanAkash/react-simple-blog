import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route, withRouter, useLocation   } from "react-router-dom";
import routes from './routes';

function App() {

  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if(location.pathname !== '/'){
      if(typeof userData === 'undefined' ||  userData === null ){
        window.location.href = "/";
      }
    }
    
  }, []);

  return (
    <div className="App">
      {/* {
        !isAuthenticated &&

      } */}

      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              name={route.name}
              component={route.component}
              exact={route.exact}
            />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
