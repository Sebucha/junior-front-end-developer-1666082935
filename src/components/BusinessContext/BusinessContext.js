import './BusinessContext.css'

import React from "react";
import Clouds from '../Clouds/Clouds';
import Label from '../Label/Label';


export default function BussinesContext({ context }) {
    return (
        <div style={{ flexGrow: "4" }} className="container">
            <div className="bussinesContext">
                <header className="header">bussines context</header>
                <main className="contents">
                    <div className="clouds_b"><Clouds ></Clouds></div>
                    <div className="label_b">{context}</div>
                </main>
            </div>
        </div>
    );
}