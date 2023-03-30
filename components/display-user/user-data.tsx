import { userSelector } from "@/recoil/selector/display-user-selectors/displayUserSelector";
import React from "react";
import { useRecoilValue } from "recoil";

export default function UserData({userID}:any) {
  const userSelectorVal = useRecoilValue(userSelector(userID));

  if (!userSelectorVal) return null;

  return (
    <div style={{ marginTop: 40 }}>
      <h4>Name: {userSelectorVal.name}</h4>
      <h4>Email: {userSelectorVal.email}</h4>
    </div>
  );
}
