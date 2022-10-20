import './CloudLabel.css'
import { useState } from "react"
export default function CloudLabel() {

    const [readMessage, setReadMessage] = useState(false)



    function checkMessage() {
        setReadMessage(true)
    }

    return (
        <div className={readMessage ? "readMesage" : "newMessage"} onClick={checkMessage}>
            NEW
        </div>
    )
}