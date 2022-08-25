import React from "react";
import  ReactDOM  from "react-dom";

const App = function() {
    const btnName="hello"
    return (
        <div>
            <label id="name" className="label" htmlFor="label"> 
                Enter username:
            </label>
            <input type="text" />
            <button style={{backgroundColor:'blue'}}>{btnName}</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))