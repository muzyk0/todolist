import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import {EditableSpan} from './EditableSpan';
import {Delete} from '@material-ui/icons';
import {TaskStatuses, TaskType} from './api/todolist-api';


export type TaskPropsType = {
    task: TaskType
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, status: TaskStatuses) => void
    changeTaskTitle: (taskID: string, newTitle: string) => void
}
export const Task: React.FC<TaskPropsType> = React.memo((props) => {

    const {
        task,
        removeTask,
        changeTaskStatus,
        changeTaskTitle
    } = props

    const onClickHandler = () => {
        removeTask(task.id)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(task.id, e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New)
    }
    const onTitleChangeHandler = useCallback((newTitle: string) => {
        changeTaskTitle(task.id, newTitle)
    }, [changeTaskTitle, task.id])

    return (
        <li style={task.status === TaskStatuses.Completed ? {opacity: '0.5'} : {opacity: 1}}>
            <Checkbox
                checked={task.status === TaskStatuses.Completed}
                onChange={onChangeHandler}
            />
            <EditableSpan title={task.title} changeTitle={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </li>
    )
})