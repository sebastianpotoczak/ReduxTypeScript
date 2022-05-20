import React, { useState } from "react";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    setName(newName);
  };
  const handleSurname = (e: React.FormEvent<HTMLInputElement>) => {
    const newSurname = e.currentTarget.value;
    setSurname(newSurname);
  };
  const handleClick = () => {
    localStorage.setItem("Surname", surname);
    localStorage.setItem("Name", name);
  };

  return (
    <div className="login">
      <div className="login-form">
        <form>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <p>Imię</p>
              <input onChange={handleName} type="text" />
            </div>
            <div className="input-field">
              <p>Nazwisko</p>
              <input onChange={handleSurname} type="text" />
            </div>
          </div>
          <div className="action">
            <button onClick={handleClick}>Zaloguj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
