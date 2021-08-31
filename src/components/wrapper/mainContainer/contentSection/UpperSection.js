import React, {Component} from 'react';
import AdobeProducts from "./AdobeProducts";
import './UpperSection.css';

class UpperSection extends Component {
    render() {
        return (
            <ul>
                <AdobeProducts/>
                <AdobeProducts/>
                <AdobeProducts/>
            </ul>
        );
    }
}

export default UpperSection;
