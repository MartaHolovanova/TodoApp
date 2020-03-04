import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import ToDoList from "./components/to-do-list";

const App = () => {
    return(
        <div>
            < SearchPanel />
            < ToDoList />
        </div>
    )

}

ReactDOM.render(< App />, document.getElementById("root"))