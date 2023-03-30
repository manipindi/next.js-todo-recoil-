import TodoItem from "@/components/todo-latest/todo-tem";
import { todoAtomFamily } from "@/recoil/atom-family/todo-latest/todo-lates-atomFam";
import { latestTodoAtom } from "@/recoil/atom/todo-latest/latest-todo-atom";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRecoilCallback, useRecoilState } from "recoil";

export default function TodoLatest() {
  const [todos, setTodos] = useRecoilState<any>(latestTodoAtom);
  const [input, setInput] = useState("");

  const handleTodoInput = (e: any) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    if (input.length) {
      setTodos([...todos, todos.length]);
      setInput("");
      let dataINput = { message: input, id: todos.length };
      insertTodo(dataINput);
    }
  };

  //@ts-ignore
  const insertTodo = useRecoilCallback(({ set }) => 
    (inputData: any) => {
      set(todoAtomFamily(inputData?.id), {
        message: inputData?.message,
        isUpdated: false,
      })
  });
  


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ width: "400px", minHeight: "300px", marginTop: 140 }}>
          <Form
            className="d-flex"
            style={{ gap: "20px", justifyContent:"space-between" }}
            onSubmit={submitTodoHandler}
          >
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Todo"
                value={input}
                onChange={handleTodoInput}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div style={{ width: "400px", marginTop: 40, display:"flex", flexDirection:"column", gap:"10px" }}>
            {!!todos && !!todos.length && todos.map((todo: any, idx:any) => <div>
                <div key={idx}>
                <TodoItem todoId={todo} key={idx}/>
                </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
