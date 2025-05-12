import { Children, StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function Myapp(){
    return(
        <div>
            <h1>The custom react app</h1>
        </div>
    )
}

const AnotherElement = (
<a href="https://www.google.com/" 
target='_blank'>Click to go Google</a>
);

const areactElement = React.createElement(
    "a", 
    {
        href: "https://www.google.com/",
        target: "_blank"
    },
    "go to google" 

);

createRoot(document.getElementById('root'))
.render(
    <App />
)
