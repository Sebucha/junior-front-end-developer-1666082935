const Task = ({ id, title, state, manageTask }) => {
    const icons = {
        completed: <i className="fa-solid fa-check green"></i>,
        active: <i className="fa-solid fa-arrow-right blue"></i>,
        blocked: <i className="fa-sharp fa-solid fa-lock gray"></i>,
    };

    let icon = state.active
        ? icons.active
        : state.completed
            ? icons.completed
            : state.blocked
                ? icons.blocked
                : null;

    return (
        <tr className={state.active ? "blue" : state.completed ? "green" : "gray"}>
            <td>{icon}</td>
            <td className="tableCell" onClick={() => manageTask(id, "active", true)}>
                {title}
            </td>
        </tr>
    );
};
export default Task;
