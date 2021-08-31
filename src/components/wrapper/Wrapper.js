import React, {Component} from 'react';
import LeftSide from "./leftSide/LeftSide";
import MainContainer from "./MainContainer";
import './Wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <LeftSide/>
                <MainContainer/>
            </div>
        );
    }
}

export default Wrapper;
