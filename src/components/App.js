
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  let data = [{title : "Tab 1", content : "Tab 1."}, {title : "Tab 2", content : "Tab 2."}, {title : "Tab 3", content : "Tab 3."}];

  return (
    <div>
        <Tabs tabsData = {data} />
    </div>
  )
}

export default App
