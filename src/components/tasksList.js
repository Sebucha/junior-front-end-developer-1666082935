import "./tasksList.css"
import "./colors.css"

import React, { useState } from "react"

import ListingTasks from "./listingTasks"

export default function TasksList() {

    const icons = [
        <i class="fa-solid fa-arrow-up"></i>,
        <i class="fa-solid fa-arrow-right"></i>,
        <i class="fa-sharp fa-solid fa-lock"></i>
    ]

    const [isActive, setActive] = useState(false)



    function handleClick() {
        setActive(!isActive)
    }
    // function showIcon() {
    //     if (isActive) {
    //         return icons[1]
    //     }
    // }

    return (
        <div className="container">
            <header className="header">Your TASKS</header>
            <div className="tasksList">
                {/* <span>{showIcon}</span> */}
                <button onClick={handleClick}> Change state</button>
                <span className={isActive ? 'blue' : "gray"}>
                    <ListingTasks></ListingTasks>
                </span>
            </div>
        </div>
    )
}



