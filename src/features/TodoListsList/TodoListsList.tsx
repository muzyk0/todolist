import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TodolistDomainType } from './todolists-reducer'
import { TasksStateType } from './tasks-reducer'
import { Grid } from '@material-ui/core'
import {
    AddItemForm,
    AddItemFormSubmitHelperType,
} from '../../components/AddItemForm/AddItemForm'
import { Redirect } from 'react-router-dom'
import { selectIsLoggedIn } from '../Auth/selectors'
import { todolistsActions } from './index'
import { AppRootStateType } from '../../utils/types'
import { useActions, useAppDispatch } from '../../utils/redux-utils'
import { Todolist } from './TodoList/TodoList'

type PropsType = {
    demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({ demo = false }) => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(
        (state) => state.todolists
    )
    const tasks = useSelector<AppRootStateType, TasksStateType>(
        (state) => state.tasks
    )
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const dispatch = useAppDispatch()

    const { fetchTodolistsTC } = useActions(todolistsActions)

    const addTodolistCallback = useCallback(
        async (title: string, helper: AddItemFormSubmitHelperType) => {
            let thunk = todolistsActions.addTodolistTC(title)
            const resultAction = await dispatch(thunk)

            if (todolistsActions.addTodolistTC.rejected.match(resultAction)) {
                if (resultAction.payload?.errors?.length) {
                    const errorMessage = resultAction.payload?.errors[0]
                    helper.setError(errorMessage)
                } else {
                    helper.setError('Some error occured')
                }
            } else {
                helper.setTitle('')
            }
        },
        [dispatch]
    )

    useEffect(() => {
        if (demo || !isLoggedIn) {
            return
        }
        if (!todolists.length) {
            fetchTodolistsTC()
        }
    }, [demo, fetchTodolistsTC, isLoggedIn, todolists.length])

    if (!isLoggedIn) {
        return <Redirect to={'/login'} />
    }

    return (
        <>
            <Grid container style={{ padding: '20px 0' }}>
                <AddItemForm addItem={addTodolistCallback} />
            </Grid>
            <Grid
                container
                spacing={3}
                style={{ flexWrap: 'nowrap', overflowX: 'scroll' }}
            >
                {todolists.map((tl) => {
                    let allTodolistTasks = tasks[tl.id]

                    return (
                        <Grid item key={tl.id}>
                            <div style={{ width: '300px' }}>
                                <Todolist
                                    todolist={tl}
                                    tasks={allTodolistTasks}
                                    demo={demo}
                                />
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
