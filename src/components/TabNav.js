import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter";

const TabNav = () => {
  const tabPane = (
    <Tab.Pane>
      <AppRouter />
    </Tab.Pane>
  );

  const panes = [
    {
      menuItem: (
        <Menu.Item key={"home"}>
          <NavLink to="/">
            <Icon name="home" />
            Home
          </NavLink>
        </Menu.Item>
      ),
      render: () => tabPane
    },
    {
      menuItem: (
        <Menu.Item key={"characters"}>
          <NavLink to="/characters">
            <Icon name="group" />
            Characters
          </NavLink>
        </Menu.Item>
      ),
      render: () => tabPane
    },
    {
      menuItem: (
        <Menu.Item key={"locations"}>
          <NavLink to="/locations">
            <Icon name="map" />
            Locations
          </NavLink>
        </Menu.Item>
      ),
      render: () => tabPane
    },
    {
      menuItem: (
        <Menu.Item key={"episodes"}>
          <NavLink to="/episodes">
            <Icon name="video camera" />
            Episodes
          </NavLink>
        </Menu.Item>
      ),
      render: () => tabPane
    }
  ];

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
