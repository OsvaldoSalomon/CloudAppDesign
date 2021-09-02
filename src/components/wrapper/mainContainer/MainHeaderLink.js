import React from 'react';

function MainHeaderLink(props) {
    return (
        <a
            href="#"
            className={props.selected ? "main-header-link is-active" : "main-header-link"}
            onClick={props.onClick}
        >
            {props.item.name}
        </a>
    );
}

export default MainHeaderLink;
