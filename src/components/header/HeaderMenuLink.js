import React from 'react';

function HeaderMenuLink(props) {
    return (
        <a
            href="#"
            className={props.selected ? "menu-link is-active" + props.classStyle : "menu-link" + props.classStyle}
            onClick={props.onClick}
        >
            {props.item.name}
        </a>
    );
}

export default HeaderMenuLink;
