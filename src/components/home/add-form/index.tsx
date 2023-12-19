import { useCallback, useState } from "react";
import { add } from "../../../store";
import { useAppDispatch } from "../../../store";
import ToDos from "../todo-list";

interface ITodo {
  name: string;
  age: number;
}
const initialState = {
  name: "",
  age: 0,
};
//
const AddForm = () => {
  const [todo, setTodo] = useState<ITodo>(initialState);
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setTodo((prevs) => ({
        ...prevs,
        [name]: value,
      }));
    },
    [setTodo]
  );
  //
  const onSubmit = useCallback(() => {
    dispatch(add(todo));
    setTodo(initialState);
  }, [dispatch, todo]);

  return (
    <>
      <form>
        <label>Name</label>
        <input
          value={todo.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <label>Age</label>
        <input
          value={todo.age}
          name="age"
          onChange={(e) => handleChange(e)}
          type="number"
        />
        <button onClick={onSubmit} type="button">
          Add
        </button>
      </form>
      <hr />
      <ToDos />
    </>
  );
};

export default AddForm;
