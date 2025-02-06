import { useState } from "react"
export default function Todolist(){
    let [event1,event2] = useState("")
    function Click(e){
        e.preventDefault()
        event2(e.target.text.value)

    }



    return(
        <form  class="container" onSubmit={Click}>
        <div class="box">
            <h1>To-Do List</h1>
            <input type="text" id="todoInput" name="text" placeholder="Add a new task..." />
            <button id="addButton" type="submit">Add Task</button>
            <ul id="todoList">
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
                <li>{event1}</li>
            </ul>
        </div>
    </form>
    )
}