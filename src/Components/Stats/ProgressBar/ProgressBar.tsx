import React, { useState } from 'react';

interface ProgressBarProps {
    lable: string,
    value: number,
    color: 'blue' | 'red' | 'purple' | 'orange'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ lable, value, color }) => {

    const [completed, setСompleted] = useState(value);

    const progressFillerStyle = {
        borderRadius: 'inherit',
        height: '100%',
        width: `${completed}%`,
    }

    return(
        <div className='stats__progress-bar'>
            <label className='progress-bar__lable'>{lable}</label>
            <div className={'progress-bar__progress-bar-container'}>
                <div style={progressFillerStyle} className={`progress-bar-container__filler_${color}`}></div>
            </div>
        </div>
    )
}

export default ProgressBar;