import { todoListItems } from "@/recoil/atom/todoAtom";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";

export default function TodoItem({ todo }: any) {
  const [todos, setTodos] = useRecoilState(todoListItems);


  const [editEnable, setEditEnable] = useState(false);

  const [todoInput, setTodoInput] = useState(todo.message);

  const todoItemIndex = todos.findIndex((item: any) => item === todo);

  const handleTodoEdit = () => {
    setEditEnable(!editEnable);
  };

  const handleTodoUpdate = () => {
    setTodoInput(todoInput);
    setEditEnable(!editEnable);
    const todoList = structuredClone(todos);
    todoList[todoItemIndex] = { message: todoInput, completed: true };

    setTodos([...todoList]);
  };

  const handleTodoChange = (e: any) => {
    setTodoInput(e.target.value);
  };

  const handleDelete = () => {
    const todoList = structuredClone(todos);
    todoList.splice(todoItemIndex, 1);
    setTodos([...todoList])
  };    
  

  return (
    <div
      style={{
        display: "flex",
        padding: "6px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {editEnable ? (
        <Form.Control
          type="text"
          placeholder="Enter Updated Text"
          value={todoInput}
          onChange={handleTodoChange}
        />
      ) : (
        <p style={{ margin: 0 }}>{todo.message}</p>
      )}
      <div style={{ display: "flex", gap: "4px" }}>
        {editEnable ? (
          <Button variant="primary" onClick={handleTodoUpdate}>
            Update
          </Button>
        ) : (
          <Button variant="primary" onClick={handleTodoEdit}>
            Edit
          </Button>
        )}
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
