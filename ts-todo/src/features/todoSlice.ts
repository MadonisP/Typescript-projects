import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid';

export interface Todo {
    id: string;
    title: string;
    complated: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: v4(),
                title: action.payload,
                complated: false
            };
            state.push(newTodo);
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleComplated: (state, action: PayloadAction<string>) => {
            return state.map(todo => todo.id === action.payload ? { ...todo, complated: false } : todo)
        }
    }
});

export default todoSlice.reducer;
export const { add, remove, toggleComplated } = todoSlice.actions; 