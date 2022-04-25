import { useState } from "react";
import CountDownTimer from '../Timer/CountDownTimer';
import Stats from '../Stats/Stats';
import Tasks from '../Tasks/Tasks';

import { ITask } from "../../Utils/types";

import './ProgressContent.scss'


const ProgressContent: React.FC = () => {
    return(
        <div className='primary-content__progress'>
            <Stats meditationProgressValue={10} workoutProgressValue={20} 
                studyProgressValue={10} entertainmentProgressValue={50}/>
            <CurrenTaskDependedComponents />
        </div>
    )
}

export default ProgressContent;


const CurrenTaskDependedComponents: React.FC = () => {

    const initialCurrentTask: ITask = {
        text: '', type: 'meditation', minutes: 0, workCycle: 0
    }

    const [currentTask, setCurrentTask] = useState<ITask>(initialCurrentTask);

    return(
        <>
            <CountDownTimer currentTask={currentTask}/>
            <Tasks currentTask={currentTask} setCurrentTask={setCurrentTask}/>
        </>
    )
} 