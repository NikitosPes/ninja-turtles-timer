import { TasksState, taskAction, tasksActionTypes } from '../Types/task';

const initialState: TasksState = {
    tasks: [],
}

export const tasksReducer = (state = initialState, action: taskAction): TasksState => {
    switch(action.type) {
        case tasksActionTypes.ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        case tasksActionTypes.EDIT_TASK:
            return {...state, tasks: state.tasks.map( task => task === action.payload.oldTask ? action.payload.newTask : task)}
        case tasksActionTypes.DELETE_TASK: 
            return {...state, tasks: state.tasks.filter(task => task.text !== action.payload.text)}
        default:
            return state;
    }
} 


