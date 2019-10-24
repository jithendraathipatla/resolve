import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css"
import Button from "./button";

const App = () => {
   
    return(
        <div>
           <h1>This is working</h1>
           <Button/>
         
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


