import React, { useState } from 'react';
import { useTypedSelector } from '../../Hooks/usedTypedSelector';
import Task from './Task/Task';
import DeleteTaskZone from './DeleteTaskZone/DeleteTaskZone';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

import { ITask } from '../../Utils/types';

import './Tasks.scss'

interface TaskProps {
    currentTask: ITask,
    setCurrentTask: (task: ITask) => void
}

const Tasks: React.FC<TaskProps> = ({ currentTask, setCurrentTask }) => {

    const state = useTypedSelector(state => state.tasks);
    const [modalActive, setModalActive] = useState<boolean>(false);

    return(
        <>
            <div className='progress__tasks'>
                <h2 className='tasks__title'>Tasks</h2>
                {state.tasks.map((task, index) => {
                    return <Task index={index + 1} task={task} setTask={setCurrentTask} setActiveModal={setModalActive} key={index}/>
                })}
                <DeleteTaskZone currentTask={currentTask}/>
                <EditTaskModal active={modalActive} setActive={setModalActive} 
                    task={currentTask} setModalActive={setModalActive} setCurrentTask={setCurrentTask}/>
            </div>
        </>
    );
}

export default Tasks;
