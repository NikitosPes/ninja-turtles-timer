import React, { useState } from 'react';
import { taskType } from '../../../Utils/types';
import Input from '../Input/Input';

const meditationIcon = require('../../../Assets/Icons/meditation-icon.png');
const workoutIcon = require('../../../Assets/Icons/workout-icon.png');
const studyIcon = require('../../../Assets/Icons/study-icon.png');
const entertainmentIcon = require('../../../Assets/Icons/entertainment-icon.png');

interface ICurrentType {
    type: taskType,
    img: string
}

const CreationTaskBlock: React.FC = () => {

    const meditationType: ICurrentType = {type: 'meditation', img: meditationIcon};
    const workoutType: ICurrentType = {type: 'workout', img: workoutIcon};
    const studyType: ICurrentType = {type: 'study', img: studyIcon };
    const entertainmentType: ICurrentType = {type: 'entertainment', img: entertainmentIcon};

    const [currentType, setCurrentType] = useState<ICurrentType>(meditationType);
    const [currentWorkCycles, setWorkCycles] = useState<number>(1);

    return (
        <div className='header__creation-task-block'>
            <div className='creation-task-block__dropdown'>
                <img className='dropdown__img' src={currentType.img}/>
                <div className='dropdown__content'>
                    <a onClick={() => {setCurrentType(meditationType)}}><img src={meditationIcon}/></a>
                    <a onClick={() => {setCurrentType(workoutType)}}><img src={workoutIcon}/></a>
                    <a onClick={() => {setCurrentType(studyType)}}><img src={studyIcon}/></a>
                    <a onClick={() => {setCurrentType(entertainmentType)}}><img src={entertainmentIcon}/></a>
                </div>
            </div>
            <Input currentTaskType={currentType.type} currentWorkCycles={currentWorkCycles}/>
            <input className='creation-task-block__number-input' type='number' 
                value={currentWorkCycles} min={1} max={10} onChange={(e) => setWorkCycles(Number(e.target.value))}/>
        </div>

    )
}

export default CreationTaskBlock;