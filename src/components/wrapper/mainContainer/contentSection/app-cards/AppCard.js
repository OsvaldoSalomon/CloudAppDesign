import React, {Component} from 'react';
import './AppCard.css';

class AppCard extends Component {
    render() {
        return (
            <div className="app-card">
               <span>
                <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
                 <path xmlns="http://www.w3.org/2000/svg"
                       d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                       fill="#210027" data-original="#7b1fa2"/>
                 <g xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                      fill="#f6e7fa" data-original="#e1bee7"/>
                 </g>
                </svg>
                Premiere Pro
               </span>
                <div className="app-card__subtext">Edit, master and create fully
                    professional videos
                </div>
                <div className="app-card-buttons">
                    <button className="content-button status-button">Update</button>
                    <div className="menu"></div>
                </div>
            </div>
        );
    }
}

export default AppCard;
