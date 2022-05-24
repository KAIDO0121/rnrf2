import { StyleSheet, ImageBackground, View } from "react-native";
import React, { useState } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import MyTabBar from "./pages/myTabBar";

const App = () => {
  const tabs = ["Home", "Login", "Register"];

  const [activeTab, setActiveTab] = useState(0);
  const onTabChange = (tab) => {
    setActiveTab(tab);
    Actions[tabs[tab]]();
  };
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="home" component={Home} />
        <Scene
          key="tabbar"
          component={MyTabBar}
          data={tabs}
          tabs={true}
          activeTab={activeTab}
          onTabPress={onTabChange}
        />
      </Scene>
    </Router>
  );
};

export default App;
