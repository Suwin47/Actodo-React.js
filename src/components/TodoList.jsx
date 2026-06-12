import { useState } from "react"
import TodoItem from "./TodoItem"
function TodoList(props) {

    const activities = props.activities
    const setActivities = props.setActivities

    return (

        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-xl font-medium">Today's Activities</h1>
            {
                activities.length === 0 ? (
                    <p>You haven't added any activities yet.</p>
                ) : (
                    activities.map(function (item, index) {
                        return <TodoItem id={item.id} item={item} index={index} activities={activities} setActivities={setActivities} />
                    })
                )
            }
        </div>
    )
}
export default TodoList