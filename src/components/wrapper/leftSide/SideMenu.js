import React, {useState} from 'react';

function SideMenu() {
    const [items] = useState(() => [
        {
            id: 1,
            aContent: ["All Apps", "Updates"],
            iClass: ["fas fa-th-large", "fas fa-redo-alt"],
            spanClass: "notification-number updates",
            spanCont: 3
        },
        {
            id: 2,
            aContent: ["Photography", "Graphic Design", "Video", "Illustrations", "UI/UX", "3D/AR"],
            iClass: ["fas fa-camera", "fas fa-tint", "fas fa-film", "fas fa-paint-brush", "fas fa-laptop-code", " fas fa-cubes"]
        },
        {id: 3, aContent: "Manage Fonts", iClass: ["fas fa-font"]},
        {
            id: 4,
            aContent: ["Stock", "Tutorials", "Portfolio", "Behance", "Social Forum"],
            iClass: ["fa-layer-group", "fa-graduation-cap", "fa-folder", "fa-feather", "fa-comments"]
        }
    ]);
    return (
        <div className="side-menu">
            <a href="#">
                {items.map((item, index) => (
                    <div key={item.id}>
                        <i className={item.iClass}/>
                        {item.aContent}
                    </div>

                ))}
            </a>
        </div>
    );

}

export default SideMenu;
