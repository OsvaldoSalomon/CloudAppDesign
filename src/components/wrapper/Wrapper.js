import React, {Component} from 'react';
import LeftSide from "./LeftSide";
import './Wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <LeftSide/>
            </div>
        );
    }
}

export default Wrapper;
