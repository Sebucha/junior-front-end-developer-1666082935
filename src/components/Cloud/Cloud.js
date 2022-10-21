import './Cloud.css'
import { useState } from 'react'
import dateFormat from 'dateformat';

export default function Cloud() {
    const now = new Date();
    const [read, setRead] = useState(false)
    const [readMessage, setReadMessage] = useState(false)



    function checkMessage() {
        setReadMessage(true)
        setRead(true)

    }


    return (
        <div className={read ? "old" : "cloud"} onClick={checkMessage}>
            <div className='miniTitle'>
                <div className={readMessage ? "readMessage" : "newMessage"} onClick={checkMessage}>
                    NEW
                </div>
                <h3 >New message</h3>
                <div>{dateFormat(now)}</div>
            </div>
            <main>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </main>
        </div>

    )
}