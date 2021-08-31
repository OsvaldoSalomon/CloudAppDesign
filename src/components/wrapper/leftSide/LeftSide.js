import React, {Component} from 'react';
import SideWrapper from "./SideWrapper";
import './LeftSide.css';

class LeftSide extends Component {
    render() {
        const sideTitle = ['Apps', 'Categories', 'Fonts', 'Resource Links'];
        return (
            <div className="left-side">
                <SideWrapper/>
                <SideWrapper/>
                <SideWrapper/>
            </div>
        );
    }
}

export default LeftSide;
