import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />
      <Route path="/locations" render={props => <LocationList {...props} />} />
      <Route path="/episodes" render={props => <EpisodeList {...props} />} />
    </div>
  );
};

export default AppRouter;
