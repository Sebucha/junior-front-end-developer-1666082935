import taskList from "./db";
import { useState } from "react";

export default function ListingTasks() {
    // const [list, setList] = useState(taskList)
    // const tableStyle = {
    //     display: "flex",
    //     alignItems: "flex-start",
    //     alignContent: "flex-start",
    //     justifyContent: "flex-start"
    // }

    return (
        <div>
            <table>
                <tbody>
                    {taskList.map(({ id, title, state, bussinesContext }) => (
                        <tr key={id}>
                            <td >{title}</td>
                            <td >{state}</td>
                            <td >{bussinesContext}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}