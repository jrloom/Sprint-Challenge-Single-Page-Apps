import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
    </div>
  );
};

export default AppRouter;
