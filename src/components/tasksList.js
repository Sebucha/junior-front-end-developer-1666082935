import "./tasksList.css"
import "./colors.css"

import React, { useState } from "react"

import ListingTasks from "./listingTasks"

export default function TasksList() {

    const completed = <i class="fa-solid fa-arrow-up green"></i>;
    const active = <i class="fa-solid fa-arrow-right blue"></i>;
    const blocked = <i class="fa-sharp fa-solid fa-lock gray"></i>;

    const [isActive, setActive] = useState(false)
    const [icon, setIcon]= useState(blocked)
    

    function handleClick() {
        setActive(!isActive)
    }
    function changeIcon(){
        setIcon(active)
    }
   

    return (
        <div className="container">
            <header className="header">Your TASKS</header>
            <div className="tasksList">
                <button onClick={handleClick}> Change state</button>
                <span className={isActive ? 'blue': "gray"}>
                    <span>{icon}</span>
                    <ListingTasks></ListingTasks>
                </span>
            </div>
        </div>
    )
}



