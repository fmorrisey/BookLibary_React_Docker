import React from 'react'
import './titleBar.css';

export default function TitleBar(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav">
                    <h1 className="center-really">dCC Library</h1>
                </div>
            </div>
        </div>
    );
}