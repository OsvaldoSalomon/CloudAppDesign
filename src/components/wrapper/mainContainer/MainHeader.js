import React, {useState} from 'react';
import MainHeaderLink from "./MainHeaderLink";
import './MainHeader.css';

function MainHeader() {
    const [items] = useState(() => [
        {id: 1, name: "Desktop"},
        {id: 2, name: "Mobile"},
        {id: 3, name: "App"}
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="main-header">
            <a className="menu-link-main" href="#">All Apps</a>
            <div className="header-menu">
                {items.map((item, index) => (
                    <MainHeaderLink
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedIndex(index)}
                        selected={index === selectedIndex}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainHeader;
