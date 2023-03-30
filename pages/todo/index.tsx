import TodoForm from "@/components/form";
import React, { Suspense } from "react";
import styles from "./todo.module.css";
import dynamic from "next/dynamic";

const TodoContainer = dynamic(
  () => import("../../components/todoContainer/todo-container"),
  { ssr: false }
);

export default function Todo() {
  return (
    <div className={styles.container}>
      <div className={styles.todocard}>
        <h2>Todo App</h2>
        <TodoForm />
        <Suspense fallback={<div>Loading.....</div>}>
          <TodoContainer />
        </Suspense>
      </div>
    </div>
  );
}
