import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { ProductForm } from "./components/ProductForm";
import SignupFormPage from "./components/SignupFormPage";
import { ReadProduct } from "./components/ReadProduct"
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          {/* <Route path='/products/:productId'>
            <ReadProduct />
          </Route> */}
          <Route path='/add-product'>
            <ProductForm user={user} />
          </Route>
        </Switch>
      </>
  );
}

export default App;