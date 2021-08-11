import React from "react";
import ListFootball from "./components/List";
import FootballProvider from "./context/Footballprovider";

import "antd/dist/antd.css";

function App() {
  return (
    <FootballProvider>
      <ListFootball />
    </FootballProvider>
  );
}

export default App;
