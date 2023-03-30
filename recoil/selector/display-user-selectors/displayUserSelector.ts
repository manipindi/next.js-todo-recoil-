import { userValueAtom } from "@/recoil/atom/display-user-atoms/userAtom";
import axios from "axios";
import { selector, selectorFamily } from "recoil";

// export const userSelector = selector({
//   key: "userSelectorVal",
//   get: async ({ get }) => {
//     const userID = get(userValueAtom);

//     if (!userID) return;

//     if(userID){
//         let userData = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${userID}`
//           );
//         return userData.data
//     }
//   },
// });

export const userSelector = selectorFamily({
    key: "userSelectorVal",
    get: (userID:any) => async () => {  
      if (!userID) return;
  
      if(userID){
          let userData = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${userID}`
            );
          return userData.data
      }
    },
  });
  
