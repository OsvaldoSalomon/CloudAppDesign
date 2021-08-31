import React from "react";
import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import './App.css';

function App() {
    return (
        <div>
            <div className="dark-light"/>
            <div className="app">
                <Header/>
                <Wrapper/>
            </div>
        </div>

    );
}

export default App;
