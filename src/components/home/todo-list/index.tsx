import { useMemo, useCallback } from "react";
import { getTodoListSelector, useAppSelector } from "../../../store";
import { mark, useAppDispatch } from "../../../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ITodo } from "../../../feautures/todoSlice";

const ToDos = () => {
  const todos = useAppSelector(getTodoListSelector);
  console.log("todos", todos);

  // const [check, setCheck] = useState(false);
  const dispatch = useAppDispatch();

  const boundActionCreators = useMemo(
    () => bindActionCreators({ mark }, dispatch),
    [dispatch]
  );
  console.log(boundActionCreators);

  const onMarked = useCallback(
    (id: ITodo["id"]) => {
      boundActionCreators.mark(id);
    },
    [boundActionCreators]
  );

  return (
    <div>
      {todos.map((todo) => {
        console.log(todo?.id);

        return (
          <div key={todo.name} className="cart">
            <ul>
              {/* <li style={check ? {textDecoration:"line-through"}:{textDecoration:"navy"}}>{todo?.name}</li> */}
              <li
                style={
                  todo?.completed ? { textDecoration: "line-through" } : {}
                }
              >
                {todo.name}
              </li>
              <input
                /*onChange={() => setCheck(!check)} */ onClick={() =>
                  onMarked(todo?.id)
                }
                type="checkbox"
              />
              <li>{todo?.age}</li>
            </ul>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDos;
