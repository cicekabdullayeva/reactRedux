import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>REDUX {counter} </h1>
      <button
        onClick={() => dispatch(increment(5))}
        style={{ padding: "10px 30px", marginRight: "10px" }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ padding: "10px 30px", marginLeft: "auto" }}
      >
        -
      </button>
      <button onClick={() => dispatch(signin())}>Log out</button>
    </div>
  );
}

export default App;
