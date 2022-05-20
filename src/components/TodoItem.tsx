import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem: React.FC = ({ todo }: any) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const [display, setDisplay] = useState("none");

  let dispatch = useDispatch();

  const handleDisplay = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };

  const styles = {
    display: display,
  };

  return (
    <>
      <div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <div className="main_element" onClick={handleDisplay}>
              <p>{todo.name}</p>
              <p>{todo.quantity}</p>
              <p>{todo.adding}</p>
              <button
                className="button"
                style={styles}
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <FaTrashAlt className="trash" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
