import { useDispatch } from 'react-redux';
import { removeTaskAction } from '../../../Store/Actions/tasksActions';

import { ITask } from "../../../Utils/types";

const DeleteTaskZone: React.FC<{currentTask: ITask}> = ({ currentTask }) => {

    const dispatch = useDispatch();

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.className = 'tasks__delete-zone_hovered';
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.className = 'tasks__delete-zone';
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, task: ITask) => {
        e.preventDefault();
        dispatch(removeTaskAction(currentTask));
        e.currentTarget.className = 'tasks__delete-zone';
    }

    return(
        <div className='tasks__delete-zone' 
                onDragOver={e => dragOverHandler(e)} 
                onDrop={e => dropHandler(e, currentTask)}
                onDragLeave={e => dragLeaveHandler(e)}>
                Delete Task
        </div>
    )
}

export default DeleteTaskZone;