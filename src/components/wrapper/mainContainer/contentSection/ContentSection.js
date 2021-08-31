import React, {Component} from 'react';
import UpperSection from "./UpperSection";
import './ContentSection.css';

class ContentSection extends Component {
    render() {
        return (
            <div className="content-section">
                <div className="content-section-title">Installed</div>
                <UpperSection/>
            </div>
        );
    }
}

export default ContentSection;
