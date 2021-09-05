import React, {useState} from 'react';
import './SideWrapper.css';
import SideMenu from "./SideMenu";

function SideWrapper(props) {
    return (
        <div className="side-wrapper">
            <div className="side-title">{props.title}</div>
            <div className="side-menu">
                <SideMenu/>
            </div>
        </div>
    );
}

export default SideWrapper;
