import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TimerShell from './TimerShell/TimerShell';
import { ITask } from '../../Utils/types';
import { editTaskAction } from '../../Store/Actions/tasksActions';
import calculateTimeByTaskType from '../../Utils/calculateTimeByTaskType'

interface CountDownTimerProps {
    currentTask: ITask
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ currentTask }) => {

    const dispatch = useDispatch();
    const [isStopped, setStopped] = useState<boolean>(true);
    const [currentMinutes, setMinutes] = useState<number>(0);  
    const [currentSeconds, setSeconds] = useState<number>(0);
    
    useEffect(() => {
        if(!isStopped && currentTask.workCycle !== 0) {
            let timerInterval = setInterval(() => {
                if(currentSeconds > 0)
                    setSeconds(prevstate => prevstate - 1);
                if(currentSeconds === 0) {
                    if(currentMinutes > 0) {
                        setMinutes(prevstate => prevstate - 1);
                        setSeconds(59);
                    }
                    if(currentMinutes === 0) decrementTaskWorkCycle();
                    clearInterval(timerInterval);
                }
            }, 1000);
    
            return () => clearInterval(timerInterval);
        }
    });

    useEffect(() => {
        console.log(currentTask)
        setMinutes(calculateTimeByTaskType(currentTask.type))
    },[currentTask])

    const decrementTaskWorkCycle = () => {
        const newTask: ITask = {...currentTask, workCycle: currentTask.workCycle - 1}
        dispatch(editTaskAction({oldTask: currentTask, newTask: newTask}))
    }

    return (
        <>
            <TimerShell minutes={currentMinutes} seconds={currentSeconds} stopTimer={setStopped}/>
        </>
    )
}

export default CountDownTimer;