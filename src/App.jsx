import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { addtodo } from "./redux/features/todoSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const todo = useSelector((state) => state.todo.value);
const [inp, setInp] = useState("")
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
      <form className="todo" onSubmit={(e) => {
        e.preventDefault()
        dispatch(addtodo(inp))
      }}>
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
        <button>Add</button>
        <ul>
          {todo.map((x,i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
