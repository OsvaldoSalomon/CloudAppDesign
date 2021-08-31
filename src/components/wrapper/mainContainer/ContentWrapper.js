import React, {Component} from 'react';
import ContentWrapperHeader from "./contentSection/ContentWrapperHeader";
import ContentSection from "./contentSection/ContentSection";
import './ContentWrapper.css'

class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <ContentWrapperHeader/>
                <ContentSection/>
            </div>
        );
    }
}

export default ContentWrapper;
