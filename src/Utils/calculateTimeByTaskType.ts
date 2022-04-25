import { taskType } from "./types";

const calculateTimeByTaskType = (type: taskType): number => {
    if(type === 'meditation') return 10;
    if(type === 'workout') return 60;
    if(type === 'study') return 45;
    return 15;
}

export default calculateTimeByTaskType;