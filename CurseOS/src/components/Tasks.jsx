import { Play } from "phosphor-react";

function Tasks(props) {
    return (
        <ul className="space-y-4 p-6 bg-[#101828] rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="bg-[#1E2939] flex justify-between text-white  p-2">
                    <button className="flex gap-x-4"><Play size={25} />{task.title}</button>
                    <button className="border">Start</button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;