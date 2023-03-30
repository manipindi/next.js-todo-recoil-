import UserData from "@/components/display-user/user-data";
import { userValueAtom } from "@/recoil/atom/display-user-atoms/userAtom";
import { userSelector } from "@/recoil/selector/display-user-selectors/displayUserSelector";
import React, { Suspense, useState } from "react";
import { Form } from "react-bootstrap";
import { useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue } from "recoil";

export default function DisplayUser() {
  const [userValue, setUserValue] = useState(undefined);
  const refreshUserInfo = useRecoilRefresher_UNSTABLE(userSelector(userValue));


  const handleChange = (e: any) => {
    if (parseInt(e.target.value)) {
      // refreshUserInfo()
      setUserValue(e.target.value);
    }
  };
  
  

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ marginTop: 100 }}>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option>Select User</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserData userID={userValue}/>
      </Suspense>
    </div>
  );
}
