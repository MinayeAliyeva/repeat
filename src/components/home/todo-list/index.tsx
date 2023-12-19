import { useMemo, useCallback, useState } from "react";
import { getTodoListSelector, useAppSelector } from "../../../store";
import { mark, useAppDispatch } from "../../../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ITodo } from "../../../feautures/todoSlice";
import { remove } from "../../../feautures/todoSlice";
const ToDos = () => {
  const todos = useAppSelector(getTodoListSelector);
  console.log("todos", todos);
  const [isEdit, setIsEdit] = useState(false);
  // const [check, setCheck] = useState(false);
  const dispatch = useAppDispatch();

  const boundActionCreators = useMemo(
    () => bindActionCreators({ mark, remove }, dispatch),
    [dispatch]
  );
  console.log(boundActionCreators);

  const onMarked = useCallback(
    (id: ITodo["id"]) => {
      boundActionCreators.mark(id);
    },
    [boundActionCreators]
  );
  console.log("isEdit", isEdit);

  const onRemove = useCallback(
    (id: ITodo["id"]) => {
      boundActionCreators.remove(id);
    },
    [ boundActionCreators]
  );
  const editTodo = useCallback((todo: ITodo) => {
    setIsEdit(!isEdit);
  }, []);
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
            <button onClick={() => onRemove(todo?.id)}>Delete</button>
            <button onClick={() => editTodo(todo)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDos;
