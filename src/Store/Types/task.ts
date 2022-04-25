import { ITask } from "../../Utils/types"

interface addTaskAction {
    type: tasksActionTypes.ADD_TASK,
    payload: ITask
}

interface editTaskAction {
    type: tasksActionTypes.EDIT_TASK,
    payload: {
        oldTask: ITask,
        newTask: ITask
    }
}

interface deleteTaskAction {
    type: tasksActionTypes.DELETE_TASK,
    payload: ITask
}

export interface TasksState {
    tasks: ITask[]
}

export enum tasksActionTypes {
    ADD_TASK = 'ADD_TASK',
    EDIT_TASK = 'EDIT_TASK',
    DELETE_TASK = 'DELETE_TASK'
}

export type taskAction = addTaskAction | editTaskAction | deleteTaskAction;
