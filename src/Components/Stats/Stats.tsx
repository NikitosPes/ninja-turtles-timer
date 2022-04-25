import ProgressBar from './ProgressBar/ProgressBar';

import './Stats.scss';

interface ProgressBlockProps {
    meditationProgressValue: number,
    workoutProgressValue: number,
    studyProgressValue: number,
    entertainmentProgressValue: number
}

const ProgressBlock: React.FC<ProgressBlockProps> = ({...props}) => {
    return(
        <div className='progress__stats'>
            <ProgressBar lable='meditation' value={props.meditationProgressValue} color='blue'/>
            <ProgressBar lable='workout' value={props.workoutProgressValue} color='red'/>
            <ProgressBar lable='study' value={props.studyProgressValue} color='purple'/>
            <ProgressBar lable='entertainment' value={props.entertainmentProgressValue} color='orange'/>
        </div>
    )
}

export default ProgressBlock;