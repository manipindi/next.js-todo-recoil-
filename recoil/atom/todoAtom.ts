import { useEffect, useState } from "react";
import { atom, AtomEffect } from "recoil";

export interface Todo {
  message?: any;
  completed?: any;
}

const localStorageEffect =
  (key: any) =>
  ({ setSelf, onSet }: any) => {
    let storage = typeof window !== "undefined" ? window.localStorage : null;
    const savedValue = storage?.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newList: any) => {
      if (newList.length) {
        localStorage.setItem(key, JSON.stringify(newList));
      } else {
        localStorage.removeItem(key);
      }
    });
  };

export const todoListItems = atom({
  key: "toList",
  default: [] as Todo[],
  effects: [localStorageEffect("TodoList")],
  // effects_UNSTABLE:[
  //   ({onSet, setSelf})=>{

  //     let storage = typeof window !== "undefined" ? window.localStorage : null;
  //         const savedValue = storage?.getItem("TodoList");
  //         if (savedValue != null) {
  //           setSelf(JSON.parse(savedValue));
  //         }

  //     onSet((newList:any)=>{
  //       if(newList.length){
  //         localStorage.setItem("TodoList", JSON.stringify(newList))
  //       }else{
  //         localStorage.removeItem("TodoLists")
  //       }
  //     })
  //   }
  // ]
});
