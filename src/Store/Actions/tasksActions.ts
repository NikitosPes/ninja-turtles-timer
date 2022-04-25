import { taskAction, tasksActionTypes } from '../Types/task';
import { ITask } from '../../Utils/types';

export const addTaskAction = (payload: ITask): taskAction => ({type: tasksActionTypes.ADD_TASK, payload});
export const removeTaskAction = (payload: ITask): taskAction => ({type: tasksActionTypes.DELETE_TASK, payload});
export const editTaskAction = (payload: {oldTask: ITask, newTask: ITask}): taskAction => ({type: tasksActionTypes.EDIT_TASK, payload});