import React, { useState } from "react";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./components/profile/profile";
import Stats from "./components/Stats/Stats";
import Team from "./components/Team/Team";
import Event from "./components/Event/Event";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSideBarOpen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSideBarOpen(!isSidebarOpen);
  };
  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
