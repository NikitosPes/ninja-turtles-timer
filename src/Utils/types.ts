export type taskType = 'meditation' | 'workout' | 'study' | 'entertainment';

export interface ITask {
    text: string,
    type: taskType,
    minutes: number,
    workCycle: number
}