import './Cloud.css'
import { useState } from 'react'
import CloudLabel from './CloudLabel'
export default function Cloud() {

    const [read, setRead] = useState(false)
    const [readMessage, setReadMessage] = useState(false)



    function checkMessage() {
        setReadMessage(true)
        setRead(true)

    }


    return (
        <div className={read ? "old" : "cloud"} onClick={checkMessage}>
            <div className='miniTitle'>
                <div className={readMessage ? "readMesage" : "newMessage"} onClick={checkMessage}>
                    NEW
                </div>
                <h3 >New message</h3>

            </div>
            <main>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </main>
        </div>

    )
}