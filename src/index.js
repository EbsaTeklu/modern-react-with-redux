import React from "react";
import  ReactDOM  from "react-dom";

const App = function() {
    return (
        <div>
            <label id="name" className="label">
                Enter username:
            </label>
            <input type="text" />
            <button style={{backgroundColor:'blue'}}>Enter</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))