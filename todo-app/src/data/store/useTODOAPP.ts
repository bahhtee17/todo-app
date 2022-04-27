import create from "zustand";
import { generateId } from "./helper"
interface Task {
    id: string;
    title: string;
    createAT: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    deleteTask: (id: string) => void;
}

export const useTodoStore = create<ToDoStore>((set, get) => ({
    tasks: [{
        id: "qwer",
        title: "Default one",
        createAT: 1012000
    }],
    createTask: (title) => {
        const { tasks } = get();
        const newTask = {
            id: generateId(),
            title,
            createAT: Date.now(),
        }

        set({ tasks: [newTask].concat(tasks), })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    },
    deleteTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        })
    }
}))