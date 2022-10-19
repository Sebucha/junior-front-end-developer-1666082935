import './listingTask.css'
import "./colors.css"

import taskList from "./db";
import { useState } from "react";

export default function ListingTasks() {

    const completedIcon = <i class="fa-solid fa-arrow-up green"></i>;
    const activeIcon = <i class="fa-solid fa-arrow-right blue"></i>;
    const blockedIcon = <i class="fa-sharp fa-solid fa-lock gray"></i>;

    const [isActive, setActive] = useState(false)

    const [icon, setIcon] = useState(blockedIcon)

    function handleClick() {
        setActive(!isActive)
        if (!isActive) {
            return setIcon(activeIcon)
        }
    }



    return (
        <div>
            <table >
                {taskList.map(({ id, title, state, bussinesContext }) => (
                    <tr key={id} className={isActive ? 'blue' : "gray"}>
                        <td >{icon}</td>
                        <td className='tableCell' onClick={handleClick}>{title}</td>
                        <td>{state}</td>
                        <td>{bussinesContext}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}