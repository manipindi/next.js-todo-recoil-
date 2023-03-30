import { todoAtomFamily } from "@/recoil/atom-family/todo-latest/todo-lates-atomFam";
import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";

export default function TodoItem({ todoId }: any) {
  console.log(todoId);
  
  const [todoItem, setTodoItem] = useRecoilState(todoAtomFamily(todoId));

  return (
    <div style={{width:"100%"}}>
      <div style={{display:"flex", gap:"10px", justifyContent:"space-between"}}>
        <h3>{todoItem.message}</h3>
        <Button>
            Update
        </Button>
      </div>
    </div>
  );
}
