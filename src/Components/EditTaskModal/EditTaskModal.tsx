import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskAction } from '../../Store/Actions/tasksActions';
import { ITask, taskType } from '../../Utils/types';
import calculateTimeByTaskType from '../../Utils/calculateTimeByTaskType';

import './EditTaskModal.scss';


interface ModalProps {
    active: boolean,
    setActive: (value: boolean) => void,
    task: ITask,
    setModalActive: (value: boolean) => void,
    setCurrentTask: (task: ITask) => void
}

const EditTaskModal: React.FC<ModalProps> = ({ active, setActive, task, setModalActive, setCurrentTask }) => {

    const dispatch = useDispatch();

    const MIN_WORK_CIRCLES = 1;
    const MAX_WORK_CIRCLES = 10;

    const [ediTaskText, setText] = useState<string>(task.text);
    const [ediTaskType, setType] = useState<taskType>(task.type);
    const [editWorkCycleTask, setWorkCircle] = useState<number>(task.workCycle);

    useEffect(() => {
        setText(task.text);
        setType(task.type);
        setWorkCircle(task.workCycle);
    }, [task]);

    const textHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const typeHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === 'meditation' || e.target.value === 'workout' || e.target.value === 'study' || e.target.value === 'entertainment')
            setType(e.target.value);
    }

    const workCycleHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkCircle(Number(e.target.value));
    }

    const submitAllChanges = () => {
        const ediTask: ITask = {
            text: ediTaskText,
            type: ediTaskType,
            workCycle: editWorkCycleTask,
            minutes: calculateTimeByTaskType(ediTaskType)
        }
        dispatch(editTaskAction({oldTask: task, newTask: ediTask}));
        setCurrentTask(ediTask);
        setModalActive(false);
    }

    return(
        <div className={active ? 'tasks__edit-task-modal active' : 'tasks__edit-task-modal' } onClick={() => setActive(false)}>
            <div className={active ? 'edit-task-modal__content active' : 'edit-task-modal__content' } onClick={e => e.stopPropagation()}>
                <h1>Edit task</h1>
                <label>Text: </label>
                <input type='text' value={ediTaskText} onChange={e => textHandlerChange(e)}/>
                <fieldset>
                    <legend>Choose type of the task</legend>
                    <input type='radio' name='task-type' value='meditation' checked = {'meditation' === ediTaskType} onChange={typeHandlerChange}/>
                    <label>Meditation</label><br />
                    <input type='radio' name='task-type' value='workout' checked = {'workout' === ediTaskType} onChange={typeHandlerChange}/>
                    <label>Workout</label><br />
                    <input type='radio' name='task-type' value='study' checked = {'study' === ediTaskType} onChange={typeHandlerChange}/>
                    <label>Study</label><br />
                    <input type='radio' name='task-type' value='entertainment' checked = {'entertainment' === ediTaskType} onChange={typeHandlerChange}/>
                    <label>Entertainment</label><br />
                </fieldset>
                <label>Work cycles: </label>
                <input type='number' min={MIN_WORK_CIRCLES} max={MAX_WORK_CIRCLES} value={editWorkCycleTask} onChange={workCycleHandlerChange}/><br />
                <button className='content__confirm-button' onClick={submitAllChanges} disabled={ediTaskText.length === 0}>Confirm</button>
            </div>
        </div>
    )
}

export default EditTaskModal;
