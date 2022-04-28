import React, { useCallback, useState } from "react";
import style from "./index.module.scss"

interface InputTaskProps {
    onAdd: (title: string) => void;
}

export const Input: React.FC<InputTaskProps>
    = ({ onAdd, }) => {
        const [inputValue, setInputValue] = useState("");

        const addTask = useCallback(() => {
            onAdd(inputValue);
            setInputValue("")
        }, [inputValue])


        return (
            <div className={style.container}>
                <input type="text"
                    className={style.inputText}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }}
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }} />
                <button className={style.icon}
                    onClick={addTask}
                >Add Task</button>
            </div>
        )
    }