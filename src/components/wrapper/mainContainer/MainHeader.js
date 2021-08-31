import React, {Component} from 'react';
import './MainHeader.css';

class MainHeader extends Component {
    render() {
        return (
            <div className="main-header">
                <a className="menu-link-main" href="#">All Apps</a>
                <div className="header-menu">
                    <a className="main-header-link is-active" href="#">Desktop</a>
                    <a className="main-header-link" href="#">Mobile</a>
                    <a className="main-header-link" href="#">Web</a>
                </div>
            </div>
        );
    }
}

export default MainHeader;
