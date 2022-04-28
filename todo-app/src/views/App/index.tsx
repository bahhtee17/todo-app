import React from "react";
import style from "./index.module.scss"
import { useTodoStore } from "../../data/store/useTODOAPP";
import { Input } from './../components/Input/index';
export const App: React.FC = () => {
    const [tasks, createTask, updateTask, deleteTask] = useTodoStore(state => [state.tasks, state.createTask, state.updateTask, state.deleteTask])

    console.log(tasks)
    return (
        <div className={style.container}>
            <h1 className={style.title}>TODO APP</h1>
            <section className={style.inputSection}>
                <Input onAdd={(title) => {
                    if (title) {
                        createTask(title)
                    }
                }} />
            </section>
            <section className={style.outputSection}></section>
        </div>
    )


}