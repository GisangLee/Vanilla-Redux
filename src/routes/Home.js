import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, dispatchAddToDo }) {
  console.log({ toDos });
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatchAddToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddToDo: (text) => dispatch(addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
