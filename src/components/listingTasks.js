import taskList from "./db";
import { useState } from "react";

export default function ListingTasks() {


    return (
        <div>
            <table>
                    {taskList.map(({ id, title, state, bussinesContext }) => (
                        <tr key={id}>
                            <td >{title}</td>
                            <td >{state}</td>
                            <td >{bussinesContext}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}