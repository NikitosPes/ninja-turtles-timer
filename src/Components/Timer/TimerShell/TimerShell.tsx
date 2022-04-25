import './TimerShell.scss';

const timerImg = require('../../../Assets/timerImg.png');

interface TimerShellProps {
    minutes: number, 
    seconds: number,
    stopTimer: (value: boolean) => void
}

const TimerShell: React.FC<TimerShellProps> = ({ minutes, seconds, stopTimer }) => {
    return(
        <div className='progress__timer' onClick={() => stopTimer(false)}>
            <div className='timer__time-block'>
                <span>{minutes > 9 ? minutes : `0${minutes}`}:</span>
                <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
            </div>
            <img className='timer__timer-img' src={timerImg} alt="timerImg"/>
        </div>
    )
}

export default TimerShell;