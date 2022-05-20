import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoInput: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const nameLocal = localStorage.getItem("Name");
  const surname = localStorage.getItem("Surname");

  let fullName = nameLocal + " " + surname;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.currentTarget.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: name,
        quantity: quantity,
        adding: fullName,
      })
    );
    setName("");
    setQuantity("");
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login-form">
        <form>
          <h1>Dodaj towar</h1>
          <div className="content">
            <div className="input-field">
              <p>Nazwa</p>
              <input onChange={handleChange} type="text" value={name} />
            </div>
            <div className="input-field">
              <p>Ilość</p>
              <input onChange={handleChanges} type="number" value={quantity} />
            </div>
          </div>
          <div className="action">
            <button onClick={handleClick}>Dodaj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
