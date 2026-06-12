import { useState } from "react"
function AddTodoForm(props) {
    const activities = props.activities
    const setActivities = props.setActivities

    const [newActivity, setNewActivity] = useState("")
    function handleChange(e) {
        setNewActivity(e.target.value)
    }
    function AddActivity() {
        setActivities([...activities, { id: activities.length + 1, title: newActivity }])
        setNewActivity("")
    }
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" value={newActivity} onChange={handleChange} className="border border-black bg-transparent p-2" placeholder="Next activity...!?" />
                    <button onClick={AddActivity} className="bg-black p-2 text-white border border-black">Add</button>
                </div>
            </div>
        )
    }

    export default AddTodoForm