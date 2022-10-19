import "./tasksList.css"

import React, { useState } from "react"

import ListingTasks from "./listingTasks"

export default function TasksList() {

    const completedIcon = <i class="fa-solid fa-arrow-up green"></i>;
    const activeIcon = <i class="fa-solid fa-arrow-right blue"></i>;
    const blockedIcon = <i class="fa-sharp fa-solid fa-lock gray"></i>;
    


    return (
        <div className="container">
            <header className="header">Your TASKS</header>
            <div className="tasksList">
                {/* <button onClick={handleClick}> Change state</button> */}
                <span >
                    <ListingTasks></ListingTasks>
                </span>
            </div>
        </div>
    )
}



