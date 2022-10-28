import {useTypeSelector} from "../hooks/useTypeSelector";
import "./TodoList.css"
import React, {useEffect, useState} from "react";
import {fetchTodo, setTodoPage} from "../store/action-creators/todo";
import {useActions} from "../hooks/useAction";


const TodoList: React.FC = () => {
    const {todo, loader, error, limit, page} = useTypeSelector(store => store.todo)
    const {fetchTodo, setTodoPage} = useActions()
    const pageNumber: Array<number> = [1, 2, 3, 4, 5]


    useEffect( ()=> {
        fetchTodo(page, limit)
    }, [page])



    return(
        <div>
            { loader?
                "Загрузка страницы":
                error?
                error:
                    todo.map(element => <div key={element.id}>{element.id} - {element.title}
                        <div>{element.completed}</div>
                    </div>)
            }
            <div className='page'>
                {
                    pageNumber.map(element => {
                            return <div
                                key={element}
                                onClick={() =>
                                    setTodoPage(element)}>
                                {element}
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default TodoList