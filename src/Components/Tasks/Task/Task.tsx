import { ITask } from "../../../Utils/types";

interface TaskProps {
    index: number,
    task: ITask,
    setTask: (task: ITask) => void,
    setActiveModal: (status: boolean) => void
}

const Task:React.FC<TaskProps> = ({ index, task, setTask, setActiveModal }) => {

    const dragStartHandaler = (e: React.DragEvent<HTMLDivElement>) => {
        setTask(task);
    }

    return(
        <div className={`${ task.workCycle !== 0 ? 'tasks__item' : 'tasks__item_completed' }`} onClick={() => setTask(task)} 
                draggable={true} onDragStart={(e) => dragStartHandaler(e)} onDoubleClick={() => setActiveModal(true)}>
            <p>{`${index}. `}</p>
            <p>{task.text}</p>
            {task.workCycle !== 0 ? <p className='item_workCycle'>{task.workCycle}</p> : null}
        </div>
    )
}

export default Task;