import React, {useState} from 'react';
import SideWrapper from "./SideWrapper";
import './LeftSide.css';

function LeftSide() {
    const [items] = useState(() => [
        {id: 1, title: "Apps",},
        {id: 2, title: "Categories"},
        {id: 3, title: "Fonts"},
        {id: 4, title: "Resource Links"}
    ]);
    return (
        <div className="left-side">
            {items.map(item => (
                <SideWrapper title={item.title}/>
            ))}
        </div>
    );

}

export default LeftSide;
