import { todoListItems } from "@/recoil/atom/todoAtom";
import { updatedList } from "@/recoil/selector/todoSelector";
import React, { Suspense } from "react";
import { Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import styles from "./todo-container.module.css";
import TodoItem from "./todo-item";

export default function TodoContainer() {
  const todos = useRecoilValue(todoListItems);
  const updatedTodoList = useRecoilValue(updatedList);  
  
  return (
    <div className={styles.todocontainer}>
      <div className={styles.todoItem}>
        {!todos?.length && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Add Todos from Above</p>
          </div>
        )}
        {!!todos &&
          !!todos.length &&
          todos.map((todo: any, idx: any) => (
              <TodoItem todo={todo} key={idx} />
          ))}
      </div>

      {/* <div>
        {!!updatedTodoList &&
          !!updatedTodoList?.length &&
          updatedTodoList?.map((todo, idx) => (
            <div key={idx}>
              <h2>{todo.message}</h2>
            </div>
          ))}
      </div> */}
    </div>
  );
}
