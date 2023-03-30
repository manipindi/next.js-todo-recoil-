import { selector } from "recoil";
import { todoListItems } from "../atom/todoAtom";

export const updatedList = selector({
    key: "updatedAtleaseOnceList",
    get: ({get})=>{
        const list = get(todoListItems);
        if(list?.length){
            let upList = [];
            for(const item of list){
                if(item.completed){
                    upList.push(item)
                }
            }
            return upList
        }
    }
})