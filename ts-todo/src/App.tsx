import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./store/store";
import { add, toggleCompleted, remove } from './features/todoSlice'

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  }

  const onDelete = (id: string) => {
    dispatch(remove(id))
  }

  const toggle = (id: string) => {
    dispatch(toggleCompleted(id))
  }

  return (
    <div>
      <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
            <button onClick={() => toggle(todo.id)}>{todo.completed ? "mark not complated" : "mark complated"}</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <span>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App;
