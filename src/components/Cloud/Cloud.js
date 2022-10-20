import './Cloud.css'
import { useState } from 'react'

export default function Cloud() {

    const [read, setRead] = useState(false)

    function checkRead() {
        setRead(true)
    }


    return (
        <div className={read ? "old" : "cloud"} onClick={checkRead}>
            <h3 >New message</h3>
            <main>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</main>
        </div>

    )
}