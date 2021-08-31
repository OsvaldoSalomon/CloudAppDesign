import React, {Component} from 'react';
import MainHeader from "./mainContainer/MainHeader";
import ContentWrapper from "./mainContainer/ContentWrapper";
import './MainContainer.css';


class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <MainHeader/>
                <ContentWrapper/>
            </div>
        );
    }
}

export default MainContainer;
