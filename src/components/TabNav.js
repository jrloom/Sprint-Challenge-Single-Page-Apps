import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter";

import { navInfo } from "../data";

const TabNav = () => {
  // const tabPane = (
  //   <Tab.Pane>
  //     <AppRouter />
  //   </Tab.Pane>
  // );

  const panes = navInfo.map((data, key) => {
    return {
      menuItem: (
        <Menu.Item key={key}>
          <NavLink to={data.route}>
            <Icon name={data.icon} />
            {data.name}
          </NavLink>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <AppRouter />
        </Tab.Pane>
      )
    };
  });

  // I know the above code was submitted late, but the below code was bugging me.
  // Instead of writing out all of the code below, why not have the tabs automatically generated
  // like the cards are?
  // The data for this is in data.js

  // const panes = [
  //   {
  //     menuItem: (
  //       <Menu.Item key={"home"}>
  //         <NavLink to="/">
  //           <Icon name="home" />
  //           Home
  //         </NavLink>
  //       </Menu.Item>
  //     ),
  //     render: () => tabPane
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key={"characters"}>
  //         <NavLink to="/characters">
  //           <Icon name="group" />
  //           Characters
  //         </NavLink>
  //       </Menu.Item>
  //     ),
  //     render: () => tabPane
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key={"locations"}>
  //         <NavLink to="/locations">
  //           <Icon name="map" />
  //           Locations
  //         </NavLink>
  //       </Menu.Item>
  //     ),
  //     render: () => tabPane
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key={"episodes"}>
  //         <NavLink to="/episodes">
  //           <Icon name="video camera" />
  //           Episodes
  //         </NavLink>
  //       </Menu.Item>
  //     ),
  //     render: () => tabPane
  //   }
  // ];

  return (
    <Tab
      menu={{
        attached: true,
        pointing: true
      }}
      panes={panes}
    />
  );
};

export default TabNav;
