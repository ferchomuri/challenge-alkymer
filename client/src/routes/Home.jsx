import React from "react";
import Headers from "../components/Headers";
import AddApp from "../components/AddApp";
import AppList from "../components/AppList";

const Home = () => {
  return (
    <div>
      <Headers />
      <AddApp />
      <AppList />
    </div>
  );
};

export default Home;
