import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function Todocontainer() {
     const [activities, setActivities] = useState([
        {
            id: 1,
            title: "Go for a walk"
        },
        {
            id: 2,
            title: "Read a book"
        },
        {
            id: 3,
            title: "Listen to music"
        }
    ])
    return (
        <div>
            <div className="flex flex-wrap gap-5">
                <AddTodoForm activities={activities} setActivities={setActivities} />
                <TodoList activities={activities} setActivities={setActivities} />
            </div>
        </div >
    )
}
export default Todocontainer



    