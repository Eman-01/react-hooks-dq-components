import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="app-container">
      <TopMenu/>
      <MainContent/>
      <SideMenu/>
    </div>
  );
}

export default App;
