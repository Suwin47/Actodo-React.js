function TodoItem(props) {

    const activities = props.activities
    const setActivities = props.setActivities

    function handleDelete(deleteId) {
        const newActivities = activities.filter(function (item) {
            return item.id !== deleteId
        })
        
        setActivities(newActivities)
    }

    return (
        <div className="flex justify-between ">
            <p>{props.index + 1}. {props.item.title}</p>
            <button className="text-red-500 " onClick={() =>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem