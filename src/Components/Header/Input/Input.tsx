import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../../Store/Actions/tasksActions';
import { ITask, taskType } from '../../../Utils/types';

interface InputProps {
    currentTaskType: taskType,
    currentWorkCycles: number
}

const Input: React.FC<InputProps> = ({ currentTaskType, currentWorkCycles }) => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const setTimeForTask = (type: taskType):number => {
        if(type === 'meditation')
            return 15;
        if(type === 'workout')
            return 60;
        if(type === 'study')
            return 45;
        return 15;
    }

    const onClickHandler = (e: React.KeyboardEvent) => {
        if(inputValue.length === 0) return;
        if(e.code === 'Enter') {
            let newTask: ITask = {
                text: inputValue,
                type: currentTaskType,
                minutes: setTimeForTask(currentTaskType),
                workCycle: currentWorkCycles
            }
            dispatch(addTaskAction(newTask));
            setInputValue('');
        }
    }

    return(
        <>
            <input className='creation-task-block__input' type="text" 
                value={inputValue} 
                onChange={e => onChangeHandler(e)} 
                onKeyDown={e => onClickHandler(e)}
            />
        </>
    )
}

export default Input;