import { todoListItems } from "@/recoil/atom/todoAtom";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRecoilState } from "recoil";

export default function TodoForm() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useRecoilState(todoListItems);

  const handleTodoChange = (e: any) => {
    setTodoInput(e.target.value);
  };

  const handleTodoAdd = (e: any) => {
    e.preventDefault();
    if (todoInput) {
      setTodos([...todos, { message: todoInput, completed: false }]);
      setTodoInput('')
    }
  };  

  return (
    <div>
      <Form style={{ display: "flex", gap: "10px", marginTop:10 }} onSubmit={handleTodoAdd}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Task"
            value={todoInput}
            onChange={handleTodoChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}
