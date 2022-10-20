import "./Label.css"

import dateFormat from 'dateformat';

export default function Label() {
    const newDate = new Date();


    return (
        <div>
            <h2 className="title">Title</h2>

            <h4>Sebastian Okulewicz</h4>
            <div>{dateFormat()}</div>

            <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</label>
        </div>
    )
}