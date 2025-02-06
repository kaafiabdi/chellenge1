import { useState } from "react"
export default function Shaqo(){
    let [event1,event2] = useState(1)
    function Click(e){
        e.preventDefault()
        event2(event1 +1)

    }

    return(
        <form className="guuud" onSubmit={Click}>
            <p className="qoraal">Tasbiixso</p>
            <p className="tiro">{event1}</p>
            <button className="btn" type="submit"> Click </button>

        </form>
    )
}